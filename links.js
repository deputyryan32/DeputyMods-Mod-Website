// links.js
const modLinks = [
  {
    name: "Police AI SHVDN Edition",
    url: "https://www.lcpdfr.com/downloads/gta5mods/scripts/49024-policeai-shvdn-edition-wip/",
    gpmUrl: "https://gtapolicemods.com/files/file/60-policeai-shvdn-edition-wip/",
    image: "assets/PoliceAISHV.png",
    tags: ["AI", "Plugins"]
  },
  {
    name: "PistolRedirect",
    url: "https://www.lcpdfr.com/downloads/gta5mods/scripts/49024-policeai-shvdn-edition-wip/",
    gpmUrl: "https://gtapolicemods.com/files/file/302-pistolredirect/",
    image: "assets/PistolRedirect.png",
    tags: ["SHVDN", "Scripts"]
  },
  {
    name: "Outdated Deputy Ryan's Pursuit Callouts",
    url: "https://www.lcpdfr.com/downloads/gta5mods/scripts/48930-outdated-deputyryanspursuitcallouts/",
    image: "assets/pursuitcallouts.png",
    tags: ["Callouts", "Outdated"]
  },
  {
    name: "Deputy Ryan's Ultimate Backup",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48899-deputyryansultimatebackup/",
    image: "assets/ultimatebackup.png",
    tags: ["Ultimate Backup", "XML"]
  },
  {
    name: "Deputy Ryan's FireFX",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48513-deputyryansfirefx/",
    gpmUrl: "https://gtapolicemods.com/files/file/50-deputyryansfirefx/",
    image: "assets/firefx.png",
    tags: ["Effects"]
  },
  {
    name: "Deputy Ryan's ExplosionFX",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48519-deputyryansexplosionfx/",
    gpmUrl: "https://gtapolicemods.com/files/file/49-deputyryansexplosionfx/",
    image: "assets/explosionfx.png",
    tags: ["Effects"]
  },
  {
    name: "Deputy Ryan's Dispatch RDE",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48813-deputyryansdispatchrde/",
    gpmUrl: "https://gtapolicemods.com/files/file/83-deputyryansdispatchrde/",
    image: "assets/dispatchrde.png",
    tags: ["Dispatch", "RDE"]
  },
  {
    name: "Deputy Ryan's Enhanced Density",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48810-deputyryansenhanceddensity/",
    gpmUrl: "https://gtapolicemods.com/files/file/85-deputyryansenhanceddensity/",
    image: "assets/enhanceddensity.png",
    tags: ["Density", "Game Config"]
  },
  {
    name: "Deputy Ryan's STP Questions Recoded",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48716-deputyryansstpquestionsrecoded/",
    gpmUrl: "https://gtapolicemods.com/files/file/93-deputyryansstpquestionsrecoded/",
    image: "assets/stpquestionsrecoded.png",
    tags: ["Questions", "STP"]
  },
  {
    name: "Deputy Ryan's ELS",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48715-deputyryansels/",
    gpmUrl: "https://gtapolicemods.com/files/file/84-deputyryansels/",
    image: "assets/els.png",
    tags: ["ELS"]
  },
  {
    name: "Deputy Ryan's Pat Down Items",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48589-deputyryanspatdownitems/",
    gpmUrl: "https://gtapolicemods.com/files/file/91-deputyryanspatdownitems/",
    image: "assets/patdownitems.png",
    tags: ["STP"]
  },
  {
    name: "Deputy Ryan's Grammar California",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48689-deputyryansgrammarcalifornia/",
    gpmUrl: "https://gtapolicemods.com/files/file/89-deputyryansgrammercalifornia/",
    image: "assets/grammarcalifornia.png",
    tags: ["GrammarPolice", "California"]
  },
  {
    name: "Deputy Ryan's Grammar Generic",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48679-deputyryansgrammargeneric/",
    gpmUrl: "https://gtapolicemods.com/files/file/90-deputyryansgrammergeneric/",
    image: "assets/grammargeneric.png",
    tags: ["GrammarPolice", "Generic"]
  },
  {
    name: "Retired Deputy Ryan's STP Questioning Reimagined",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48684-retired-deputyryansstpquestioningreimagined/",
    gpmUrl: "https://gtapolicemods.com/files/file/92-deputyryansstpquestioningreimagined/",
    image: "assets/stpquestioningreimagined.png",
    tags: ["STP"]
  },
  {
    name: "Abandoned Deputy Ryan's Fire Chaos FX",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48518-abandoned-deputyryansfirecahosfx/",
    gpmUrl: "https://gtapolicemods.com/files/file/87-deputyryansfirecahos/",
    image: "assets/firechaosfx.png",
    tags: ["Effects", "Chaos", "Abandoned"]
  },
  {
    name: "Deputy Ryan's CoCharges",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48619-deputyryanscocharges/",
    gpmUrl: "https://gtapolicemods.com/files/file/81-deputyryanscocharges/",
    image: "assets/cocharges.png",
    tags: ["Charges", "CompuLite"]
  },
  {
    name: "Deputy Ryan's Enhanced Vehicle Items",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48546-deputyryansenhancedvehicleitems/",
    gpmUrl: "https://gtapolicemods.com/files/file/86-deputyryansenhancedvehicleitems/",
    image: "assets/enhancedvehicleitems.png",
    tags: ["STP"]
  },
  {
    name: "Deputy Ryan's CT Charges/Citations",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48614-deputyryansctchargescitations/",
    gpmUrl: "https://gtapolicemods.com/files/file/82-deputyryansconnecticutchargesandcitations/",
    image: "assets/ctcharges.png",
    tags: ["Charges", "CompuLite"]
  },
  {
    name: "Abandoned Deputy Ryan's Liquid FX",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48514-abandoned-deputyryansliquidfx/",
    image: "assets/liquidfx.png",
    tags: ["Liquid", "Effects", "Abandoned"]
  },
  {
    name: "Deputy Ryan's Visual FX",
    url: "https://www.lcpdfr.com/downloads/gta5mods/datafile/48528-deputyryansvisualfx/",
    image: "assets/visualfx.png",
    tags: ["Visual", "Effects"]
  }
];
