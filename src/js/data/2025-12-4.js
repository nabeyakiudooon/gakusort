// dataSetVersion = "2019-12-4"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2025-12-4";
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
      series: [ "GAKUEN" ],
    }
  },
  {
    name: "Temari Tsukimura",
    img: "temaritsukimura.png",
    opts: {
      series: [ "GAKUEN"],
    }
  },
  {
    name: "Kotone Fujita",
    img: "kotonefujita.png",
    opts: {
      series: ["GAKUEN"],
    }
  },
  {
    name: "Rinami Himesaki",
    img: "rinamihimesaki.png",
    opts: {
      series: ["GAKUEN"],
    },
  },
  {
    name: "Hiro Shirosawa",
    img: "hiroshinosawa.png",
    opts: {
      series: [ "GAKUEN" ],
    }
  },
  {
    name: "Ume Hanami",
    img: "umehanami.png",
    opts: {
      series: ["GAKUEN"],
    }
  },
  {
    name: "Sumika Shiun",
    img: "sumikashiun.png",
    opts: {
      series: ["GAKUEN"],
    }
  },
  {
    name: "Lilja Katsuragi",
    img: "liljakatsuragi.png",
    opts: {
      series: ["GAKUEN"],
    }
  },
  {
    name: "China Kuramoto",
    img: "chinakuramoto.png",
    opts: {
      series: [ "GAKUEN" ],
    }
  },
  {
    name: "Mao Arimura",
    img: "maoarimura.png",
    opts: {
      series: ["maoarimura"],
    }
  },
  {
    name: "Sena Juo",
    img: "senajuo.png",
    opts: {
      series: ["GAKUEN"],
    }
  },
  {
    name: "Misuzu Hataya",
    img: "misuzuzhataya.png",
    opts: {
      series: ["GAKUEN"],
	  }
  },
  {
    name: "Tsubame Amaya",
    img: "tsubameamaya.png",
    opts: {
      series: ["GAKUEN"],
    }
  },
  {
    name: "Nadeshiko Aoi",
    img: "NadeshikoAoi.png",
    opts: {
      series: ["NPC"],
	  100Pro: true
    }
  },
  {
    name: "Gekka Shirakusa",
    img: "GekkaShirakusa.png",
    opts: {
      series: ["NPC"],
      100Pro: true
    }
  },
  {
    name: "Shion Shirakusa",
    img: "ShionShirakusa.png",
    opts: {
      series: ["NPC"],
	  100Pro : true
    }
  },
  {
    name: "Rinha Kaya",
    img: "RinhaKaya.png",
    opts: {
      series: ["NPC"],
	  100Pro : true
    }
  },
  {
];