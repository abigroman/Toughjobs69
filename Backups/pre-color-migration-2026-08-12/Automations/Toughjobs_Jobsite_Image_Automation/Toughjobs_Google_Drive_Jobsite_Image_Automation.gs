/**
 * Toughjobs Google Drive Jobsite Image Automation
 *
 * Workflow:
 * 1. iPhone photos are uploaded to BUSINESS IMAGES.
 * 2. The script reads the GPS coordinates stored in each image's Drive metadata.
 * 3. Photos within 1,000 feet of an existing jobsite are moved into that jobsite folder.
 * 4. A new address-named folder is created in JOBSITES when no existing jobsite is within 1,000 feet.
 * 5. The script runs automatically on a time-driven trigger.
 *
 * Required Apps Script service:
 * - Advanced Google service: Drive API
 */

const CONFIG = Object.freeze({
  // Paste the Google Drive folder ID of the parent folder that should contain
  // BUSINESS IMAGES and JOBSITES.
  PARENT_FOLDER_ID: 'PASTE_PARENT_FOLDER_ID_HERE',

  INTAKE_FOLDER_NAME: 'BUSINESS IMAGES',
  JOBSITES_FOLDER_NAME: 'JOBSITES',

  DISTANCE_FEET: 1000,
  BATCH_SIZE: 50,
  TRIGGER_MINUTES: 5,
});

/**
 * Run once after pasting the parent folder ID and enabling the Drive API service.
 * Creates the two required folders if they do not already exist and installs
 * the automatic trigger.
 */
function setupAutomation() {
  validateConfiguration_();

  const folders = initializeFolders_();
  removeTriggersForFunction_('processBusinessImages');

  ScriptApp.newTrigger('processBusinessImages')
    .timeBased()
    .everyMinutes(CONFIG.TRIGGER_MINUTES)
    .create();

  console.log('Automation installed.');
  console.log('BUSINESS IMAGES: ' + folders.intake.getUrl());
  console.log('JOBSITES: ' + folders.jobsites.getUrl());
}

/**
 * Main scheduled function. It scans the BUSINESS IMAGES intake folder and
 * processes up to CONFIG.BATCH_SIZE image files per execution.
 */
function processBusinessImages() {
  validateConfiguration_();

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) {
    console.log('Another image-processing run is already active.');
    return;
  }

  try {
    const folders = initializeFolders_();
    const jobsiteIndex = loadJobsiteIndex_(folders.jobsites);
    const files = folders.intake.getFiles();

    let examined = 0;
    let moved = 0;
    let missingGps = 0;
    let errors = 0;

    while (files.hasNext() && examined < CONFIG.BATCH_SIZE) {
      const file = files.next();
      const mimeType = file.getMimeType() || '';

      if (!mimeType.startsWith('image/')) {
        console.log('Skipped non-image file: ' + file.getName());
        continue;
      }

      examined += 1;

      try {
        const result = processImage_(file, folders.jobsites, jobsiteIndex);

        if (result === 'MOVED') moved += 1;
        if (result === 'NO_GPS') missingGps += 1;
      } catch (error) {
        errors += 1;
        console.error('Failed to process ' + file.getName() + ': ' + error.message);
        recordFileStatus_(file.getId(), {
          toughjobsStatus: 'ERROR',
          toughjobsLastError: truncate_(error.message, 120),
          toughjobsLastCheckedAt: new Date().toISOString(),
        });
      }
    }

    console.log(
      'Run complete. Examined: ' + examined +
      ', moved: ' + moved +
      ', missing GPS: ' + missingGps +
      ', errors: ' + errors
    );
  } finally {
    lock.releaseLock();
  }
}

/**
 * Processes one image and returns MOVED or NO_GPS.
 */
function processImage_(file, jobsitesFolder, jobsiteIndex) {
  const metadata = Drive.Files.get(file.getId(), {
    fields: 'id,name,mimeType,createdTime,imageMediaMetadata(location,time),appProperties',
    supportsAllDrives: true,
  });

  const coordinates = extractCoordinates_(metadata);

  if (!coordinates) {
    recordFileStatus_(file.getId(), {
      toughjobsStatus: 'NO_GPS',
      toughjobsLastCheckedAt: new Date().toISOString(),
    });

    console.log('No GPS metadata found yet: ' + file.getName());
    return 'NO_GPS';
  }

  const nearest = findNearestJobsite_(
    coordinates.latitude,
    coordinates.longitude,
    jobsiteIndex
  );

  let destination;
  let distanceFeet = null;

  if (nearest && nearest.distanceFeet <= CONFIG.DISTANCE_FEET) {
    destination = nearest.jobsite;
    distanceFeet = nearest.distanceFeet;
  } else {
    destination = createJobsiteFolder_(
      jobsitesFolder,
      coordinates.latitude,
      coordinates.longitude
    );
    jobsiteIndex.push(destination);
    distanceFeet = 0;
  }

  recordFileStatus_(file.getId(), {
    toughjobsStatus: 'PROCESSED',
    toughjobsJobsiteFolderId: destination.id,
    toughjobsLatitude: String(coordinates.latitude),
    toughjobsLongitude: String(coordinates.longitude),
    toughjobsMatchedDistanceFeet: String(Math.round(distanceFeet)),
    toughjobsProcessedAt: new Date().toISOString(),
  });

  file.moveTo(destination.folder);

  console.log(
    'Moved ' + file.getName() + ' to ' +
    destination.name.replace(/\n/g, ' | ')
  );

  return 'MOVED';
}

