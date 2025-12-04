dataSetVersion = "2025-12-04";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Academy",
    key: "academy",
    tooltip: "Check this to restrict to certain academies.",
    checked: false,
    sub: [
      { name: "100Production", key: "NPC" }, 
	  { name: "Hatsuboshi Gakuen ", key: "GAKUEN" },		  
    ]
  },
  {
    name: "Remove 100Pro IDOLS",
    key: "100Pro",
    tooltip: "Check this to remove all currently known 100Pro IDOLS.",
	checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Saki Hanami",
    img: "sakihanami.png",
    opts: {
      academy: ["GAKUEN"],
    }
  },
  {
    name: "Temari Tsukimura",
    img: "temaritsukimura.png",
    opts: {
      academy: ["GAKUEN"],
    }
  },
  {
    name: "Kotone Fujita",
    img: "kotonefujita.png",
    opts: {
      academy: ["GAKUEN"],
    }
  },
  {
    name: "Rinami Himesaki",
    img: "rinamihimesaki.png",
    opts: {
      academy: ["GAKUEN"],
    },
  },
  {
    name: "Hiro Shirosawa",
    img: "hiroshinosawa.png",
    opts: {
      academy: ["GAKUEN"],
    }
  },
  {
    name: "Ume Hanami",
    img: "umehanami.png",
    opts: {
      academy: ["GAKUEN"],
    }
  },
  {
    name: "Sumika Shiun",
    img: "sumikashiun.png",
    opts: {
      academy: ["GAKUEN"],
    }
  },
  {
    name: "Lilja Katsuragi",
    img: "liljakatsuragi.png",
    opts: {
      academy: ["GAKUEN"],
    }
  },
  {
    name: "China Kuramoto",
    img: "chinakuramoto.png",
    opts: {
      academy: ["GAKUEN"],
    }
  },
  {
    name: "Mao Arimura",
    img: "maoarimura.png",
    opts: {
      academy: ["GAKUEN"],
    }
  },
  {
    name: "Sena Juo",
    img: "senajuo.png",
    opts: {
      academy: ["GAKUEN"],
    }
  },
  {
    name: "Misuzu Hataya",
    img: "misuzuzhataya.png",
    opts: {
      academy: ["GAKUEN"],
	  }
  },
  {
    name: "Tsubame Amaya",
    img: "tsubameamaya.png",
    opts: {
      academy: ["GAKUEN"],
    }
  },
  {
    name: "Nadeshiko Aoi",
    img: "NadeshikoAoi.png",
    opts: {
      academy: ["NPC"],
	  "100Pro": true
    }
  },
  {
    name: "Gekka Shirakusa",
    img: "GekkaShirakusa.png",
    opts: {
      academy: ["NPC"],
      "100Pro": true
    }
  },
  {
    name: "Shion Shirakusa",
    img: "ShionShirakusa.png",
    opts: {
      academy: ["NPC"],
	  "100Pro" : true
    }
  },
  {
    name: "Rinha Kaya",
    img: "RinhaKaya.png",
    opts: {
      academy: ["NPC"],
	  "100Pro" : true
    }
  }
];