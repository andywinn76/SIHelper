export const aspects = {
  // Inside your spirit object:
  "A Spread of Rampant Green": {},
  "Bringer of Dreams and Nightmares": {},
  "Heart of the Wildfire": {},
  "Keeper of the Forbidden Wilds": {},
  "Lightning's Swift Strike": {},
  "Lure of the Deep Wilderness": {},
  "Ocean's Hungry Grasp": {},
  "River Surges in Sunlight": {},
  "Serpent Slumbering Beneath the Island": {
    aspects: [
      {
        name: "Locus",
        replaces: {
          specialRules: "", // Optional: for clarity
          innatePowers: ["Serpent Wakes in Power"], // If it replaces innate powers
        },
        newSpecialRules: [
          
          {
            title: "Locus of the Serpent's Regard",
            text: "Spirits with absorbed PRESENCE can use YOUR PRESENCE at your INCARNA for targeting. YOUR INCARNA doesn't count towards your Deep Slumber limit. After uncovering the EARTH space of your PRESENCE track, Empower YOUR INCARNA.",
          },
        ],
        newInnatePowers: [
      {
        name: "STRENGTH OF THE WAKING ISLAND",
        speed: "FAST",
        range: "RANGE 0",
        target: "YOURSELF",
        thresholds: [
          {
            elements: { water: 2, earth: 1 },
            description: "After a spirit uses a land-targeting Power Card, they may repeat it at incarna by paying it's cost. (Max 1 Power Card per turn for each of their absorbed PRESENCE.) You may help pay some or all of the cost . (These Repeats ignore Range and target requirements.)",
          },
          {
            elements: { moon: 2, earth: 2, plant: 1 },
            description: "Add 1 VITALITY at incarna. If a Spirit has 2 or more absorbed PRESENCE, you may instead add 1 VITALITY in one of their lands without BLIGHT.",
          },
          {
            elements: { moon: 3, plant: 4 },
            description: "Repeat this Power again.",
          },
        ],
      },],
        complexityAdjustment: "HIGHER", // could be "lower", "higher", or "same"
      },
    ],
  },
  "Shadows Flicker Like Flame": {},
  "Sharp Fangs Behind the Leaves": {},
  "Shifting Memory of Ages": {},
  "Shroud of Silent Mist": {
    aspects: [
      {
        name: "Stranded",
        replaces: {
          specialRules: "Mists Shift and Flow", // Optional: for clarity
          innatePowers: [], // If it replaces innate powers
        },
        newSpecialRules: [
          {
            title: "MISTS STEADILY DRIFT",
            text: "Up to twice during the FAST phase and up to twice during the SLOW phase, Push 1 of your PRESENCE. (If helpful, use Scenario Markers to track uses.)",
          },
          {
            title: "STRANDED IN THE SHIFTING MIST",
            text: "Once each FAST phase, Isolate one of your lands.",
          },
        ],
        complexityAdjustment: "LOWER", // could be "lower", "higher", or "same"
      },
    ],
  },
  "Thunder Speaker": {},
  "Vital Strength of the Earth": {},
};