/**
 * Returns GPS coordinates from Google Drive image metadata.
 * Google Drive exposes EXIF location data through imageMediaMetadata.location
 * when that information exists and Drive has finished processing the upload.
 */
function extractCoordinates_(metadata) {
  const imageMetadata = metadata.imageMediaMetadata;
  const location = imageMetadata && imageMetadata.location;

  if (!location) return null;

  const latitude = Number(location.latitude);
  const longitude = Number(location.longitude);

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;
  if (latitude < -90 || latitude > 90) return null;
  if (longitude < -180 || longitude > 180) return null;
  if (latitude === 0 && longitude === 0) return null;

  return { latitude, longitude };
}

/**
 * Builds an in-memory index of address folders that were created by this script.
 */
function loadJobsiteIndex_(jobsitesFolder) {
  const index = [];
  const folders = jobsitesFolder.getFolders();

  while (folders.hasNext()) {
    const folder = folders.next();

    try {
      const metadata = Drive.Files.get(folder.getId(), {
        fields: 'id,name,appProperties',
        supportsAllDrives: true,
      });

      const properties = metadata.appProperties || {};
      if (properties.toughjobsJobsite !== 'true') continue;

      const latitude = Number(properties.toughjobsLatitude);
      const longitude = Number(properties.toughjobsLongitude);

      if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) continue;

      index.push({
        id: folder.getId(),
        name: folder.getName(),
        folder,
        latitude,
        longitude,
      });
    } catch (error) {
      console.error('Could not index folder ' + folder.getName() + ': ' + error.message);
    }
  }

  return index;
}

/**
 * Finds the closest indexed jobsite to the supplied coordinates.
 */
function findNearestJobsite_(latitude, longitude, jobsiteIndex) {
  let nearest = null;

  jobsiteIndex.forEach(function(jobsite) {
    const distanceFeet = haversineFeet_(
      latitude,
      longitude,
      jobsite.latitude,
      jobsite.longitude
    );

    if (!nearest || distanceFeet < nearest.distanceFeet) {
      nearest = { jobsite, distanceFeet };
    }
  });

  return nearest;
}

/**
 * Reverse-geocodes a new location, creates the jobsite folder, and stores its
 * reference coordinates as private Drive app properties.
 */
function createJobsiteFolder_(jobsitesFolder, latitude, longitude) {
  const address = reverseGeocodeAddress_(latitude, longitude);
  const folderName = sanitizeFolderName_(
    address.streetLine + '\n' + address.localityLine
  );

  const folder = jobsitesFolder.createFolder(folderName);

  updateAppProperties_(folder.getId(), {
    toughjobsJobsite: 'true',
    toughjobsLatitude: String(latitude),
    toughjobsLongitude: String(longitude),
    toughjobsStreetLine: address.streetLine,
    toughjobsLocalityLine: address.localityLine,
    toughjobsFormattedAddress: address.formattedAddress,
    toughjobsCreatedAt: new Date().toISOString(),
  });

  return {
    id: folder.getId(),
    name: folderName,
    folder,
    latitude,
    longitude,
  };
}

/**
 * Produces:
 *   First line: street address
 *   Second line: township / city, state ZIP
 */
