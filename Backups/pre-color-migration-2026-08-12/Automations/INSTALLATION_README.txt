TOUGHJOBS GOOGLE DRIVE JOBSITE IMAGE AUTOMATION
================================================

WHAT IT DOES
------------
1. Creates or finds two folders inside one parent Google Drive folder:
   - BUSINESS IMAGES
   - JOBSITES
2. Scans BUSINESS IMAGES every 5 minutes.
3. Reads each image's GPS coordinates from Google Drive image metadata.
4. Compares the image to existing jobsite folder coordinates.
5. If the image is within 1,000 feet of a jobsite, it is moved into that folder.
6. If not, the GPS coordinates are reverse-geocoded and a new folder is created in JOBSITES.
7. New folder name format:

   123 Main Street
   Township / City, ST ZIP

INSTALLATION
------------
1. In Google Drive, create one parent folder for this automation.
2. Open the parent folder and copy its folder ID from the browser address.
   The ID is the long string after /folders/ in the URL.
3. Open https://script.google.com and create a New Project.
4. Delete the starter code in Code.gs.
5. Open Toughjobs_Google_Drive_Jobsite_Image_Automation.gs in a text editor.
6. Copy all its code and paste it into Code.gs.
7. Near the top of the code, replace:

   PASTE_PARENT_FOLDER_ID_HERE

   with your actual parent folder ID.
8. In the Apps Script editor, select Services in the left sidebar.
9. Click the plus button, select Drive API, and click Add.
10. Save the project.
11. Select setupAutomation from the function list and click Run.
12. Approve the requested Google permissions.
13. Return to the parent Drive folder. BUSINESS IMAGES and JOBSITES should now exist.
14. Upload a GPS-tagged iPhone photo into BUSINESS IMAGES.
15. For an immediate test, run processBusinessImages manually. Otherwise, the automatic scan runs every 5 minutes.

IPHONE REQUIREMENT
------------------
The original photo must contain location metadata. On the iPhone, Camera must have Location Services permission. Do not disable Location in the photo-sharing options before uploading.

IMPORTANT BEHAVIOR
------------------
- Images are moved, not copied.
- Non-image files remain in BUSINESS IMAGES.
- Images without GPS metadata remain in BUSINESS IMAGES and are retried.
- The first image at a new jobsite becomes the reference coordinate for that folder.
- Reverse geocoding can return an approximate or nearest address, so test the system before using it for critical recordkeeping.
- The script is designed primarily for folders in My Drive.
