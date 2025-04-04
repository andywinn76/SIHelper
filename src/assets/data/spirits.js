export const spirits = {
  "A Spread of Rampant Green": {
    innatePowers: [
      {
        name: "CREEPERS TEAR INTO MORTAR",
        speed: "Slow",
        range: "Range 0",
        target: "ANY",
        thresholds: [
          {
            elements: { moon: 1, plant: 2 },
            description: "1 Damage to 1 Town / City.",
          },
          {
            elements: { moon: 2, plant: 3 },
            description: "Repeat this Power.",
          },
          {
            elements: { moon: 3, plant: 4 },
            description: "Repeat this Power again.",
          },
        ],
      },
      {
        name: "ALL-ENVELOPING GREEN",
        speed: "Fast",
        range: "Sacred Range 1",
        target: "ANY",
        thresholds: [
          {
            elements: { water: 1, plant: 3 },
            description: "Defend 2.",
          },
          {
            elements: { water: 2, plant: 4 },
            description: "Instead, Defend 4.",
          },
          {
            elements: { water: 3, earth: 1, plant: 5 },
            description: "Also, remove 1 Blight.",
          },
        ],
      },
    ],
  },

  "Breath of Darkness Down Your Spine": {
    innatePowers: [
      {
        name: "LEAVE A TRAIL OF DEATHLY SILENCE",
        speed: "Fast",
        range: "None",
        target: "YOURSELF",
        thresholds: [
          {
            elements: { moon: 2, animal: 1 },
            description:
              "1 Damage at Breath of Darkness. You may Push Breath of Darkness.",
          },
          {
            elements: { moon: 3, air: 1, animal: 1 },
            description:
              "1 Damage at Breath of Darkness. You may Push Breath of Darkness.",
          },
          {
            elements: { moon: 4, air: 2, animal: 2 },
            description:
              "1 Damage at Breath of Darkness. You may Push Breath of Darkness.",
          },
          {
            elements: { moon: 5, air: 2, animal: 3 },
            description:
              "Move Breath of Darkness to Endless Dark. It Brings 1 Invader (from its land).",
          },
        ],
      },
      {
        name: "LOST IN THE ENDLESS DARK",
        speed: "Slow",
        range: "None",
        target: "Endless Dark",
        thresholds: [
          {
            elements: { moon: 2, air: 1 },
            description:
              "1 Fear per Invader (max. 4). Downgrade up to 1 Invader. (Downgrading Removes Explorer)",
          },
          {
            elements: { moon: 4, air: 3 },
            description:
              "1 Fear per Invader (max. 4). Downgrade any number of invaders.",
          },
          {
            elements: { moon: 3, animal: 2 },
            description: "Add 1 Beasts.",
          },
        ],
      },
    ],
  },

  "Bringer of Dreams and Nightmares": {
    innatePowers: [
      {
        name: "Spirits May Yet Dream",
        speed: "Fast",
        range: "None",
        target: "Any Player",
        thresholds: [
          {
            elements: { moon: 2, air: 2 },
            description:
              "Turn any face down Fear Card face-up. (It's earned/resolved normally, but players can see what's coming)",
          },
          {
            elements: { moon: 3 },
            description:
              "Target Spirit gains an element that they have at least 1 of.",
          },
        ],
      },
      {
        name: "Night Terrors",
        speed: "Fast",
        range: "Range 0",
        target: "Invaders",
        thresholds: [
          {
            elements: { moon: 1, air: 1 },
            description: "1 Fear.",
          },
          {
            elements: { moon: 2, air: 1, animal: 1 },
            description: "+1 Fear.",
          },
          {
            elements: { moon: 3, air: 2, animal: 1 },
            description: "+1 Fear.",
          },
        ],
      },
    ],
  },

  "Dances Up Earthquakes": {
    innatePowers: [
      {
        name: "Land Creaks with Tension",
        speed: "Fast",
        range: "None",
        target: "Yourself",
        thresholds: [
          {
            elements: { earth: 1 },
            description:
              "If you have at least 1 Impending, Add 1 Quake in one of your lands.",
          },
          {
            elements: { moon: 1, earth: 1 },
            description:
              "In one of your lands, Defend 1 per Impending (max. 3).",
          },
          {
            elements: { moon: 1, earth: 2 },
            description:
              "If you have at least 3 Impending, Add 1 Quake in one of your lands.",
          },
          {
            elements: { moon: 2, earth: 3 },
            description:
              "In one of your lands, Defend 1 per Impending (max. 3).",
          },
        ],
      },
      {
        name: "Earth Shudders, Buildings Fall",
        speed: "Slow",
        range: "Range 0",
        target: "Quake",
        thresholds: [
          {
            elements: { fire: 2, earth: 3, cards: 3 },
            description: "2 Damage per Quake, to Town/City only.",
          },
          {
            elements: { fire: 3, earth: 4, cards: 5 },
            description:
              "1 Fear. In any number of lands with Quake: 2 Damage per Quake, to Town/City only. Remove 1 Quake.",
          },
          {
            elements: { fire: 4, earth: 5, cards: 7 },
            description:
              "2 Fear. In each land where you removed Quake: 1 Damage to each Invader.",
          },
        ],
        special: "PowerCard is the # of Power Cards you have in play.",
      },
    ],
  },

  "Devouring Teeth Lurk Underfoot": {
    innatePowers: [
      {
        name: "DEATH APPROACHES FROM BENEATH THE SURFACE",
        speed: "Slow",
        range: "Range 1",
        target: "Invaders",
        thresholds: [
          {
            elements: { fire: 1, animal: 1 },
            description:
              "If you don't have Presence in target land, Gather 1 of your Presence. (This is required.)",
          },
          {
            elements: { fire: 2, earth: 1, animal: 2 },
            description:
              "1 Damage. (+1 for your 'Territorial Aggression' Special Rule)",
          },
          {
            elements: { fire: 3, earth: 1, animal: 3 },
            description: "2 Damage.",
          },
          {
            elements: { fire: 4, earth: 2, animal: 5 },
            description: "2 Fear. 4 Damage.",
          },
        ],
      },
    ],
  },

  "Downpour Drenches the World": {
    innatePowers: [
      {
        name: "Rain and Mud Suppress Conflict",
        speed: "Fast",
        range: "None",
        target: "Yourself",
        thresholds: [
          {
            elements: { air: 1, water: 3 },
            description:
              "Each of your Presence grants Defend 1 and lowers Dahan counterattack damage by 1. (Total, in its land.)",
          },
          {
            elements: { water: 5, earth: 1 },
            description:
              "Each of your Presence grants Defend 1 and lowers Dahan counterattack damage by 1.",
          },
          {
            elements: { air: 3, water: 9, earth: 2 },
            description:
              "2 Fear. In your lands, invaders and Dahan have -1 Health (min 1).",
          },
        ],
      },
      {
        name: "Water Nourishes Life's Growth",
        speed: "Fast",
        range: "Range 0",
        target: "Any",
        thresholds: [
          {
            elements: { water: 3, plant: 2 },
            description:
              "Gain 1 Energy. You may remove 1 Blight by removing one of your Presence (from target land).",
          },
          {
            elements: { water: 5, earth: 1, plant: 2 },
            description: "Gain +1 Energy. Gather up to 1 Dahan.",
          },
          {
            elements: { water: 7, earth: 2, plant: 3 },
            description:
              "When Blight would be added to target land, instead leave it on the card. (Only once per Action.)",
          },
        ],
      },
    ],
  },

  "Ember-Eyed Behemoth": {
    innatePowers: [
      {
        name: "Smash, Stomp, and Flatten",
        speed: "Slow",
        range: "None",
        target: "Ember-Eyed Behemoth",
        thresholds: [
          {
            elements: { fire: 2, earth: 1 },
            description: "2 Damage.",
          },
          {
            elements: { fire: 3, earth: 1, plant: 1 },
            description: "1 Damage. Push 1 Dahan.",
          },
          {
            elements: { fire: 4, earth: 2, plant: 1 },
            description: "1 Fear. 1 Damage.",
          },
          {
            elements: { fire: 5, earth: 2, plant: 2 },
            description: "2 Damage. 2 Damage to Dahan.",
          },
        ],
        special:
          "If Ember-Eyed Behemoth is Empowered, you may Repeat this Power once each turn. (You may take other Actions before Repeating, including The Behemoth Rises.)",
      },
    ],
  },

  "Eyes Watch from the Trees": {
    innatePowers: [
      {
        name: "MISCHIEF AND SABOTAGE",
        speed: "Fast",
        range: "Sacred Range 1",
        target: "Invaders",
        thresholds: [
          {
            elements: { moon: 1, plant: 1 },
            description: "1 Fear and Defend 2.",
          },
          {
            elements: { moon: 2, plant: 3 },
            description: "Instead, 1 Fear and Defend 4.",
          },
          {
            elements: { moon: 2, air: 2, plant: 4 },
            description: "Instead, 3 Fear and Defend 6.",
          },
          {
            elements: { moon: 3, air: 3, plant: 5 },
            description: "Instead, 5 Fear and Defend 12.",
          },
        ],
        specialNote:
          "(This is all one Power, so your Special Rule 'Dahan Trust the Watchers' can Gather only 1 Dahan.)",
      },
    ],
  },

  "Fathomless Mud of the Swamp": {
    innatePowers: [
      {
        name: "Spreading and Dreadful Mire",
        speed: "Slow",
        range: "Sacred Range 1",
        target: "Invaders",
        thresholds: [
          {
            elements: { water: 1 },
            description:
              "Move 1 Presence from the origin Sacred to target land. (This is required.)",
          },
          {
            elements: { moon: 1, water: 2, earth: 1 },
            description: "1 Fear. 1 Damage. Push 1 Dahan.",
          },
          {
            elements: { moon: 2, water: 3, earth: 2 },
            description: "1 Fear. 1 Damage. Push 1 Dahan.",
          },
          {
            elements: { moon: 3, water: 4, earth: 3, plant: 2 },
            description: "2 Damage.",
          },
        ],
        specialNote:
          "(Innate Powers perform all thresholds reached, in order, on the same target land.)",
      },
    ],
  },

  "Finder of Paths Unseen": {
    innatePowers: [
      {
        name: "LAY PATHS THEY CANNOT HELP BUT WALK",
        speed: "Fast",
        range: "Range 0",
        target: "Any",
        thresholds: [
          {
            elements: { moon: 2, air: 2 },
            description:
              "Push up to half (rounded down) of invaders from target land. Do likewise for Dahan, Presence, and Beasts (each separately).",
          },
          {
            elements: { sun: 2, air: 2 },
            description: "Push up to 1 Invader/Dahan/Presence/Beasts.",
          },
          {
            elements: { moon: 2, air: 4, water: 3 },
            description: "Repeat this Power.",
          },
        ],
      },
      {
        name: "CLOSE THE WAYS",
        speed: "Fast",
        range: "Range 1",
        target: "Any",
        thresholds: [
          {
            elements: { air: 1, water: 2 },
            description: "Isolate target land..",
          },
          {
            elements: { air: 2, earth: 2 },
            description: "Isolate target land..",
          },
          {
            elements: { air: 3, plant: 2 },
            description: "Isolate target land..",
          },
        ],
        special: "Target each level of this as a separate Power.",
      },
    ],
  },

  "Fractured Days Split the Sky": {
    innatePowers: [
      {
        name: "SLIP THE FLOW OF TIME",
        speed: "Fast",
        range: "None",
        target: "Any Player",
        thresholds: [
          {
            elements: { moon: 3, air: 1 },
            description: "Target Spirit may Resolve 1 Slow now.",
          },
          {
            elements: { sun: 2, moon: 2 },
            description:
              "Target Spirit may Reclaim 1 Power Card from their discarded or played cards. (If they Reclaim a card from play, they lose its Elements.)",
          },
          {
            elements: { sun: 3, air: 2 },
            description:
              "Target Spirit may play a Power Card by paying its cost.",
          },
        ],
        special:
          "You may use this Power any number of times. Cost to Use: 1 Time per previous use this turn.",
      },
      {
        name: "VISIONS OF A SHIFTING FUTURE",
        speed: "Slow",
        range: "None",
        target: "YOURSELF",
        thresholds: [
          {
            elements: { sun: 1, moon: 2, air: 2 },
            description:
              "Look at the top card of either the Invader Deck or (if relevant) the Event Deck. Return it, then shuffle that deck's top 2 cards. (For the Invader Deck, differing Invader Stages may give away which card is next.)",
          },
          {
            elements: { sun: 2, moon: 3, air: 2 },
            description:
              "Instead of returning-and-shuffling, you may put the card you looked at on the bottom of its deck. You may not do this for cards specially placed during Setup.",
          },
        ],
      },
    ],
  },

  "Heart of the Wildfire": {
    innatePowers: [
      {
        name: "Firestorm",
        speed: "Fast",
        range: "Range 0",
        target: "Blight",
        thresholds: [
          {
            elements: { plant: 1 },
            description: "1 Damage per 2 Fire you have.",
          },
          {
            elements: { plant: 3 },
            description: "Instead, 1 Damage per Fire you have.",
          },
          {
            elements: { fire: 4, air: 2 },
            description:
              "Split this Power's Damage however desired between target land and any number of your lands with Blight.",
          },
          {
            elements: { fire: 7 },
            description:
              "In a land with Blight where you have Presence, Push all Dahan. Destroy all invaders and Beasts. Add 1 Blight.",
          },
        ],
      },
      {
        name: "The Burned Land Regrows",
        speed: "Slow",
        range: "Range 0",
        target: "Any",
        thresholds: [
          {
            elements: { fire: 4, plant: 1 },
            description:
              "If target land has 2 Blight or more, remove 1 Blight.",
          },
          {
            elements: { fire: 4, plant: 2 },
            description: "Instead, remove 1 Blight.",
          },
          {
            elements: { fire: 5, plant: 2, earth: 2 },
            description: "Remove another Blight.",
          },
        ],
      },
    ],
  },

  "Hearth-Vigil": {
    innatePowers: [
      {
        name: "Warn of Impending Conflict",
        speed: "Fast",
        range: "None",
        target: "Yourself",
        thresholds: [
          {
            elements: { sun: 2, earth: 1 },
            description:
              "In one of your lands, 1 Dahan deals Damage before Invaders during Ravages. (Choose a land when Invaders Ravage there.)",
          },
          {
            elements: { sun: 3, earth: 1 },
            description:
              "In that land, another Dahan deals Damage before Invaders during Ravages.",
          },
          {
            elements: { sun: 4, earth: 2 },
            description:
              "In that land, all Dahan deal Damage before Invaders during Ravages.",
          },
          {
            elements: { sun: 5, earth: 3 },
            description:
              "Instead, all Dahan in all of your lands deal Damage before Invaders during Ravages.",
          },
        ],
      },
      {
        name: "Keep Watch for New Incursions",
        speed: "Fast",
        range: "Sacred Dahan Range 1",
        target: "Any",
        thresholds: [
          {
            elements: { animal: 1 },
            description: "Gather up to 2 Dahan, from your lands only.",
          },
          {
            elements: { sun: 1, air: 2, animal: 3 },
            description:
              "Once this turn after Invaders are added or moved into target land, 1 Damage per Dahan in target land, to those added/moved Invaders only.",
          },
          {
            elements: { sun: 2, air: 3, animal: 4 },
            description: "Repeat this Power.",
          },
        ],
      },
    ],
  },

  "Keeper of the Forbidden Wilds": {
    innatePowers: [
      {
        name: "Punish Those Who Trespass",
        speed: "Slow",
        range: "Range 0",
        target: "Any",
        thresholds: [
          {
            elements: { sun: 2, fire: 1, plant: 2 },
            description: "2 Damage. Destroy 1 Dahan.",
          },
          {
            elements: { sun: 2, fire: 2, plant: 3 },
            description: "+1 Damage per Sun/Plant you have.",
          },
          {
            elements: { plant: 4 },
            description:
              "Split this Power's Damage however desired between target land and another 1 of your lands.",
          },
        ],
      },
      {
        name: "Spreading Wilds",
        speed: "Slow",
        range: "Range 1",
        target: "Land without Blight",
        thresholds: [
          {
            elements: { sun: 2 },
            description: "Push 1 Explorer from target land per 2 Sun you have.",
          },
          {
            elements: { plant: 1 },
            description: "If target land has no Explorer, add 1 Wilds.",
          },
          {
            elements: { plant: 3 },
            description: "This Power has Plus1 Range.",
          },
          {
            elements: { air: 1 },
            description: "This Power has Plus1 Range.",
          },
        ],
      },
    ],
  },

  "Lightning's Swift Strike": {
    innatePowers: [
      {
        name: "Thundering Destruction",
        speed: "Slow",
        range: "Sacred Range 1",
        target: "ANY",
        thresholds: [
          {
            elements: { fire: 3, air: 2 },
            description: "Destroy 1 Town",
          },
          {
            elements: { fire: 4, air: 3 },
            description: "Instead, you may Destroy 1 City",
          },
          {
            elements: { fire: 5, air: 4, water: 1 },
            description: "Also, Destroy 1 City/1 Town",
          },
          {
            elements: { fire: 5, air: 5, water: 2 },
            description: "Also, Destroy 1 City/1 Town",
          },
        ],
      },
    ],
  },

  "Lure of the Deep Wilderness": {
    innatePowers: [
      {
        name: "Forsake Society to Chase After Dreams",
        speed: "Slow",
        range: "Range 1",
        target: "INVADERS",
        thresholds: [
          {
            elements: { moon: 2 },
            description: "Replace 1 Explorer with 1 Explorer.",
          },
          {
            elements: { moon: 2, air: 1 },
            description: "Instead, replace 1 Town with 2 Explorer.",
          },
          {
            elements: { moon: 3, air: 2, animal: 1 },
            description: "Instead, replace 1 City with 3 Explorer.",
          },
          {
            elements: { air: 4 },
            description: "Repeat this Power.",
          },
        ],
        special:
          "After this Power replaces pieces with Explorer: Gather any number of those Explorer into your lands. If target land has any Town/City remaining, 1 Fear.",
      },
      {
        name: "Never Heard From Again",
        speed: "Slow",
        range: "Range 0",
        target: "Inland",
        thresholds: [
          {
            elements: { fire: 1, plant: 3 },
            description: "Add 1 Badlands.",
          },
          {
            elements: { plant: 2 },
            description:
              "Destroy up to 2 Explorer per Badlands/Beasts/Disease/Wilds.",
          },
          {
            elements: { plant: 4, animal: 1 },
            description: "2 Damage.",
          },
          {
            elements: { plant: 6 },
            description: "Repeat this Power.",
          },
        ],
        special:
          "If this Power destroys any Explorer, 1 Fear. If this Power destroys 5 or more Explorer, +1 Fear.",
      },
    ],
  },

  "Many Minds Move as One": {
    innatePowers: [
      {
        name: "The Teeming Host Arrives",
        speed: "Fast",
        range: "Range 2",
        target: "Any",
        thresholds: [
          {
            elements: { air: 2, animal: 1 },
            description: "Gather up to 1 Beasts.",
          },
          {
            elements: { air: 3, water: 1, animal: 2 },
            description: "Instead, Gather up to 1 Beasts per Air you have.",
          },
          {
            elements: { fire: 1, air: 4, animal: 2 },
            description: "Push up to 3 Beasts.",
          },
        ],
      },
      {
        name: "Beset and Confound the Invaders",
        speed: "Fast",
        range: "Range 2",
        target: "INVADERS",
        thresholds: [
          {
            elements: { air: 1, animal: 2 },
            description: "2 Beasts: 2 Fear and Defend 2.",
          },
          {
            elements: { air: 2, animal: 3 },
            description: "3 Beasts: Instead, 3 Fear and Defend 4.",
          },
          {
            elements: { air: 3, animal: 4 },
            description: "4 Beasts: Instead, 4 Fear and Defend 7.",
          },
          {
            elements: { air: 4, earth: 1, animal: 5 },
            description: "5 Beasts: Instead, 6 Fear and Defend 10.",
          },
        ],
        special: "Beasts (below) checks the number of Beasts in target land",
      },
    ],
  },

  "Ocean’s Hungry Grasp": {
    innatePowers: [
      {
        name: "POUND SHIPS TO SPLINTERS",
        speed: "Fast",
        range: "Range 0",
        target: "Coastal",
        thresholds: [
          {
            elements: { moon: 1, air: 1, water: 2 },
            description: "1 Fear.",
          },
          {
            elements: { moon: 2, air: 1, water: 3 },
            description: "+1 Fear.",
          },
          {
            elements: { moon: 3, air: 2, water: 4 },
            description: "+2 Fear",
          },
        ],
      },
      {
        name: "OCEAN BREAKS THE SHORE",
        speed: "Slow",
        range: "Range 0",
        target: "Coastal",
        thresholds: [
          {
            elements: { water: 2, earth: 1 },
            description: "Drown 1 Town.",
          },
          {
            elements: { water: 3, earth: 2 },
            description: "You may instead Drown 1 City.",
          },
          {
            elements: { water: 4, earth: 3 },
            description: "Also, Drown 1 Town / City.",
          },
        ],
      },
    ],
  },

  "Relentless Gaze of the Sun": {
    innatePowers: [
      {
        name: "Scorching Convergence",
        speed: "Slow",
        range: "Sacred Range 1",
        target: "Any",
        thresholds: [
          {
            elements: { sun: 2 },
            description:
              "Move all of your Presence from origin land directly to target land. 1 Damage, to Town/City only.",
          },
          {
            elements: { sun: 3, fire: 1 },
            description:
              "3 Damage to Invaders. 3 Damage to Dahan. Add 1 Blight without cascading.",
          },
          {
            elements: { sun: 4, fire: 2, air: 1 },
            description: "3 Fear if this Power destroyed any Invaders.",
          },
          {
            elements: { sun: 5, fire: 3, air: 2 },
            description:
              "1 Damage per remaining Presence of yours in target land.",
          },
        ],
      },
      {
        name: "Consider a Harmonious Nature",
        speed: "Fast",
        range: "None",
        target: "Yourself",
        thresholds: [
          {
            elements: { sun: 3, moon: 1 },
            description:
              "When your Powers would Add Blight, you may Destroy 1 Presence instead (there or elsewhere).",
          },
          {
            elements: { sun: 3, water: 1 },
            description: "Your Powers don't damage or destroy Dahan.",
          },
          {
            elements: { sun: 3, plant: 1 },
            description:
              "Choose another Spirit. They Add 1 Destroyed Presence to one of your lands.",
          },
          {
            elements: { sun: 3, water: 1, plant: 1 },
            description: "Give up to 3 of your Energy to the chosen Spirit.",
          },
        ],
      },
    ],
  },

  "Rising Heat of Stone and Sand": {
    innatePowers: [
      {
        name: "Scorch with Waves of Heat",
        speed: "Slow",
        range: "Sacred Range 1",
        target: "Any",
        thresholds: [
          {
            elements: { fire: 2, air: 2 },
            description: "2 Damage to Explorer only.",
          },
          {
            elements: { fire: 3, earth: 2 },
            description: "2 Damage.",
          },
          {
            elements: { fire: 4, air: 1, earth: 3 },
            description: "2 Damage.",
          },
          {
            elements: { fire: 5, air: 2, earth: 3 },
            description: "1 Damage to each Invader.",
          },
        ],
        specialNote: "Innate Powers perform all thresholds reached, in order, on the same target land.",
      },
    ],
  },

  "River Surges in Sunlight": {
    innatePowers: [
      {
        name: "Massive Flooding",
        speed: "Slow",
        range: "Sacred Range 1",
        target: "ANY",
        thresholds: [
          {
            elements: { water: 2, sun: 1 },
            description: "Push one Explorer/Town.",
          },
          {
            elements: { water: 3, sun: 2 },
            description: "Instead, 2 Damage, push up to 3 Explorer/Town",
          },
          {
            elements: { water: 4, sun: 3, earth: 1 },
            description: "Instead, 2 Damage to each Explorer",
          },
        ],
      },
    ],
  },

"Serpent Slumbering Beneath the Island": {
    "innatePowers": [
      {
        "name": "Serpent Wakes in Power",
        "speed": "Slow",
        "range": "None",
        "target": "Yourself",
        "thresholds": [
          {
            "elements": { "fire": 2, "water": 1, "plant": 1 },
            "description": "Gain 1 Energy. Other spirits with any Absorbed Presence also gain 1 Energy."
          },
          {
            "elements": { "water": 2, "earth": 3, "plant": 2 },
            "description": "Add 1 Presence to Range 1. Other spirits with 2 or more Absorbed Presence may do likewise."
          },
          {
            "elements": { "fire": 3, "water": 3, "earth": 3, "plant": 3 },
            "description": "Gain a Major Power without Forgetting. Other Spirits with 3 or more Absorbed Presence may do likewise."
          }
        ]
      },
      {
        "name": "Serpent Rouses in Anger",
        "speed": "Slow",
        "range": "Range 0",
        "target": "Any",
        "thresholds": [
          {
            "elements": { "fire": 1, "earth": 1 },
            "description": "For each Fire + Earth you have, 1 Damage to 1 Town / City."
          },
          {
            "elements": { "moon": 2, "earth": 2 },
            "description": "For each 2 Moon + 2 Earth you have, 2 Fear and you may Push 1 Town from target land."
          },
          {
            "elements": { "moon": 5, "fire": 6, "earth": 6 },
            "description": "Pay 7 Energy. In every land in the game: X Damage, where X is the number of Presence you have in and adjacent to that land."
          }
        ]
      }
    ]
  },

  "Shadows Flicker Like Flame": {
    innatePowers: [
      {
        name: "Darkness Swallows the Unwary",
        speed: "Fast",
        range: "Sacred Range 1",
        target: "ANY",
        thresholds: [
          {
            elements: { moon: 2, fire: 1 },
            description: "Gather one Explorer.",
          },
          {
            elements: { moon: 3, fire: 2 },
            description:
              "Destroy up to 2 explorer. 1 Fear per Explorer destroyed.",
          },
          {
            elements: { moon: 4, fire: 3, air: 2 },
            description:
              "3 Damage. 1 Fear per Explorer destroyed by this Damage.",
          },
        ],
      },
    ],
  },

  "Sharp Fangs Behind the Leaves": {
    "innatePowers": [
      {
        "name": "RANGING HUNT",
        "speed": "Fast",
        "range": "Range 1",
        "target": "Land without Blight",
        "thresholds": [
          {
            "elements": { "animal": 2 },
            "description": "You may Gather 1 Beasts."
          },
          {
            "elements": { "plant": 2, "animal": 3 },
            "description": "1 Damage per Beasts."
          },
          {
            "elements": { "animal": 2 },
            "description": "You may Push up to 2 Beasts."
          }
        ]
      },
      {
        "name": "FRENZIED ASSAULT",
        "speed": "Slow",
        "range": "Range 1",
        "target": "Beasts",
        "thresholds": [
          {
            "elements": { "moon": 1, "fire": 1, "animal": 4 },
            "description": "1 Fear and 2 Damage. Remove 1 Beasts."
          },{
            "elements": { "moon": 1, "fire": 2, "animal": 5 },
            "description": "+1 Fear and +1 Damage."
          },
        ]
      }
    ]
  },

"Shifting Memory of Ages": {
    "innatePowers": [
      {
        "name": "Learn the Invaders' Tactics",
        "speed": "Fast",
        "range": "Range 1",
        "target": "INVADERS",
        "thresholds": [
          {
            "elements": { "earth": 2 },
            "description": "Defend 2."
          },
          {
            "elements": { "air": 1, "earth": 2 },
            "description": "Instead, Defend 3."
          },
          {
            "elements": { "moon": 2, "air": 3, "earth": 4 },
            "description": "Instead, Defend 2 per card in the Invader discard pile."
          }
        ]
      },
      {
        "name": "Observe the Ever-Changing World",
        "speed": "Fast",
        "range": "Range 1",
        "target": "ANY",
        "thresholds": [
          {
            "elements": { "moon": 1 },
            "description": "Prepare 1 Element Marker."
          },
          {
            "elements": { "moon": 2, "air": 1 },
            "description": "Instead, after each of the next three Actions that change which pieces are in target land, Prepare 1 Element Marker."
          }
        ],
        specialNote: "(You can stack the markers you intend to take here or on the target land so you don't need to ponder on what to take mid-turn. Any Action can trigger Preparing a marker, not just your own.)"
      }
    ]
  },

  "Shroud of Silent Mist": {
    "innatePowers": [
      {
        "name": "Suffocating Shroud",
        "speed": "Slow",
        "range": "Range 0",
        "target": "ANY",
        "thresholds": [
          {
            "elements": { "moon": 1, "air": 2, "water": 1 },
            "description": "1 Damage."
          },
          {
            "elements": { "moon": 2, "air": 3, "water": 2 },
            "description": "For each adjacent land with your Presence, 1 Damage to a different Invader."
          },
          {
            "elements": { "moon": 4, "air": 4, "water": 3 },
            "description": "1 Damage."
          },
          {
            "elements": { "moon": 5, "air": 6, "water": 4 },
            "description": "1 Damage to each Invader."
          }
        ]
      },
      {
        "name": "Lost in the Swirling Haze",
        "speed": "Slow",
        "range": "Range 0",
        "target": "ANY",
        "thresholds": [
          {
            "elements": { "air": 1, "water": 2 },
            "description": "Push up to 1 Dahan."
          },
          {
            "elements": { "air": 2, "water": 3 },
            "description": "Push up to 2 Explorer/Dahan."
          },
          {
            "elements": { "air": 3, "water": 4 },
            "description": "Push up to 2 Explorer/Dahan."
          }
        ]
      }
    ]
  },

  "Starlight Seeks Its Form": {
    "innatePowers": [
      {
        "name": "Air Moves, Earth Endures",
        "speed": "Fast",
        "range": "Range 1",
        "target": "ANY",
        "thresholds": [
          {
            "elements": { "air": 3 },
            "description": "Push up to 2 Explorer or 1 Town."
          },
          {
            "elements": { "earth": 3 },
            "description": "Defend 5."
          }
        ]
      },
      {
        "name": "Fire Burns, Water Soothes",
        "speed": "Slow",
        "range": "Sacred Range 1",
        "target": "ANY",
        "thresholds": [
          {
            "elements": { "fire": 3 },
            "description": "1 Fear. 2 Damage."
          },
          {
            "elements": { "water": 3 },
            "description": "Remove 1 Blight."
          }
        ]
      },
      {
        "name": "Wood Seeks Growth, Humans Seek Freedom",
        "speed": "Slow",
        "range": "Range 2",
        "target": "ANY",
        "thresholds": [
          {
            "elements": { "plant": 3 },
            "description": "Choose a Spirit with Presence in target land. They gain a Power Card."
          },
          {
            "elements": { "animal": 3 },
            "description": "1 Damage per Dahan OR Push up to 3 Dahan."
          }
        ]
      },
      {
        "name": "Sidereal Guidance",
        "speed": "Slow",
        "range": "Range 1",
        "target": "ANY",
        "thresholds": [
          {
            "elements": { "moon": 2 },
            "description": "Gather up to 1 Explorer/Dahan."
          },
          {
            "elements": { "moon": 3 },
            "description": "Instead, Gather up to 3 Explorer."
          }
        ]
      },
      {
        "name": "Stars Blaze in the Daytime Sky",
        "speed": "Slow",
        "range": "None",
        "target": "YOURSELF",
        "thresholds": [
          {
            "elements": { "sun": 4 },
            "description": "3 Fear. Gain 1 Energy. Reclaim up to 1 Power Card from play or your discard pile."
          }
        ]
      }
    ]
  },

"Stone's Unyielding Defiance": {
    "innatePowers": [
      {
        "name": "Hold the Island Fast with a Bulwark of Will",
        "speed": "Fast",
        "range": "None",
        "target": "YOURSELF",
        "thresholds": [
          {
            "elements": { "earth": 2 },
            "description": "When Blight is added to one of your lands, you may pay 2 Energy per Blight to take it from the box instead of the Blight Card. (Handle any cascade separately.)"
          },
          {
            "elements": { "earth": 4 },
            "description": "The cost is 1 Energy instead of 2."
          },
          {
            "elements": { "earth": 6, "plant": 1 },
            "description": "When an Event or Blight card directly destroys Presence (yours or others'), you may prevent any number of Presence from being destroyed by paying 1 Energy each. (\"Directly\" means \"not by adding Blight\".)"
          }
        ]
      },
      {
        "name": "Let Them Break Themselves Against the Stone",
        "speed": "Fast",
        "range": "Range 0",
        "target": "ANY",
        "thresholds": [
          {
            "elements": { "earth": 3 },
            "description": "After Invaders deal 1 or more Damage to target land, 2 Damage."
          },
          {
            "elements": { "earth": 5 },
            "description": "Also deal half of the Damage Invaders did to the land (rounding down)."
          },
          {
            "elements": { "earth": 7, "sun": 2 },
            "description": "Repeat this Power."
          }
        ],
        special: "(Reminder: Defend reduces the amount of Damage that Invaders deal to a land.)"
      }
    ]
  },

  "Sun-Bright Whirlwind": {
    "innatePowers": [
      {
        "name": "Violent Windstorms",
        "speed": "Slow",
        "range": "Range 1",
        "target": "ANY",
        "thresholds": [
          {
            "elements": { "sun": 1, "air": 2 },
            "description": "Push up to 1 Explorer."
          },
          {
            "elements": { "sun": 2, "air": 3 },
            "description": "1 Fear. Push up to 2 Explorer/Town."
          },
          {
            "elements": { "sun": 2, "air": 4 },
            "description": "For each Invader Pushed by this Power, 1 Damage in the land it was Pushed to."
          },
          {
            "elements": { "sun": 3, "air": 5 },
            "description": "4 Damage (in target land)."
          }
        ],
        specialNote: "(Innate Powers perform all thresholds reached, in order, on the same target land unless specified.)"
      }
    ]
  },

"Towering Roots of the Jungle": {
    "innatePowers": [
      {
        "name": "Shelter Under Towering Branches",
        "speed": "Slow",
        "range": "Sacred Range 0",
        "target": "ANY",
        "thresholds": [
          {
            "elements": { "sun": 1, "plant": 1 },
            "description": "Gather up to 1 Dahan."
          },
          {
            "elements": { "sun": 1, "earth": 1, "plant": 2 },
            "description": "Gather up to 1 Explorer."
          },
          {
            "elements": { "sun": 2, "earth": 1, "plant": 3 },
            "description": "Gather up to 1 Town."
          },
          {
            "elements": { "sun": 3, "earth": 2, "plant": 4 },
            "description": "Gather up to 1 City."
          }
        ]
      },
      {
        "name": "Revoke Sanctuary and Cast Out",
        "speed": "Slow",
        "range": "Sacred Range 0",
        "target": "Towering Roots of the Jungle + INVADERS",
        "thresholds": [
          {
            "elements": { "sun": 1, "moon": 1, "plant": 2 },
            "description": "1 Fear. Remove 1 Explorer/Town."
          },
          {
            "elements": { "sun": 2, "moon": 1, "plant": 3 },
            "description": "1 Fear. Remove 1 Explorer/Town."
          },
          {
            "elements": { "sun": 2, "moon": 2, "plant": 4 },
            "description": "1 Fear. Remove 1 Invader."
          }
        ]
      }
    ]
  },

  Thunderspeaker: {
    innatePowers: [
      {
        name: "Gather the Warriors",
        speed: "Slow",
        range: "Range 1",
        target: "ANY",
        thresholds: [
          {
            elements: { air: 4 },
            description: "This power may be Fast",
          },
          {
            elements: { animal: 1 },
            description:
              "Gather up to 1 Dahan per Air you have. Push up to 1 Dahan per Sun you have.",
          },
        ],
      },
      {
        name: "Lead the Furious Assault",
        speed: "Slow",
        range: "Range 0",
        target: "ANY",
        thresholds: [
          {
            elements: { air: 4 },
            description: "This power may be Fast",
          },
          {
            elements: { sun: 2, fire: 1 },
            description: "Destroy 1 Town for every 2 Dahan in target land.",
          },
          {
            elements: { sun: 4, fire: 3 },
            description: "Destroy 1 City for every 3 Dahan in target land.",
          },
        ],
      },
    ],
  },

"Vengeance as a Burning Plague": {
    "innatePowers": [
      {
        "name": "Epidemics Run Rampant",
        "speed": "Fast",
        "range": "Range 1",
        "target": "Disease",
        "thresholds": [
          {
            "elements": { "fire": 1, "animal": 3 },
            "description": "1 Damage per Disease."
          },
          {
            "elements": { "water": 1, "fire": 2, "animal": 4 },
            "description": "+1 Damage per Disease."
          },
          {
            "elements": { "water": 3, "fire": 3, "animal": 5 },
            "description": "+1 Damage per Disease. 1 Fear per Disease (max 5). Remove 1 Disease."
          }
        ],
        special: "This Power's Damage is dealt (separately) to both Invaders and Dahan"
      },
      {
        "name": "Savage Revenge",
        "speed": "Slow",
        "range": "Range 0",
        "target": "Town/City",
        "thresholds": [
          {
            "elements": { "air": 3 },
            "description": "This Power has Plus1 Range."
          },
          {
            "elements": { "fire": 3, "animal": 1 },
            "description": "1 Damage."
          },
          {
            "elements": { "fire": 4, "animal": 2 },
            "description": "+2 Damage."
          },
          {
            "elements": { "fire": 5, "air": 2, "animal": 2 },
            "description": "+3 Damage."
          }
        ]
      }
    ]
  },

  "Vital Strength of the Earth": {
    innatePowers: [
      {
        name: "Gift of Strength",
        speed: "Fast",
        range: "None",
        target: "ANY Player",
        thresholds: [
          {
            elements: { sun: 1, earth: 2, plant: 2 },
            description:
              "Once this turn, target Spirit may Repeat 1 Power Card with Energy cost of 1 or less.",
          },
          {
            elements: { sun: 2, earth: 3, plant: 2 },
            description: "Instead, the Energy cost limit is 3 or less.",
          },
          {
            elements: { sun: 2, earth: 4, plant: 3 },
            description: "Instead, the Energy cost limit is 6 or less.",
          },
        ],
      },
    ],
  },


"Wandering Voice Keens Delirium": {
    "innatePowers": [
      {
        "name": "Inscrutable Journeying",
        "speed": "Fast",
        "range": "None",
        "target": "YOURSELF",
        "thresholds": [
          {
            "elements": { "air": 1 },
            "description": "You may Push Wandering Voice Keens Delirium."
          },
          {
            "elements": { "air": 3 },
            "description": "You may Push Wandering Voice Keens Delirium."
          },
          {
            "elements": { "air": 5 },
            "description": "You may Push Wandering Voice Keens Delirium."
          },
          {
            "elements": { "moon": 2, "fire": 1, "air": 4, "plant": 1 },
            "description": "Empower Wandering Voice Keens Delirium."
          }
        ],
        special: "(Each time you move Wandering Voice Keens Delirium into a land with Invaders, Spread Tumult and Delusion adds 1 Strife.)"
      },
      {
        "name": "Mind-Shattering Song",
        "speed": "Slow",
        "range": "Sacred Range 1",
        "target": "Strife",
        "thresholds": [
          {
            "elements": { "moon": 1, "air": 2 },
            "description": "1 Fear per Moon you have."
          },
          {
            "elements": { "sun": 1, "air": 2 },
            "description": "1 Damage per Sun you have, to Invaders with Strife only."
          },
          {
            "elements": { "moon": 1, "sun": 1, "air": 4 },
            "description": "For each Sun Moon pair you have, Destroy 1 Invader with Strife."
          }
        ]
      }
    ]
  },

"Wounded Waters Bleeding": {
    "innatePowers": [
      {
        "name": "Swirl and Spill",
        "speed": "Slow",
        "range": "Range 1",
        "target": "ANY",
        "thresholds": [
          {
            "elements": { "water": 2 },
            "description": "Push up to 2 Explorer/Dahan/Blight."
          },
          {
            "elements": { "water": 3, "animal": 1 },
            "description": "1 Fear. Push up to 2 Town/Presence/Beasts."
          },
          {
            "elements": { "water": 5, "plant": 2, "animal": 2 },
            "description": "In one land pushed into, Downgrade all Town and all City."
          }
        ]
      },
      {
        "name": "Sanguinary Taint",
        "speed": "Slow",
        "range": "Range 1",
        "target": "ANY",
        "thresholds": [
          {
            "elements": { "animal": 2 },
            "description": "1 Fear. 1 Damage. Push 1 Dahan."
          },
          {
            "elements": { "water": 1, "animal": 3 },
            "description": "1 Damage. Add 1 Beasts."
          },
          {
            "elements": { "fire": 2, "water": 2, "animal": 5 },
            "description": "1 Fear. 4 Damage. Add 1 Disease."
          }
        ]
      }
    ]
  }
};