function reverseGeocodeAddress_(latitude, longitude) {
  const response = Maps.newGeocoder().reverseGeocode(latitude, longitude);

  if (!response || response.status !== 'OK' || !response.results || !response.results.length) {
    return fallbackAddress_(latitude, longitude);
  }

  const result = response.results[0];
  const components = result.address_components || [];

  const streetNumber = componentValue_(components, ['street_number'], false);
  const route = componentValue_(components, ['route'], false);
  const premise = componentValue_(components, ['premise'], false);
  const subpremise = componentValue_(components, ['subpremise'], false);

  let streetLine = [streetNumber, route].filter(Boolean).join(' ').trim();

  if (!streetLine) {
    streetLine = [premise, subpremise].filter(Boolean).join(' ').trim();
  }

  if (!streetLine && result.formatted_address) {
    streetLine = result.formatted_address.split(',')[0].trim();
  }

  const township = componentValue_(
    components,
    ['administrative_area_level_3'],
    false
  );

  const city = componentValue_(
    components,
    ['locality', 'postal_town', 'sublocality', 'sublocality_level_1'],
    false
  );

  let place = '';
  if (township && city && normalize_(township) !== normalize_(city)) {
    place = township + ' / ' + city;
  } else {
    place = township || city;
  }

  const state = componentValue_(
    components,
    ['administrative_area_level_1'],
    true
  );

  const zip = componentValue_(components, ['postal_code'], false);

  const stateZip = [state, zip].filter(Boolean).join(' ').trim();
  let localityLine = [place, stateZip].filter(Boolean).join(', ').trim();

  if (!streetLine) {
    streetLine = 'GPS ' + latitude.toFixed(6) + ', ' + longitude.toFixed(6);
  }

  if (!localityLine) {
    localityLine = 'Location requires review';
  }

  return {
    streetLine,
    localityLine,
    formattedAddress: result.formatted_address || (streetLine + ', ' + localityLine),
  };
}

function componentValue_(components, requestedTypes, useShortName) {
  for (let i = 0; i < requestedTypes.length; i += 1) {
    const requestedType = requestedTypes[i];

    for (let j = 0; j < components.length; j += 1) {
      const component = components[j];
      const types = component.types || [];

      if (types.indexOf(requestedType) !== -1) {
        return useShortName
          ? (component.short_name || component.long_name || '')
          : (component.long_name || component.short_name || '');
      }
    }
  }

  return '';
}

function fallbackAddress_(latitude, longitude) {
  return {
    streetLine: 'GPS ' + latitude.toFixed(6) + ', ' + longitude.toFixed(6),
    localityLine: 'Location requires review',
    formattedAddress: '',
  };
}

/**
 * Calculates great-circle distance in feet.
 */
function haversineFeet_(lat1, lon1, lat2, lon2) {
  const earthRadiusFeet = 20902260.958;
  const toRadians = Math.PI / 180;

  const phi1 = lat1 * toRadians;
  const phi2 = lat2 * toRadians;
  const deltaPhi = (lat2 - lat1) * toRadians;
  const deltaLambda = (lon2 - lon1) * toRadians;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) *
    Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusFeet * c;
}

function initializeFolders_() {
  const parent = DriveApp.getFolderById(CONFIG.PARENT_FOLDER_ID);
  const intake = getOrCreateChildFolder_(parent, CONFIG.INTAKE_FOLDER_NAME);
  const jobsites = getOrCreateChildFolder_(parent, CONFIG.JOBSITES_FOLDER_NAME);

  PropertiesService.getScriptProperties().setProperties({
    TOUGHJOBS_INTAKE_FOLDER_ID: intake.getId(),
    TOUGHJOBS_JOBSITES_FOLDER_ID: jobsites.getId(),
  });

  return { parent, intake, jobsites };
}

function getOrCreateChildFolder_(parent, name) {
  const matches = parent.getFoldersByName(name);
  return matches.hasNext() ? matches.next() : parent.createFolder(name);
}

function recordFileStatus_(fileId, newProperties) {
  updateAppProperties_(fileId, newProperties);
}

function updateAppProperties_(fileId, newProperties) {
  const current = Drive.Files.get(fileId, {
    fields: 'appProperties',
    supportsAllDrives: true,
  });

  const merged = Object.assign({}, current.appProperties || {}, newProperties);

  Drive.Files.update(
    { appProperties: merged },
    fileId,
    null,
    { fields: 'id,appProperties', supportsAllDrives: true }
  );
}

function removeTriggersForFunction_(functionName) {
  ScriptApp.getProjectTriggers().forEach(function(trigger) {
    if (trigger.getHandlerFunction() === functionName) {
      ScriptApp.deleteTrigger(trigger);
    }
  });
}

function validateConfiguration_() {
  if (
    !CONFIG.PARENT_FOLDER_ID ||
    CONFIG.PARENT_FOLDER_ID === 'PASTE_PARENT_FOLDER_ID_HERE'
  ) {
    throw new Error('Paste the parent Google Drive folder ID into CONFIG.PARENT_FOLDER_ID.');
  }
}

function sanitizeFolderName_(name) {
  const cleanedLines = String(name)
    .split('\n')
    .map(function(line) {
      return line
        .replace(/[\u0000-\u001F\u007F]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    })
    .filter(Boolean);

  const cleaned = cleanedLines.join('\n');
  return truncate_(cleaned || 'Location requires review', 240);
}

function normalize_(value) {
  return String(value || '').trim().toLowerCase();
}

function truncate_(value, maxLength) {
  const text = String(value || '');
  return text.length <= maxLength ? text : text.substring(0, maxLength);
}
