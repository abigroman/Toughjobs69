// Per-trade trivia banks for the Toughjobs Trade Quiz.
// Each trade has trade-specific questions; the engine tops up to 20 from the
// shared GENERIC bank in quiz-data.js so every trade always has a full quiz.
// Question shape: { q, choices:[...], answer:<index>, fact:"shown after answering" }
window.TRADE_BANKS = {
  "electricians": [
    { q: "What does a standard U.S. residential outlet supply?", choices:["120 volts","240 volts","480 volts","12 volts"], answer:0, fact:"Standard American receptacles run about 120V; large appliances like dryers use 240V." },
    { q: "What color is the ground wire in U.S. residential wiring?", choices:["Black","White","Green or bare copper","Red"], answer:2, fact:"Green or bare copper is always ground. Black is hot, white is neutral." },
    { q: "What device protects against ground faults near water?", choices:["GFCI","AFCI","Fuse box","Surge strip"], answer:0, fact:"GFCIs are required by code near sinks, tubs, and outdoors — they trip in milliseconds." },
    { q: "What does AWG measure?", choices:["Wire gauge","Amp draw","Voltage drop","Watt output"], answer:0, fact:"American Wire Gauge — lower number means thicker wire and more current capacity." },
    { q: "A 15-amp circuit typically uses what wire size?", choices:["14 gauge","10 gauge","6 gauge","18 gauge"], answer:0, fact:"14 AWG for 15A, 12 AWG for 20A. Undersizing wire is a fire risk." },
    { q: "What breaker type protects against arc faults?", choices:["AFCI","GFCI","Double-pole","Main"], answer:0, fact:"AFCIs detect dangerous arcing in bedroom and living-area circuits." },
    { q: "What's the most common cause of a tripping breaker?", choices:["Overloaded circuit","Bad paint","Low water pressure","Dirty filter"], answer:0, fact:"Overloads and short circuits are the top causes — a repeat trip means call a pro." }
  ],
  "plumbing": [
    { q: "What's the standard diameter of a home drain stack?", choices:["3–4 inches","1 inch","6 inches","1/2 inch"], answer:0, fact:"Main drain/vent stacks are usually 3–4 inches to move waste and vent gases." },
    { q: "What does a P-trap do?", choices:["Blocks sewer gas","Boosts pressure","Heats water","Filters lime"], answer:0, fact:"The water sitting in a P-trap seals out sewer gas from the room." },
    { q: "What causes most residential water hammer?", choices:["Fast-closing valves","Cold weather","Old paint","Low voltage"], answer:0, fact:"Quick-closing valves slam water to a stop; arrestors absorb the shock." },
    { q: "What's a safe max hot-water heater temp to prevent scalding?", choices:["120°F","160°F","100°F","200°F"], answer:0, fact:"120°F prevents scalding while still killing most bacteria." },
    { q: "PEX is a type of what?", choices:["Flexible tubing","Copper alloy","Drain cleaner","Cast fitting"], answer:0, fact:"PEX is cross-linked polyethylene — flexible, freeze-resistant, fast to install." },
    { q: "What tool clears a toilet clog best?", choices:["Closet auger","Basin wrench","Pipe cutter","Torch"], answer:0, fact:"A closet auger is shaped to snake through the toilet trap without scratching porcelain." },
    { q: "What's the main sign of a hidden slab leak?", choices:["Warm floor spot","Cold windows","Flickering lights","Loud fan"], answer:0, fact:"A warm spot on the floor plus a spinning meter often means a hot-line slab leak." }
  ],
  "hvac": [
    { q: "What does SEER measure?", choices:["Cooling efficiency","Heat output","Air speed","Filter size"], answer:0, fact:"Seasonal Energy Efficiency Ratio — higher SEER means lower cooling bills." },
    { q: "What refrigerant replaced R-22 in new systems?", choices:["R-410A","R-12","R-134a","CO2"], answer:0, fact:"R-410A became the standard after R-22 was phased out for ozone reasons." },
    { q: "How often should a homeowner change a 1-inch filter?", choices:["1–3 months","Once a year","Every week","Never"], answer:0, fact:"Every 1–3 months keeps airflow up and the blower motor happy." },
    { q: "What component actually cools the air?", choices:["Evaporator coil","Condenser fan","Thermostat","Duct"], answer:0, fact:"Refrigerant absorbs heat at the evaporator coil, cooling the air passing over it." },
    { q: "What does a capacitor do in an AC unit?", choices:["Starts the motor","Cleans air","Adds refrigerant","Sets temp"], answer:0, fact:"Capacitors give motors the jolt to start; a bad one is a top no-cool call." },
    { q: "What's a healthy AC temperature split (return vs supply)?", choices:["14–20°F","2–5°F","40°F","0°F"], answer:0, fact:"A 14–20°F drop across the coil means the system is cooling properly." },
    { q: "What causes a frozen evaporator coil?", choices:["Low airflow or low charge","High voltage","Too much sun","New filter"], answer:0, fact:"Dirty filters, blocked returns, or low refrigerant all freeze the coil." }
  ],
  "roofing": [
    { q: "What's the most common residential roofing material in the U.S.?", choices:["Asphalt shingles","Slate","Copper","Thatch"], answer:0, fact:"Asphalt shingles cover roughly 80% of American homes — cheap and fast." },
    { q: "What roof feature channels water away from a valley or wall?", choices:["Flashing","Ridge cap","Soffit","Fascia"], answer:0, fact:"Metal flashing seals joints and valleys where leaks love to start." },
    { q: "What's the typical lifespan of a 3-tab asphalt shingle?", choices:["15–20 years","50 years","5 years","100 years"], answer:0, fact:"3-tab shingles last 15–20 years; architectural shingles push 25–30." },
    { q: "What causes most storm-damage insurance claims on roofs?", choices:["Hail and wind","Sun fade","Bird nests","Moss"], answer:0, fact:"Hail bruising and wind-lifted shingles drive the bulk of roof claims." },
    { q: "What does roof 'pitch' describe?", choices:["Steepness","Color","Age","Weight"], answer:0, fact:"Pitch is the rise over run — steeper roofs shed water and need more material." },
    { q: "What underlayment resists tearing better than felt?", choices:["Synthetic","Cardboard","Plywood","Tar paper"], answer:0, fact:"Synthetic underlayment is lighter, stronger, and more water-resistant than felt." },
    { q: "What ventilation piece sits at the very top of the roof?", choices:["Ridge vent","Drip edge","Gutter","Valley"], answer:0, fact:"Ridge vents let hot attic air escape, extending shingle life." }
  ],
  "general-contractors": [
    { q: "What document lists the scope and price of a build?", choices:["Contract / bid","Permit","Deed","Invoice only"], answer:0, fact:"A clear written contract protects both the GC and the homeowner." },
    { q: "What's a 'change order'?", choices:["A written scope change","A refund","A permit","A punch list"], answer:0, fact:"Change orders document added work and cost — never do extras on a handshake." },
    { q: "What's a 'punch list'?", choices:["Final fixes before done","Tool list","Crew roster","Tax form"], answer:0, fact:"The punch list is the last round of small fixes before final payment." },
    { q: "Who typically pulls the building permit?", choices:["The contractor","The bank","The buyer's agent","Nobody"], answer:0, fact:"The GC usually pulls permits and owns code compliance." },
    { q: "What's retainage on a big job?", choices:["Held-back payment","A deposit","A bonus","A fine"], answer:0, fact:"Retainage is a percentage held until the job is fully complete." },
    { q: "What insurance protects a GC if a worker is hurt?", choices:["Workers' comp","Auto","Flood","Life"], answer:0, fact:"Workers' comp is required in most states and protects your business from injury claims." }
  ],
  "concrete-paving": [
    { q: "What makes concrete harden?", choices:["Hydration (chemical cure)","Air drying","Freezing","Sun only"], answer:0, fact:"Concrete cures through hydration — a chemical reaction, not just drying out." },
    { q: "How long before you can drive on a new concrete driveway?", choices:["About 7 days","1 hour","1 year","Same day"], answer:0, fact:"Wait ~7 days for vehicles; full strength takes about 28 days." },
    { q: "What controls cracking in a concrete slab?", choices:["Control joints","More water","Paint","Salt"], answer:0, fact:"Control joints give cracks a planned place to form so the slab stays clean." },
    { q: "What's the difference between concrete and asphalt driveways?", choices:["Cure vs. cool","Same thing","Color only","Price only"], answer:0, fact:"Concrete cures hard; asphalt is laid hot and cools flexible — cheaper, faster." },
    { q: "What weakens fresh concrete most?", choices:["Too much water","Sunlight","Gravel","Rebar"], answer:0, fact:"Over-watering the mix drops strength — a common shortcut that fails early." },
    { q: "What reinforces a concrete slab against cracking?", choices:["Rebar or wire mesh","Sand","Foam","Tape"], answer:0, fact:"Steel rebar or mesh holds the slab together under load." }
  ],
  "masonry": [
    { q: "What holds bricks together?", choices:["Mortar","Glue","Nails","Tape"], answer:0, fact:"Mortar is a mix of cement, lime, and sand — the bond between every brick." },
    { q: "What's 'tuckpointing'?", choices:["Repairing mortar joints","Cutting brick","Laying block","Sealing wood"], answer:0, fact:"Tuckpointing grinds out failing mortar and refills the joints." },
    { q: "What tool spreads mortar?", choices:["Trowel","Hammer","Level only","Brush"], answer:0, fact:"A trowel spreads and shapes mortar on every course." },
    { q: "What's efflorescence on brick?", choices:["White salt deposit","Rust","Mold","Paint"], answer:0, fact:"Efflorescence is salt leaching to the surface — usually a moisture sign." },
    { q: "What keeps a brick wall plumb?", choices:["A level and line","Guesswork","Paint","Heat"], answer:0, fact:"Masons use levels and mason's line to keep courses straight and true." },
    { q: "What's a 'course' in masonry?", choices:["A horizontal row","A tool","A permit","A mix"], answer:0, fact:"Each horizontal layer of brick or block is a course." }
  ],
  "framing-drywall": [
    { q: "What's standard stud spacing in most U.S. walls?", choices:["16 inches on center","4 inches","36 inches","24 inches only"], answer:0, fact:"16\" on center is the residential standard; 24\" is used in some builds." },
    { q: "What's the common thickness of wall drywall?", choices:["1/2 inch","2 inches","1/8 inch","3 inches"], answer:0, fact:"1/2\" is standard for walls; 5/8\" fire-rated board is used on ceilings and garages." },
    { q: "What covers drywall seams?", choices:["Joint tape and mud","Paint","Caulk","Nails"], answer:0, fact:"Tape plus joint compound ('mud') hides seams before sanding and paint." },
    { q: "What's a header in framing?", choices:["Beam over an opening","Floor board","Roof vent","Nail type"], answer:0, fact:"Headers carry the load above doors and windows." },
    { q: "What tool finds studs behind finished drywall?", choices:["Stud finder","Level","Chalk line","Router"], answer:0, fact:"A stud finder locates framing so fasteners hit solid wood." },
    { q: "What screw type holds drywall best?", choices:["Coarse-thread drywall screw","Wood nail","Lag bolt","Staple"], answer:0, fact:"Coarse-thread screws grip wood studs and sit just below the paper." }
  ],
  "decks-patios": [
    { q: "What wood is naturally rot-resistant for decks?", choices:["Cedar","Pine","Balsa","MDF"], answer:0, fact:"Cedar and redwood resist rot naturally; pressure-treated pine is the budget pick." },
    { q: "What spacing prevents deck-board warping and drainage issues?", choices:["A small gap between boards","No gap","2-inch gap","Overlap"], answer:0, fact:"A ~1/8\" gap lets water drain and boards expand without buckling." },
    { q: "What supports a deck off the house?", choices:["Ledger board","Fascia","Soffit","Rafter"], answer:0, fact:"The ledger board bolts the deck to the house — flashing it right prevents rot." },
    { q: "What's the safe max spacing for deck railing balusters?", choices:["4 inches","12 inches","8 inches","1 foot"], answer:0, fact:"Code caps baluster gaps at 4\" so a child can't slip through." },
    { q: "What footing keeps deck posts stable in freeze zones?", choices:["Below the frost line","On grass","On pavers","Floating"], answer:0, fact:"Footings must go below the frost line so heaving doesn't lift the deck." },
    { q: "What finish protects a wood deck from UV and water?", choices:["Sealant/stain","Motor oil","Wax only","Bleach"], answer:0, fact:"A quality stain-sealant blocks UV graying and water soak-in." }
  ],
  "locksmiths": [
    { q: "What's 'rekeying' a lock?", choices:["Changing which key works","Replacing the door","Oiling hinges","Painting"], answer:0, fact:"Rekeying changes the pins so old keys stop working — cheaper than new hardware." },
    { q: "What's inside a standard pin-tumbler lock?", choices:["Pins and springs","Gears","Magnets","Water"], answer:0, fact:"Stacked pins must align at the shear line for the plug to turn." },
    { q: "What grade rates the toughest deadbolts?", choices:["ANSI Grade 1","Grade 3","Grade 5","Grade A"], answer:0, fact:"ANSI Grade 1 is commercial-strength — the highest residential security tier." },
    { q: "What's a 'master key' system?", choices:["One key opens many locks","A spare key","A broken key","A car key"], answer:0, fact:"Master systems let one key open many doors while each door keeps its own key." },
    { q: "What tool opens a car lockout without damage?", choices:["Air wedge and reach tool","Crowbar","Hammer","Torch"], answer:0, fact:"Pros use an air wedge and long-reach tool to avoid denting the door." },
    { q: "What's a transponder key?", choices:["Chip key for cars","Old brass key","Padlock","Skeleton key"], answer:0, fact:"Transponder keys carry a chip the car must recognize to start." }
  ],
  "appliance-repair": [
    { q: "What most often kills a dryer's heat?", choices:["Bad heating element","Full lint trap only","Loose door","Cold room"], answer:0, fact:"A burned-out element or thermal fuse is the top no-heat dryer cause." },
    { q: "What part spins a washer's drum?", choices:["Motor and belt","Timer","Hose","Door seal"], answer:0, fact:"The drive motor (often via a belt) turns the drum; belts wear out." },
    { q: "What keeps a fridge cold?", choices:["Compressor and refrigerant","A fan only","Ice packs","The light"], answer:0, fact:"The compressor circulates refrigerant to pull heat out of the box." },
    { q: "What's the top cause of a dishwasher not draining?", choices:["Clogged filter or pump","Low soap","Cold water","Open door"], answer:0, fact:"Food-clogged filters and drain pumps stop most dishwashers from draining." },
    { q: "What safety part shuts a gas appliance if the flame dies?", choices:["Thermocouple","Fuse","Capacitor","Relay"], answer:0, fact:"The thermocouple senses the pilot flame and cuts gas if it goes out." },
    { q: "What should you always do before repairing an appliance?", choices:["Unplug / cut power","Add water","Tilt it","Paint it"], answer:0, fact:"Kill the power first — it's the number-one repair safety rule." }
  ],
  "solar": [
    { q: "What do photovoltaic panels convert sunlight into?", choices:["Electricity","Heat only","Water","Gas"], answer:0, fact:"PV cells turn sunlight directly into DC electricity." },
    { q: "What device turns solar DC into home AC power?", choices:["Inverter","Battery","Meter","Breaker"], answer:0, fact:"The inverter converts panel DC into the AC your home and grid use." },
    { q: "What billing setup credits you for extra solar sent to the grid?", choices:["Net metering","Flat rate","Prepay","Demand fee"], answer:0, fact:"Net metering credits your bill for surplus power you export." },
    { q: "What direction should panels face in the U.S. for best output?", choices:["South","North","Straight down","East only"], answer:0, fact:"South-facing roofs capture the most sun across the day in the U.S." },
    { q: "What most reduces panel output day to day?", choices:["Shade and dirt","Wind","Cold","Moonlight"], answer:0, fact:"Shading and dust cut production — even partial shade hurts a whole string." },
    { q: "What stores solar energy for night use?", choices:["Battery","Inverter","Meter","Panel"], answer:0, fact:"Batteries store daytime surplus so you can run on solar after dark." }
  ],
  "painters": [
    { q: "What prep step makes paint last longest?", choices:["Cleaning and priming","Skipping prep","Thick coats","Painting wet walls"], answer:0, fact:"Clean, dry, primed surfaces are 90% of a paint job that lasts." },
    { q: "What sheen hides wall imperfections best?", choices:["Flat/matte","High gloss","Semi-gloss","Metallic"], answer:0, fact:"Flat sheens scatter light and hide patches; gloss shows every flaw." },
    { q: "What's 'cutting in'?", choices:["Brushing edges before rolling","Sanding","Taping only","Priming"], answer:0, fact:"Cutting in means brushing clean lines at edges before you roll the field." },
    { q: "What paint type cleans up with water?", choices:["Latex/acrylic","Oil-based","Epoxy","Lacquer"], answer:0, fact:"Water-based latex cleans with soap and water; oil needs solvents." },
    { q: "How long between coats for most latex paint?", choices:["2–4 hours","5 minutes","2 days","1 week"], answer:0, fact:"Most latex recoats in 2–4 hours; check the can for temp and humidity." },
    { q: "What causes paint to peel outdoors?", choices:["Moisture and poor prep","Too much primer","New brushes","Cool paint"], answer:0, fact:"Trapped moisture and skipped prep are the top peeling causes." }
  ],
  "carpet-cleaning": [
    { q: "What's the most thorough carpet cleaning method?", choices:["Hot water extraction","Vacuum only","Dry brushing","Spot spray"], answer:0, fact:"Hot water extraction ('steam cleaning') flushes deep dirt most manufacturers recommend." },
    { q: "What should you do to a stain first?", choices:["Blot, don't rub","Scrub hard","Ignore it","Add bleach"], answer:0, fact:"Blotting lifts the stain; rubbing drives it into the fibers." },
    { q: "What's the risk of over-wetting carpet?", choices:["Mold and delamination","Brighter color","Faster drying","Softer feel"], answer:0, fact:"Too much water can grow mold and separate the carpet backing." },
    { q: "What treatment helps carpet resist future stains?", choices:["Protectant (e.g. Scotchgard)","Bleach","Wax","Paint"], answer:0, fact:"A fiber protectant helps spills bead up so you can blot before they set." },
    { q: "What tool agitates cleaning solution into fibers?", choices:["Rotary/CRB brush","Mop","Squeegee","Roller"], answer:0, fact:"A counter-rotating brush works solution deep for a better clean." },
    { q: "How long does carpet usually take to dry after extraction?", choices:["6–12 hours","5 minutes","3 days","1 week"], answer:0, fact:"Good airflow gets most carpets dry in 6–12 hours." }
  ],
  "pressure-washing": [
    { q: "What does PSI measure on a pressure washer?", choices:["Water pressure","Flow rate","Temperature","Soap amount"], answer:0, fact:"PSI is pressure; GPM is flow. Cleaning power is a mix of both." },
    { q: "What surface needs LOW pressure or soft washing?", choices:["Roof shingles","Concrete","Brick","Metal"], answer:0, fact:"Roofs and siding need soft washing — high PSI tears shingles and forces water inside." },
    { q: "What nozzle color is the widest, gentlest fan?", choices:["White (40°)","Red (0°)","Yellow (15°)","Green"], answer:0, fact:"White is 40°; the red 0° is a laser that can gouge wood and skin." },
    { q: "What's 'soft washing'?", choices:["Low pressure + cleaners","No water","Only hot water","Sandblasting"], answer:0, fact:"Soft washing uses detergents and low pressure to kill mold without damage." },
    { q: "What's the danger of a 0° nozzle?", choices:["It can injure and damage","Nothing","Too weak","Wastes soap"], answer:0, fact:"The zero-degree tip concentrates all force to a point — dangerous on most surfaces." },
    { q: "What removes mildew better than pressure alone?", choices:["Sodium hypochlorite mix","Plain water","Cold air","Wax"], answer:0, fact:"A measured bleach (SH) solution kills mildew at the root, not just the surface." }
  ],
  "janitorial": [
    { q: "What color-coded system prevents cross-contamination?", choices:["Colored microfiber cloths","One rag","Paper towels","Newspaper"], answer:0, fact:"Color-coding cloths (e.g. red for restrooms) stops spreading germs between areas." },
    { q: "What's 'dwell time' for a disinfectant?", choices:["How long it must stay wet","Dry time","Shelf life","Rinse time"], answer:0, fact:"Disinfectants only work if they stay wet on the surface for the labeled dwell time." },
    { q: "What order keeps cleaning efficient?", choices:["Top to bottom","Bottom to top","Random","Middle out"], answer:0, fact:"Clean top-down so falling dust lands on surfaces you haven't done yet." },
    { q: "What's an SDS in commercial cleaning?", choices:["Safety Data Sheet","Sales doc","Schedule","Survey"], answer:0, fact:"Safety Data Sheets list chemical hazards and first aid — required on site." },
    { q: "What floor pad color is most aggressive for stripping?", choices:["Black","White","Red","Tan"], answer:0, fact:"Darker pads are more aggressive; white is for polishing." },
    { q: "What's the biggest complaint in commercial restrooms?", choices:["Odor and stock-outs","Wall color","Music","Lighting"], answer:0, fact:"Odor control and never running out of supplies drive tenant satisfaction." }
  ],
  "restoration": [
    { q: "What's the enemy after water damage?", choices:["Mold growth","Sunlight","Cold","Dust"], answer:0, fact:"Mold can start within 24–48 hours — fast drying is everything." },
    { q: "What tool measures moisture in walls?", choices:["Moisture meter","Thermometer","Scale","Ruler"], answer:0, fact:"Moisture meters find hidden wet spots so nothing gets sealed up damp." },
    { q: "What are the IICRC water categories about?", choices:["Contamination level","Water color","Temperature","Volume"], answer:0, fact:"Category 1 is clean, 2 is gray, 3 is black (sewage) — each needs different handling." },
    { q: "What machine pulls moisture from the air?", choices:["Dehumidifier","Fan only","Heater","Vacuum"], answer:0, fact:"Dehumidifiers plus air movers are the core of structural drying." },
    { q: "What PPE is critical for mold or sewage jobs?", choices:["Respirator and gloves","Sunglasses","Hard hat only","None"], answer:0, fact:"Respirators, gloves, and suits protect crews from spores and pathogens." },
    { q: "Why act within 24–48 hours on water loss?", choices:["To stop mold","For photos","For billing","No reason"], answer:0, fact:"The 24–48 hour window is the line before mold and permanent damage set in." }
  ],
  "junk-removal": [
    { q: "What's the smartest first step with a full load?", choices:["Sort for donation/recycle","Dump it all","Burn it","Bury it"], answer:0, fact:"Sorting for donation and recycling cuts dump fees and helps the community." },
    { q: "What item usually needs special disposal?", choices:["Old TVs/electronics","Cardboard","Cloth","Paper"], answer:0, fact:"E-waste and appliances with refrigerant often need certified disposal." },
    { q: "What's a common junk-removal pricing model?", choices:["By truck volume","By phone call","By color","By weather"], answer:0, fact:"Most haulers price by how much of the truck your load fills." },
    { q: "What appliance needs refrigerant reclaimed before scrapping?", choices:["Refrigerator","Microwave","Toaster","Blender"], answer:0, fact:"Fridges and AC units need refrigerant recovered by law before disposal." },
    { q: "What lifting rule protects your back on heavy items?", choices:["Lift with your legs","Bend your back","Jerk it up","Twist"], answer:0, fact:"Legs, not back — and get a second set of hands on the heavy stuff." },
    { q: "What paperwork helps on estate/hoarder cleanouts?", choices:["Signed scope + photos","Nothing","A map","A receipt only"], answer:0, fact:"Documenting scope and before photos protects you on big cleanouts." }
  ],
  "handyman": [
    { q: "What's the most-used measuring rule?", choices:["Measure twice, cut once","Guess once","Cut then measure","Eyeball it"], answer:0, fact:"Measure twice, cut once — the oldest rule in the trades for a reason." },
    { q: "What anchor holds a shelf in hollow drywall?", choices:["Toggle or wall anchor","Wood screw alone","Nail","Tape"], answer:0, fact:"Toggle bolts and expanding anchors hold loads where there's no stud." },
    { q: "What tool checks if a surface is straight?", choices:["Level","Hammer","Pliers","Tape"], answer:0, fact:"A level (bubble or laser) keeps shelves, frames, and doors true." },
    { q: "What stops a squeaky door hinge?", choices:["Lubricant","Paint","Water","Glue"], answer:0, fact:"A shot of lubricant on the pin quiets most squeaky hinges." },
    { q: "What's the safe way to find live wires before drilling?", choices:["Voltage tester","Lick a finger","Guess","Listen"], answer:0, fact:"A non-contact voltage tester warns you before you hit a hot wire." },
    { q: "What caulk type is right for a bathtub?", choices:["Silicone (waterproof)","Paper","Wood glue","Duct tape"], answer:0, fact:"Mildew-resistant silicone seals wet areas; latex caulk is for dry trim." }
  ],
  "landscaping": [
    { q: "What's the ideal mowing rule for healthy grass?", choices:["Cut no more than 1/3","Scalp it low","Cut half","Never mow"], answer:0, fact:"Removing over 1/3 of the blade stresses grass and invites weeds." },
    { q: "When is the best time to water a lawn?", choices:["Early morning","Noon","Midnight","During rain"], answer:0, fact:"Early morning watering cuts evaporation and disease vs. midday or night." },
    { q: "What does aeration do for a lawn?", choices:["Relieves compaction","Adds color","Kills grass","Cuts it"], answer:0, fact:"Core aeration opens compacted soil so water, air, and roots move freely." },
    { q: "What's the ratio meaning of N-P-K on fertilizer?", choices:["Nitrogen-Phosphorus-Potassium","3 brands","Weed killers","Water levels"], answer:0, fact:"N-P-K tells you the nutrient mix — N greens up, P roots, K toughens." },
    { q: "What mulch depth suppresses weeds without smothering roots?", choices:["2–3 inches","6 inches","1/4 inch","10 inches"], answer:0, fact:"2–3\" of mulch blocks weeds and holds moisture without choking plants." },
    { q: "What's 'hardscape'?", choices:["Patios, walls, stone","Grass","Flowers","Trees"], answer:0, fact:"Hardscape is the non-living structure — pavers, walls, walkways." }
  ],
  "tree-service": [
    { q: "What's the safest cut to remove a heavy limb?", choices:["Three-cut method","One quick chop","Pull it off","Burn it"], answer:0, fact:"The three-cut method prevents bark tearing and kickback on big limbs." },
    { q: "What PPE is essential for chainsaw work?", choices:["Chaps, helmet, eye/ear","Just gloves","Sandals","A hat"], answer:0, fact:"Cut-resistant chaps, a helmet with face and ear protection are non-negotiable." },
    { q: "What's 'topping' a tree and why avoid it?", choices:["Cutting the crown — it harms the tree","Feeding it","Watering","Staking"], answer:0, fact:"Topping stresses trees and invites decay — proper pruning is the pro move." },
    { q: "When is the best time to prune most trees?", choices:["Dormant season","Peak summer","During bloom","Never"], answer:0, fact:"Dormant-season pruning cuts disease risk and stress for most species." },
    { q: "What tells you a tree is a fall hazard?", choices:["Lean, cracks, dead limbs","Green leaves","New buds","Bird nests"], answer:0, fact:"Sudden lean, trunk cracks, and dead wood signal a tree that may fail." },
    { q: "What machine grinds a stump below grade?", choices:["Stump grinder","Chainsaw","Mower","Auger"], answer:0, fact:"A stump grinder chews the stump below ground so you can plant or sod over it." }
  ],
  "pest-control": [
    { q: "What's IPM in pest control?", choices:["Integrated Pest Management","Instant Pest Murder","Indoor Pest Meter","None"], answer:0, fact:"IPM combines prevention, monitoring, and targeted treatment — the modern standard." },
    { q: "What attracts most household ants indoors?", choices:["Food and moisture","Cold air","Light","Noise"], answer:0, fact:"Crumbs, sugar, and standing water draw ants inside — sanitation is step one." },
    { q: "What termite sign should never be ignored?", choices:["Mud tubes","Green leaves","Dust","Cobwebs"], answer:0, fact:"Mud tubes on foundations mean active termites — costly if left alone." },
    { q: "What's a 'perimeter treatment'?", choices:["Barrier around the home","Roof spray","Attic fog","Yard mow"], answer:0, fact:"A perimeter barrier stops pests at the foundation before they get in." },
    { q: "Why read the pesticide label first?", choices:["It's the law and the safe dose","For fun","It's optional","To sell more"], answer:0, fact:"'The label is the law' — it sets legal, safe application rates and PPE." },
    { q: "What rodent sign shows an active infestation?", choices:["Fresh droppings and gnaw marks","Old webs","Dust","Paint chips"], answer:0, fact:"Fresh droppings, gnaw marks, and grease trails mean rodents are active now." }
  ],
  "pools": [
    { q: "What's the ideal pool pH range?", choices:["7.2–7.8","Below 5","Above 9","Exactly 10"], answer:0, fact:"7.2–7.8 keeps water comfortable and lets chlorine work." },
    { q: "What sanitizer is most common in residential pools?", choices:["Chlorine","Bleach only","Vinegar","Salt alone"], answer:0, fact:"Chlorine (including from salt systems) is the standard sanitizer." },
    { q: "What does a pool filter remove?", choices:["Debris and particles","Chlorine","Heat","Color"], answer:0, fact:"Sand, cartridge, or DE filters trap the fine particles chemicals can't." },
    { q: "What's 'shocking' a pool?", choices:["Adding a high dose of oxidizer","Cooling it","Draining","Heating"], answer:0, fact:"Shocking blasts organic contaminants and restores clear water." },
    { q: "What causes green pool water?", choices:["Algae","Too much chlorine","Cold water","Salt"], answer:0, fact:"Algae bloom from low sanitizer turns water green fast in summer." },
    { q: "What keeps pool water balanced besides pH?", choices:["Alkalinity and hardness","Temperature","Depth","Color"], answer:0, fact:"Total alkalinity buffers pH; calcium hardness protects surfaces." }
  ],
  "fencing": [
    { q: "How deep should most fence posts be set?", choices:["Below the frost line","2 inches","On the surface","10 feet"], answer:0, fact:"Posts below the frost line resist heaving — usually a third of the post length." },
    { q: "What secures a wood fence post in the ground?", choices:["Concrete","Tape","Sand only","Nails"], answer:0, fact:"Concrete footings anchor posts against wind and sagging." },
    { q: "What fence material needs the least maintenance?", choices:["Vinyl","Untreated wood","Cardboard","Rope"], answer:0, fact:"Vinyl won't rot or need paint — higher upfront, lower upkeep than wood." },
    { q: "What should you check before digging post holes?", choices:["Call 811 for utilities","The weather","Your email","The news"], answer:0, fact:"Call 811 first — hitting a gas or power line is deadly and expensive." },
    { q: "What's the purpose of a gate diagonal brace?", choices:["Stops sagging","Adds color","Holds paint","Nothing"], answer:0, fact:"A diagonal brace keeps the gate square so it won't drag over time." },
    { q: "What spacing is typical between fence posts?", choices:["6–8 feet","1 foot","20 feet","2 inches"], answer:0, fact:"6–8 ft on center balances strength and material cost for most fences." }
  ],
  "auto-detailing": [
    { q: "What's 'claying' a car's paint?", choices:["Removing bonded contaminants","Adding color","Drying it","Waxing"], answer:0, fact:"A clay bar pulls out embedded grit so wax and polish bond smooth." },
    { q: "What's the safe way to wash to avoid swirl marks?", choices:["Two-bucket method","One dirty rag","Dry brush","Hose only"], answer:0, fact:"Two buckets (wash + rinse) keep grit off your mitt and out of the paint." },
    { q: "What does a ceramic coating do?", choices:["Long-lasting paint protection","Changes color","Adds horsepower","Cleans oil"], answer:0, fact:"Ceramic coatings bond a hard, hydrophobic layer that lasts years vs. wax." },
    { q: "What removes light paint scratches?", choices:["Polishing/compounding","Repainting","Waxing only","Washing"], answer:0, fact:"Machine polishing levels the clear coat to erase light swirls and scratches." },
    { q: "What's the risk of washing in direct sun?", choices:["Water spots","Better shine","Faster wax","Nothing"], answer:0, fact:"Sun dries soap and water fast, baking spots into the paint." },
    { q: "What protects interior plastics from cracking?", choices:["UV protectant dressing","Bleach","Water","Wax"], answer:0, fact:"A UV dressing keeps dashboards from drying, fading, and cracking." }
  ],
  "auto-repair": [
    { q: "What does the check-engine light most often signal first?", choices:["Loose gas cap or sensor","Empty tank","Flat tire","Dead battery"], answer:0, fact:"A loose gas cap or O2 sensor is a super common check-engine trigger." },
    { q: "How often is a typical synthetic oil change interval?", choices:["5,000–7,500 miles","500 miles","50,000 miles","Never"], answer:0, fact:"Most synthetics go 5–7.5k miles — always follow the owner's manual." },
    { q: "What tool reads engine trouble codes?", choices:["OBD-II scanner","Multimeter only","Torque wrench","Tire gauge"], answer:0, fact:"An OBD-II scanner pulls the codes that point you to the fault." },
    { q: "What part turns the crankshaft's motion to the wheels?", choices:["Transmission","Radiator","Alternator","Muffler"], answer:0, fact:"The transmission gears engine power down to usable wheel speed." },
    { q: "What warns of worn brake pads?", choices:["Squeal / grinding","Bright lights","Soft seats","Cold AC"], answer:0, fact:"A built-in wear tab squeals; grinding means metal-on-metal — fix now." },
    { q: "What keeps an engine from overheating?", choices:["Coolant and radiator","Motor oil only","Brake fluid","Wiper fluid"], answer:0, fact:"Coolant circulating through the radiator carries engine heat away." }
  ],
  "towing": [
    { q: "What's the danger of towing with the wrong drive wheels down?", choices:["Transmission damage","Better mileage","Nothing","Faster tow"], answer:0, fact:"Dragging drive wheels can wreck a transmission — flatbed or dollies prevent it." },
    { q: "What tow truck type is safest for AWD cars?", choices:["Flatbed","Hook and chain","Sled","None"], answer:0, fact:"A flatbed lifts all four wheels — the safe choice for AWD and low cars." },
    { q: "What's a common roadside call besides tows?", choices:["Jump-starts and lockouts","Oil changes","Paint jobs","Tune-ups"], answer:0, fact:"Jump-starts, lockouts, fuel delivery, and tire changes fill a tow operator's day." },
    { q: "What safety gear is required at a roadside scene?", choices:["Hi-vis vest and cones","Sunglasses","A hat","Nothing"], answer:0, fact:"Hi-vis clothing and warning devices keep operators alive on the shoulder." },
    { q: "What rating must a tow truck respect?", choices:["Towing capacity","Radio volume","Paint grade","Seat count"], answer:0, fact:"Exceeding the truck's rated capacity is unsafe and illegal." },
    { q: "What law protects roadside workers in most states?", choices:["Move Over law","Right of way","Lemon law","Open road"], answer:0, fact:"Move Over laws require drivers to slow and change lanes for roadside crews." }
  ],
  "excavation": [
    { q: "What must you always do before you dig?", choices:["Call 811","Start digging","Check email","Nothing"], answer:0, fact:"Call 811 to locate buried utilities — free, required, and life-saving." },
    { q: "What causes deadly trench collapses?", choices:["Unshored walls","Too much light","Cold air","New boots"], answer:0, fact:"Unprotected trench walls cave in fast — shoring and sloping save lives." },
    { q: "What machine digs most residential foundations?", choices:["Excavator","Forklift","Crane","Bulldozer only"], answer:0, fact:"Hydraulic excavators handle most digging; dozers push and grade." },
    { q: "What's 'grading' a site?", choices:["Shaping the ground level/slope","Paving it","Fencing it","Watering"], answer:0, fact:"Grading sets the slope so water drains away from structures." },
    { q: "What depth generally requires trench protection by OSHA?", choices:["5 feet or deeper","1 inch","50 feet","Any depth is fine"], answer:0, fact:"OSHA requires a protective system in trenches 5 ft and deeper." },
    { q: "What soil test guides safe trench sloping?", choices:["Soil classification","Color test","Smell test","Weight only"], answer:0, fact:"Classifying soil (A/B/C) sets the safe slope and shoring method." }
  ]
};