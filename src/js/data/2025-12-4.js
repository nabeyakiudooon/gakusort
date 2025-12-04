// dataSetVersion = "2025-12-04"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2025-12-04";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Playable Status",
    key: "playable",
    tooltip: "Check this to restrict to certain playable statuses.",
    checked: false,
    sub: [
      { name: "100Pro Idols", key: "NPC" }, 
	  { name: "GAKUEN Idols", key: "GAKUEN" },		  
    ]
  },
  {
    name: "Remove 100Pro IDOLS",
    key: "100Pro",
    tooltip: "Check this to remove all currently known 100Pro IDOLS."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Saki Hanami",
    img: "sakihanami.png",
    opts: {
      playable: [ "GAKUEN" ],
    }
  },
  {
    name: "Temari Tsukimura",
    img: "temaritsukimura.png",
    opts: {
      playable: [ "GAKUEN"],
    }
  },
  {
    name: "Kotone Fujita",
    img: "kotonefujita.png",
    opts: {
      playable: ["GAKUEN"],
    }
  },
  {
    name: "Rinami Himesaki",
    img: "rinamihimesaki.png",
    opts: {
      playable: ["GAKUEN"],
    },
  },
  {
    name: "Hiro Shirosawa",
    img: "hiroshinosawa.png",
    opts: {
      playable: [ "GAKUEN" ],
    }
  },
  {
    name: "Ume Hanami",
    img: "umehanami.png",
    opts: {
      playable: ["GAKUEN"],
    }
  },
  {
    name: "Sumika Shiun",
    img: "sumikashiun.png",
    opts: {
      playable: ["GAKUEN"],
    }
  },
  {
    name: "Lilja Katsuragi",
    img: "liljakatsuragi.png",
    opts: {
      playable: ["GAKUEN"],
    }
  },
  {
    name: "China Kuramoto",
    img: "chinakuramoto.png",
    opts: {
      playable: [ "GAKUEN" ],
    }
  },
  {
    name: "Mao Arimura",
    img: "maoarimura.png",
    opts: {
      playable: ["maoarimura"],
    }
  },
  {
    name: "Sena Juo",
    img: "senajuo.png",
    opts: {
      playable: ["GAKUEN"],
    }
  },
  {
    name: "Misuzu Hataya",
    img: "misuzuzhataya.png",
    opts: {
      playable: ["GAKUEN"],
	  }
  },
  {
    name: "Tsubame Amaya",
    img: "tsubameamaya.png",
    opts: {
      playable: ["GAKUEN"],
    }
  },
  {
    name: "Nadeshiko Aoi",
    img: "NadeshikoAoi.png",
    opts: {
      playable: ["NPC"],
	  100Pro: true
    }
  },
  {
    name: "Gekka Shirakusa",
    img: "GekkaShirakusa.png",
    opts: {
      playable: ["NPC"],
      100Pro: true
    }
  },
  {
    name: "Shion Shirakusa",
    img: "ShionShirakusa.png",
    opts: {
      playable: ["NPC"],
	  100Pro : true
    }
  },
  {
    name: "Rinha Kaya",
    img: "RinhaKaya.png",
    opts: {
      playable: ["NPC"],
	  100Pro : true
    }
  },
  {
];