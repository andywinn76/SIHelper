export const spirits = {
  "A Spread of Rampant Green": {
    thumbnail: "A_Spread_of_Rampant_Green.png",
    complexity: "moderate",
    innatePowers: [
      {
        name: "CREEPERS TEAR INTO MORTAR",
        speed: "SLOW",
        range: "RANGE 0",
        target: "ANY",
        thresholds: [
          {
            elements: { moon: 1, plant: 2 },
            description: "1 Damage to 1 TOWN / CITY.",
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
        speed: "FAST",
        range: "SACRED SITE RANGE 1",
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
            description: "Also, remove 1 BLIGHT.",
          },
        ],
      },
    ],
  },

  "Breath of Darkness Down Your Spine": {
    thumbnail: "Breath_of_Darkness_Down_Your_Spine.png",
    complexity: "high",
    innatePowers: [
      {
        name: "LEAVE A TRAIL OF DEATHLY SILENCE",
        speed: "FAST",
        range: "NONE",
        target: "YOURSELF",
        thresholds: [
          {
            elements: { moon: 2, animal: 1 },
            description:
              "1 Damage at BREATH OF DARKNESS. You may Push BREATH OF DARKNESS.",
          },
          {
            elements: { moon: 3, air: 1, animal: 1 },
            description:
              "1 Damage at BREATH OF DARKNESS. You may Push BREATH OF DARKNESS.",
          },
          {
            elements: { moon: 4, air: 2, animal: 2 },
            description:
              "1 Damage at BREATH OF DARKNESS. You may Push BREATH OF DARKNESS.",
          },
          {
            elements: { moon: 5, air: 2, animal: 3 },
            description:
              "Move BREATH OF DARKNESS to ENDLESS DARK. It Brings 1 Invader (from its land).",
          },
        ],
      },
      {
        name: "LOST IN THE ENDLESS DARK",
        speed: "SLOW",
        range: "NONE",
        target: "ENDLESS DARK",
        thresholds: [
          {
            elements: { moon: 2, air: 1 },
            description:
              "1 FEAR per Invader (max. 4). Downgrade up to 1 Invader. (Downgrading Removes EXPLORER)",
          },
          {
            elements: { moon: 4, air: 3 },
            description:
              "1 FEAR per Invader (max. 4). Downgrade any number of invaders.",
          },
          {
            elements: { moon: 3, animal: 2 },
            description: "Add 1 BEASTS.",
          },
        ],
      },
    ],
  },

  "Bringer of Dreams and Nightmares": {
    thumbnail: "Bringer_of_Dreams_and_Nightmares.png",
    complexity: "high",
    innatePowers: [
      {
        name: "Spirits May Yet Dream",
        speed: "FAST",
        range: "NONE",
        target: "Any PLAYER",
        thresholds: [
          {
            elements: { moon: 2, air: 2 },
            description:
              "Turn any face down FEAR Card face-up. (It's earned/resolved normally, but players can see what's coming)",
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
        speed: "FAST",
        range: "RANGE 0",
        target: "Invaders",
        thresholds: [
          {
            elements: { moon: 1, air: 1 },
            description: "1 FEAR.",
          },
          {
            elements: { moon: 2, air: 1, animal: 1 },
            description: "+1 FEAR.",
          },
          {
            elements: { moon: 3, air: 2, animal: 1 },
            description: "+1 FEAR.",
          },
        ],
      },
    ],
  },

  "Dances Up Earthquakes": {
    thumbnail: "Dances_Up_Earthquakes.png",
    complexity: "very high",
    innatePowers: [
      {
        name: "Land Creaks with Tension",
        speed: "FAST",
        range: "NONE",
        target: "Yourself",
        thresholds: [
          {
            elements: { earth: 1 },
            description:
              "If you have at least 1 IMPENDING, Add 1 QUAKE in one of your lands.",
          },
          {
            elements: { moon: 1, earth: 1 },
            description:
              "In one of your lands, Defend 1 per IMPENDING (max. 3).",
          },
          {
            elements: { moon: 1, earth: 2 },
            description:
              "If you have at least 3 IMPENDING, Add 1 QUAKE in one of your lands.",
          },
          {
            elements: { moon: 2, earth: 3 },
            description:
              "In one of your lands, Defend 1 per IMPENDING (max. 3).",
          },
        ],
      },
      {
        name: "Earth Shudders, Buildings Fall",
        speed: "SLOW",
        range: "RANGE 0",
        target: "QUAKE",
        thresholds: [
          {
            elements: { fire: 2, earth: 3, cardPlays: 3 },
            description: "2 Damage per QUAKE, to TOWN/CITY only.",
          },
          {
            elements: { fire: 3, earth: 4, cardPlays: 5 },
            description:
              "1 FEAR. In any number of lands with QUAKE: 2 Damage per QUAKE, to TOWN/CITY only. Remove 1 QUAKE.",
          },
          {
            elements: { fire: 4, earth: 5, cardPlays: 7 },
            description:
              "2 FEAR. In each land where you removed QUAKE: 1 Damage to each Invader.",
          },
        ],
        special: "POWER CARD is the # of Power Cards you have in play.",
      },
    ],
  },

  "Devouring Teeth Lurk Underfoot": {
    thumbnail: "Devouring_Teeth_Lurk_Underfoot.png",
    complexity: "low",
    innatePowers: [
      {
        name: "DEATH APPROACHES FROM BENEATH THE SURFACE",
        speed: "SLOW",
        range: "RANGE 1",
        target: "Invaders",
        thresholds: [
          {
            elements: { fire: 1, animal: 1 },
            description:
              "If you don't have PRESENCE in target land, Gather 1 of your PRESENCE. (This is required.)",
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
            description: "2 FEAR. 4 Damage.",
          },
        ],
      },
    ],
  },

  "Downpour Drenches the World": {
    thumbnail: "Downpour_Drenches_the_World.png",
    complexity: "high",
    innatePowers: [
      {
        name: "Rain and Mud Suppress Conflict",
        speed: "FAST",
        range: "NONE",
        target: "Yourself",
        thresholds: [
          {
            elements: { air: 1, water: 3 },
            description:
              "Each of your PRESENCE grants Defend 1 and lowers DAHAN counterattack damage by 1. (Total, in its land.)",
          },
          {
            elements: { water: 5, earth: 1 },
            description:
              "Each of your PRESENCE grants Defend 1 and lowers DAHAN counterattack damage by 1.",
          },
          {
            elements: { air: 3, water: 9, earth: 2 },
            description:
              "2 FEAR. In your lands, invaders and DAHAN have -1 Health (min 1).",
          },
        ],
      },
      {
        name: "Water Nourishes Life's Growth",
        speed: "FAST",
        range: "RANGE 0",
        target: "Any",
        thresholds: [
          {
            elements: { water: 3, plant: 2 },
            description:
              "Gain 1 Energy. You may remove 1 BLIGHT by removing one of your PRESENCE (from target land).",
          },
          {
            elements: { water: 5, earth: 1, plant: 2 },
            description: "Gain +1 Energy. Gather up to 1 DAHAN.",
          },
          {
            elements: { water: 7, earth: 2, plant: 3 },
            description:
              "When BLIGHT would be added to target land, instead leave it on the card.",
          },
        ],
      },
    ],
  },

  "Ember-Eyed Behemoth": {
    thumbnail: "Ember-Eyed_Behemoth.png",
    complexity: "moderate",
    innatePowers: [
      {
        name: "Smash, Stomp, and Flatten",
        speed: "SLOW",
        range: "NONE",
        target: "EMBER-EYED BEHEMOTH",
        thresholds: [
          {
            elements: { fire: 2, earth: 1 },
            description: "2 Damage.",
          },
          {
            elements: { fire: 3, earth: 1, plant: 1 },
            description: "1 Damage. Push 1 DAHAN.",
          },
          {
            elements: { fire: 4, earth: 2, plant: 1 },
            description: "1 FEAR. 1 Damage.",
          },
          {
            elements: { fire: 5, earth: 2, plant: 2 },
            description: "2 Damage. 2 Damage to DAHAN.",
          },
        ],
        special:
          "If EMBER-EYED BEHEMOTH is Empowered, you may Repeat this Power once each turn. (You may take other Actions before Repeating, including The Behemoth Rises.)",
      },
    ],
  },

  "Eyes Watch from the Trees": {
    thumbnail: "Eyes_Watch_from_the_Trees.png",
    complexity: "low",
    innatePowers: [
      {
        name: "MISCHIEF AND SABOTAGE",
        speed: "FAST",
        range: "SACRED SITE RANGE 1",
        target: "Invaders",
        thresholds: [
          {
            elements: { moon: 1, plant: 1 },
            description: "1 FEAR and Defend 2.",
          },
          {
            elements: { moon: 2, plant: 3 },
            description: "Instead, 1 FEAR and Defend 4.",
          },
          {
            elements: { moon: 2, air: 2, plant: 4 },
            description: "Instead, 3 FEAR and Defend 6.",
          },
          {
            elements: { moon: 3, air: 3, plant: 5 },
            description: "Instead, 5 FEAR and Defend 12.",
          },
        ],
        specialNote:
          "(This is all one Power, so your Special Rule 'DAHAN Trust the Watchers' can Gather only 1 DAHAN.)",
      },
    ],
  },

  "Fathomless Mud of the Swamp": {
    thumbnail: "Fathomless_Mud_of_the_Swamp.png",
    complexity: "low",
    innatePowers: [
      {
        name: "Spreading and Dreadful Mire",
        speed: "SLOW",
        range: "SACRED SITE RANGE 1",
        target: "Invaders",
        thresholds: [
          {
            elements: { water: 1 },
            description:
              "Move 1 PRESENCE from the origin SACRED SITE to target land. (This is required.)",
          },
          {
            elements: { moon: 1, water: 2, earth: 1 },
            description: "1 FEAR. 1 Damage. Push 1 DAHAN.",
          },
          {
            elements: { moon: 2, water: 3, earth: 2 },
            description: "1 FEAR. 1 Damage. Push 1 DAHAN.",
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
    thumbnail: "Finder_of_Paths_Unseen.png",
    complexity: "very high",
    innatePowers: [
      {
        name: "LAY PATHS THEY CANNOT HELP BUT WALK",
        speed: "FAST",
        range: "RANGE 0",
        target: "Any",
        thresholds: [
          {
            elements: { moon: 2, air: 2 },
            description:
              "Push up to half (rounded down) of invaders from target land. Do likewise for DAHAN, PRESENCE, and BEASTS (each separately).",
          },
          {
            elements: { sun: 2, air: 2 },
            description: "Push up to 1 Invader/DAHAN/PRESENCE/BEASTS.",
          },
          {
            elements: { moon: 2, air: 4, water: 3 },
            description: "Repeat this Power.",
          },
        ],
      },
      {
        name: "CLOSE THE WAYS",
        speed: "FAST",
        range: "RANGE 1",
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
    thumbnail: "Fractured_Days_Split_the_Sky.png",
    complexity: "very high",
    innatePowers: [
      {
        name: "SLIP THE FLOW OF TIME",
        speed: "FAST",
        range: "NONE",
        target: "Any PLAYER",
        thresholds: [
          {
            elements: { moon: 3, air: 1 },
            description: "Target Spirit may Resolve 1 SLOW now.",
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
        speed: "SLOW",
        range: "NONE",
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

  "Grinning Trickster Stirs Up Trouble": {
    thumbnail: "Grinning_Trickster_Stirs_Up_Trouble.png",
    complexity: "moderate",
    innatePowers: [
      {
        name: "Let's See What Happens",
        speed: "FAST",
        range: "RANGE 1",
        target: "Invaders",
        thresholds: [
          {
            elements: { moon: 1, fire: 1, air: 2 },
            description:
              "Discard Minor Powers from the deck until you get one that targets a land. Use its text effects on target land immediately, ignoring normal Range/Targeting restrictions. All 'up to' instructions must be used at max. value. Treat all 'OR's as 'AND's. (It is not considered a card of yours or a card in play. Its effects are treated as performed by this Power, as if its text were copied here.)",
          },
          {
            elements: { moon: 2, fire: 1, air: 2 },
            description:
              "You may Forget a Power Card to gain the just-used Power Card (to hand) and 1 Energy.",
          },
        ],
      },
      {
        name: "WHY DON'T YOU AND THEM FIGHT",
        speed: "FAST",
        range: "RANGE 0",
        target: "Invaders",
        thresholds: [
          {
            elements: { moon: 3 },
            description: "This Power may be SLOW.",
          },
          {
            elements: { air: 3 },
            description: "Add 1 STRIFE.",
          },
          {
            elements: { sun: 3, fire: 3 },
            description: "1 Invader and 1 DAHAN deal Damage to each other.",
          },
          {
            elements: { animal: 3 },
            description:
              "If target land has BEASTS, 2 Damage. Otherwise, you may Gather 1 BEASTS.",
          },
        ],
      },
    ],
  },

  "Heart of the Wildfire": {
    thumbnail: "Heart_of_the_Wildfire.png",
    complexity: "high",
    innatePowers: [
      {
        name: "Firestorm",
        speed: "FAST",
        range: "RANGE 0",
        target: "BLIGHT",
        thresholds: [
          {
            elements: { plant: 1 },
            description: "1 Damage per 2 FIRE you have.",
          },
          {
            elements: { plant: 3 },
            description: "Instead, 1 Damage per FIRE you have.",
          },
          {
            elements: { fire: 4, air: 2 },
            description:
              "Split this Power's Damage however desired between target land and any number of your lands with BLIGHT.",
          },
          {
            elements: { fire: 7 },
            description:
              "In a land with BLIGHT where you have PRESENCE, Push all DAHAN. Destroy all invaders and BEASTS. Add 1 BLIGHT.",
          },
        ],
      },
      {
        name: "The Burned Land Regrows",
        speed: "SLOW",
        range: "RANGE 0",
        target: "Any",
        thresholds: [
          {
            elements: { fire: 4, plant: 1 },
            description:
              "If target land has 2 BLIGHT or more, remove 1 BLIGHT.",
          },
          {
            elements: { fire: 4, plant: 2 },
            description: "Instead, remove 1 BLIGHT.",
          },
          {
            elements: { fire: 5, plant: 2, earth: 2 },
            description: "Remove another BLIGHT.",
          },
        ],
      },
    ],
  },

  "Hearth-Vigil": {
    thumbnail: "Hearth-Vigil.png",
    complexity: "moderate",
    innatePowers: [
      {
        name: "Warn of Impending Conflict",
        speed: "FAST",
        range: "NONE",
        target: "Yourself",
        thresholds: [
          {
            elements: { sun: 2, earth: 1 },
            description:
              "In one of your lands, 1 DAHAN deals Damage before Invaders during Ravages. (Choose a land when Invaders Ravage there.)",
          },
          {
            elements: { sun: 3, earth: 1 },
            description:
              "In that land, another DAHAN deals Damage before Invaders during Ravages.",
          },
          {
            elements: { sun: 4, earth: 2 },
            description:
              "In that land, all DAHAN deal Damage before Invaders during Ravages.",
          },
          {
            elements: { sun: 5, earth: 3 },
            description:
              "Instead, all DAHAN in all of your lands deal Damage before Invaders during Ravages.",
          },
        ],
      },
      {
        name: "Keep Watch for New Incursions",
        speed: "FAST",
        range: "SACRED SITE DAHAN RANGE 1",
        target: "Any",
        thresholds: [
          {
            elements: { animal: 1 },
            description: "Gather up to 2 DAHAN, from your lands only.",
          },
          {
            elements: { sun: 1, air: 2, animal: 3 },
            description:
              "Once this turn after Invaders are added or moved into target land, 1 Damage per DAHAN in target land, to those added/moved Invaders only.",
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
    thumbnail: "Keeper_of_the_Forbidden_Wilds.png",
    complexity: "moderate",
    innatePowers: [
      {
        name: "Punish Those Who Trespass",
        speed: "SLOW",
        range: "RANGE 0",
        target: "Any",
        thresholds: [
          {
            elements: { sun: 2, fire: 1, plant: 2 },
            description: "2 Damage. Destroy 1 DAHAN.",
          },
          {
            elements: { sun: 2, fire: 2, plant: 3 },
            description: "+1 Damage per SUN/PLANT you have.",
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
        speed: "SLOW",
        range: "RANGE 1",
        target: "LAND WITHOUT BLIGHT",
        thresholds: [
          {
            elements: { sun: 2 },
            description: "Push 1 EXPLORER from target land per 2 SUN you have.",
          },
          {
            elements: { plant: 1 },
            description: "If target land has no EXPLORER, add 1 WILDS.",
          },
          {
            elements: { plant: 3 },
            description: "This Power has PLUS 1 RANGE.",
          },
          {
            elements: { air: 1 },
            description: "This Power has PLUS 1 RANGE.",
          },
        ],
      },
    ],
  },

  "Lightning's Swift Strike": {
    thumbnail: "Lightnings_Swift_Strike.png",
    complexity: "low",
    innatePowers: [
      {
        name: "Thundering Destruction",
        speed: "SLOW",
        range: "SACRED SITE RANGE 1",
        target: "ANY",
        thresholds: [
          {
            elements: { fire: 3, air: 2 },
            description: "Destroy 1 TOWN",
          },
          {
            elements: { fire: 4, air: 3 },
            description: "Instead, you may Destroy 1 CITY",
          },
          {
            elements: { fire: 5, air: 4, water: 1 },
            description: "Also, Destroy 1 CITY/1 TOWN",
          },
          {
            elements: { fire: 5, air: 5, water: 2 },
            description: "Also, Destroy 1 CITY/1 TOWN",
          },
        ],
      },
    ],
  },

  "Lure of the Deep Wilderness": {
    thumbnail: "Lure_of_the_Deep_Wilderness.png",
    complexity: "moderate",
    innatePowers: [
      {
        name: "Forsake Society to Chase After Dreams",
        speed: "SLOW",
        range: "RANGE 1",
        target: "Invaders",
        thresholds: [
          {
            elements: { moon: 2 },
            description: "Replace 1 EXPLORER with 1 EXPLORER.",
          },
          {
            elements: { moon: 2, air: 1 },
            description: "Instead, replace 1 TOWN with 2 EXPLORER.",
          },
          {
            elements: { moon: 3, air: 2, animal: 1 },
            description: "Instead, replace 1 CITY with 3 EXPLORER.",
          },
          {
            elements: { air: 4 },
            description: "Repeat this Power.",
          },
        ],
        special:
          "After this Power replaces pieces with EXPLORER: Gather any number of those EXPLORER into your lands. If target land has any TOWN/CITY remaining, 1 FEAR.",
      },
      {
        name: "Never Heard From Again",
        speed: "SLOW",
        range: "RANGE 0",
        target: "Inland",
        thresholds: [
          {
            elements: { fire: 1, plant: 3 },
            description: "Add 1 BADLANDS.",
          },
          {
            elements: { plant: 2 },
            description:
              "Destroy up to 2 EXPLORER per BADLANDS/BEASTS/DISEASE/WILDS.",
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
          "If this Power destroys any EXPLORER, 1 FEAR. If this Power destroys 5 or more EXPLORER, +1 FEAR.",
      },
    ],
  },

  "Many Minds Move as One": {
    thumbnail: "Many_Minds_Move_as_One.png",
    complexity: "moderate",
    innatePowers: [
      {
        name: "The Teeming Host Arrives",
        speed: "FAST",
        range: "RANGE 2",
        target: "Any",
        thresholds: [
          {
            elements: { air: 2, animal: 1 },
            description: "Gather up to 1 BEASTS.",
          },
          {
            elements: { air: 3, water: 1, animal: 2 },
            description: "Instead, Gather up to 1 BEASTS per AIR you have.",
          },
          {
            elements: { fire: 1, air: 4, animal: 2 },
            description: "Push up to 3 BEASTS.",
          },
        ],
      },
      {
        name: "Beset and Confound the Invaders",
        speed: "FAST",
        range: "RANGE 2",
        target: "Invaders",
        thresholds: [
          {
            elements: { air: 1, animal: 2 },
            description: "2 BEASTS: 2 FEAR and Defend 2.",
          },
          {
            elements: { air: 2, animal: 3 },
            description: "3 BEASTS: Instead, 3 FEAR and Defend 4.",
          },
          {
            elements: { air: 3, animal: 4 },
            description: "4 BEASTS: Instead, 4 FEAR and Defend 7.",
          },
          {
            elements: { air: 4, earth: 1, animal: 5 },
            description: "5 BEASTS: Instead, 6 FEAR and Defend 10.",
          },
        ],
        special: "BEASTS (below) checks the number of BEASTS in target land",
      },
    ],
  },

  "Ocean’s Hungry Grasp": {
    thumbnail: "Oceans_Hungry_Grasp.png",
    complexity: "high",
    innatePowers: [
      {
        name: "POUND SHIPS TO SPLINTERS",
        speed: "FAST",
        range: "RANGE 0",
        target: "Coastal",
        thresholds: [
          {
            elements: { moon: 1, air: 1, water: 2 },
            description: "1 FEAR.",
          },
          {
            elements: { moon: 2, air: 1, water: 3 },
            description: "+1 FEAR.",
          },
          {
            elements: { moon: 3, air: 2, water: 4 },
            description: "+2 FEAR",
          },
        ],
      },
      {
        name: "OCEAN BREAKS THE SHORE",
        speed: "SLOW",
        range: "RANGE 0",
        target: "Coastal",
        thresholds: [
          {
            elements: { water: 2, earth: 1 },
            description: "Drown 1 TOWN.",
          },
          {
            elements: { water: 3, earth: 2 },
            description: "You may instead Drown 1 CITY.",
          },
          {
            elements: { water: 4, earth: 3 },
            description: "Also, Drown 1 TOWN / CITY.",
          },
        ],
      },
    ],
  },

  "Relentless Gaze of the Sun": {
    thumbnail: "Relentless_Gaze_of_the_Sun.png",
    complexity: "high",
    innatePowers: [
      {
        name: "Scorching Convergence",
        speed: "SLOW",
        range: "SACRED SITE RANGE 1",
        target: "Any",
        thresholds: [
          {
            elements: { sun: 2 },
            description:
              "Move all of your PRESENCE from origin land directly to target land. 1 Damage, to TOWN/CITY only.",
          },
          {
            elements: { sun: 3, fire: 1 },
            description:
              "3 Damage to Invaders. 3 Damage to DAHAN. Add 1 BLIGHT without cascading.",
          },
          {
            elements: { sun: 4, fire: 2, air: 1 },
            description: "3 FEAR if this Power destroyed any Invaders.",
          },
          {
            elements: { sun: 5, fire: 3, air: 2 },
            description:
              "1 Damage per remaining PRESENCE of yours in target land.",
          },
        ],
      },
      {
        name: "Consider a Harmonious Nature",
        speed: "FAST",
        range: "NONE",
        target: "Yourself",
        thresholds: [
          {
            elements: { sun: 3, moon: 1 },
            description:
              "When your Powers would Add BLIGHT, you may Destroy 1 PRESENCE instead (there or elsewhere).",
          },
          {
            elements: { sun: 3, water: 1 },
            description: "Your Powers don't damage or destroy DAHAN.",
          },
          {
            elements: { sun: 3, plant: 1 },
            description:
              "Choose another Spirit. They Add 1 DESTROYED PRESENCE to one of your lands.",
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
    thumbnail: "Rising_Heat_of_Stone_and_Sand.png",
    complexity: "low",
    innatePowers: [
      {
        name: "Scorch with Waves of Heat",
        speed: "SLOW",
        range: "SACRED SITE RANGE 1",
        target: "Any",
        thresholds: [
          {
            elements: { fire: 2, air: 2 },
            description: "2 Damage to EXPLORER only.",
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
        specialNote:
          "Innate Powers perform all thresholds reached, in order, on the same target land.",
      },
    ],
  },

  "River Surges in Sunlight": {
    thumbnail: "River_Surges_in_Sunlight.png",
    complexity: "low",
    innatePowers: [
      {
        name: "Massive Flooding",
        speed: "SLOW",
        range: "SACRED SITE RANGE 1",
        target: "ANY",
        thresholds: [
          {
            elements: { sun: 1, water: 2 },
            description: "Push one EXPLORER/TOWN.",
          },
          {
            elements: { sun: 2, water: 3 },
            description: "Instead, 2 Damage, push up to 3 EXPLORER/TOWN",
          },
          {
            elements: { sun: 3, water: 4, earth: 1 },
            description: "Instead, 2 Damage to each Invader",
          },
        ],
      },
    ],
  },

  "Serpent Slumbering Beneath the Island": {
    thumbnail: "Serpent_Slumbering_Beneath_the_Island.png",
    complexity: "high",
    innatePowers: [
      {
        name: "Serpent Wakes in Power",
        speed: "SLOW",
        range: "NONE",
        target: "Yourself",
        thresholds: [
          {
            elements: { fire: 2, water: 1, plant: 1 },
            description:
              "Gain 1 Energy. Other spirits with any Absorbed PRESENCE also gain 1 Energy.",
          },
          {
            elements: { water: 2, earth: 3, plant: 2 },
            description:
              "Add 1 PRESENCE to RANGE 1. Other spirits with 2 or more Absorbed PRESENCE may do likewise.",
          },
          {
            elements: { fire: 3, water: 3, earth: 3, plant: 3 },
            description:
              "Gain a Major Power without Forgetting. Other Spirits with 3 or more Absorbed PRESENCE may do likewise.",
          },
        ],
      },
      {
        name: "Serpent Rouses in Anger",
        speed: "SLOW",
        range: "RANGE 0",
        target: "Any",
        thresholds: [
          {
            elements: { fire: 1, earth: 1 },
            description:
              "For each FIRE + EARTH you have, 1 Damage to 1 TOWN / CITY.",
          },
          {
            elements: { moon: 2, earth: 2 },
            description:
              "For each 2 MOON + 2 EARTH you have, 2 FEAR and you may Push 1 TOWN from target land.",
          },
          {
            elements: { moon: 5, fire: 6, earth: 6 },
            description:
              "Pay 7 Energy. In every land in the game: X Damage, where X is the number of PRESENCE you have in and adjacent to that land.",
          },
        ],
      },
    ],
  },

  "Shadows Flicker Like Flame": {
    thumbnail: "Shadows_Flicker_Like_Flame.png",
    complexity: "low",
    innatePowers: [
      {
        name: "Darkness Swallows the Unwary",
        speed: "FAST",
        range: "SACRED SITE RANGE 1",
        target: "ANY",
        thresholds: [
          {
            elements: { moon: 2, fire: 1 },
            description: "Gather 1 EXPLORER.",
          },
          {
            elements: { moon: 3, fire: 2 },
            description:
              "Destroy up to 2 EXPLORER. 1 FEAR per EXPLORER destroyed.",
          },
          {
            elements: { moon: 4, fire: 3, air: 2 },
            description:
              "3 Damage. 1 FEAR per Invader destroyed by this Damage.",
          },
        ],
      },
    ],
  },

  "Sharp Fangs Behind the Leaves": {
    thumbnail: "Sharp_Fangs_Behind_the_Leaves.png",
    complexity: "moderate",
    innatePowers: [
      {
        name: "RANGING HUNT",
        speed: "FAST",
        range: "RANGE 1",
        target: "LAND WITHOUT BLIGHT",
        thresholds: [
          {
            elements: { animal: 2 },
            description: "You may Gather 1 BEASTS.",
          },
          {
            elements: { plant: 2, animal: 3 },
            description: "1 Damage per BEASTS.",
          },
          {
            elements: { animal: 2 },
            description: "You may Push up to 2 BEASTS.",
          },
        ],
      },
      {
        name: "FRENZIED ASSAULT",
        speed: "SLOW",
        range: "RANGE 1",
        target: "BEASTS",
        thresholds: [
          {
            elements: {
              moon: 1,
              fire: 1,
              animal: 4,
            },
            description: "1 FEAR and 2 Damage. Remove 1 BEASTS.",
          },
          {
            elements: {
              moon: 1,
              fire: 2,
              animal: 5,
            },
            description: "+1 FEAR and +1 Damage.",
          },
        ],
      },
    ],
  },

  "Shifting Memory of Ages": {
    thumbnail: "Shifting_Memory_of_Ages.png",
    complexity: "moderate",
    innatePowers: [
      {
        name: "Learn the Invaders' Tactics",
        speed: "FAST",
        range: "RANGE 1",
        target: "Invaders",
        thresholds: [
          {
            elements: {
              earth: 2,
            },
            description: "Defend 2.",
          },
          {
            elements: {
              air: 1,
              earth: 2,
            },
            description: "Instead, Defend 3.",
          },
          {
            elements: {
              moon: 2,
              air: 3,
              earth: 4,
            },
            description:
              "Instead, Defend 2 per card in the Invader discard pile.",
          },
        ],
      },
      {
        name: "Observe the Ever-Changing World",
        speed: "FAST",
        range: "RANGE 1",
        target: "ANY",
        thresholds: [
          {
            elements: {
              moon: 1,
            },
            description: "Prepare 1 Element Marker.",
          },
          {
            elements: {
              moon: 2,
              air: 1,
            },
            description:
              "Instead, after each of the next three Actions that change which pieces are in target land, Prepare 1 Element Marker.",
          },
        ],
        specialNote:
          "(You can stack the markers you intend to take here or on the target land so you don't need to ponder on what to take mid-turn. Any Action can trigger Preparing a marker, not just your own.)",
      },
    ],
  },

  "Shroud of Silent Mist": {
    thumbnail: "Shroud_of_Silent_Mist.png",
    complexity: "high",
    innatePowers: [
      {
        name: "Suffocating Shroud",
        speed: "SLOW",
        range: "RANGE 0",
        target: "ANY",
        thresholds: [
          {
            elements: {
              moon: 1,
              air: 2,
              water: 1,
            },
            description: "1 Damage.",
          },
          {
            elements: {
              moon: 2,
              air: 3,
              water: 2,
            },
            description:
              "For each adjacent land with your PRESENCE, 1 Damage to a different Invader.",
          },
          {
            elements: {
              moon: 4,
              air: 4,
              water: 3,
            },
            description: "1 Damage.",
          },
          {
            elements: {
              moon: 5,
              air: 6,
              water: 4,
            },
            description: "1 Damage to each Invader.",
          },
        ],
      },
      {
        name: "Lost in the Swirling Haze",
        speed: "SLOW",
        range: "RANGE 0",
        target: "ANY",
        thresholds: [
          {
            elements: {
              air: 1,
              water: 2,
            },
            description: "Push up to 1 DAHAN.",
          },
          {
            elements: {
              air: 2,
              water: 3,
            },
            description: "Push up to 2 EXPLORER/DAHAN.",
          },
          {
            elements: {
              air: 3,
              water: 4,
            },
            description: "Push up to 2 EXPLORER/DAHAN.",
          },
        ],
      },
    ],
  },

  "Starlight Seeks Its Form": {
    thumbnail: "Starlight_Seeks_Its_Form.png",
    complexity: "very high",
    innatePowers: [
      {
        name: "Air Moves, Earth Endures",
        speed: "FAST",
        range: "RANGE 1",
        target: "ANY",
        thresholds: [
          {
            elements: {
              air: 3,
            },
            description: "Push up to 2 EXPLORER or 1 TOWN.",
          },
          {
            elements: {
              earth: 3,
            },
            description: "Defend 5.",
          },
        ],
      },
      {
        name: "Fire Burns, Water Soothes",
        speed: "SLOW",
        range: "SACRED SITE RANGE 1",
        target: "ANY",
        thresholds: [
          {
            elements: {
              fire: 3,
            },
            description: "1 FEAR. 2 Damage.",
          },
          {
            elements: {
              water: 3,
            },
            description: "Remove 1 BLIGHT.",
          },
        ],
      },
      {
        name: "Wood Seeks Growth, Humans Seek Freedom",
        speed: "SLOW",
        range: "RANGE 2",
        target: "ANY",
        thresholds: [
          {
            elements: {
              plant: 3,
            },
            description:
              "Choose a Spirit with PRESENCE in target land. They gain a Power Card.",
          },
          {
            elements: {
              animal: 3,
            },
            description: "1 Damage per DAHAN OR Push up to 3 DAHAN.",
          },
        ],
      },
      {
        name: "Sidereal Guidance",
        speed: "SLOW",
        range: "RANGE 1",
        target: "ANY",
        thresholds: [
          {
            elements: {
              moon: 2,
            },
            description: "Gather up to 1 EXPLORER/DAHAN.",
          },
          {
            elements: {
              moon: 3,
            },
            description: "Instead, Gather up to 3 EXPLORER.",
          },
        ],
      },
      {
        name: "Stars Blaze in the Daytime Sky",
        speed: "SLOW",
        range: "NONE",
        target: "YOURSELF",
        thresholds: [
          {
            elements: {
              sun: 4,
            },
            description:
              "3 FEAR. Gain 1 Energy. Reclaim up to 1 Power Card from play or your discard pile.",
          },
        ],
      },
    ],
  },

  "Stone's Unyielding Defiance": {
    thumbnail: "Stones_Unyielding_Defiance.png",
    complexity: "moderate",
    innatePowers: [
      {
        name: "Hold the Island Fast with a Bulwark of Will",
        speed: "FAST",
        range: "NONE",
        target: "YOURSELF",
        thresholds: [
          {
            elements: {
              earth: 2,
            },
            description:
              "When BLIGHT is added to one of your lands, you may pay 2 Energy per BLIGHT to take it from the box instead of the blight Card. (Handle any cascade separately.)",
          },
          {
            elements: {
              earth: 4,
            },
            description: "The cost is 1 Energy instead of 2.",
          },
          {
            elements: {
              earth: 6,
              plant: 1,
            },
            description:
              'When an Event or blight card directly destroys PRESENCE (yours or others\'), you may prevent any number of PRESENCE from being destroyed by paying 1 Energy each. ("Directly" means "not by adding BLIGHT".)',
          },
        ],
      },
      {
        name: "Let Them Break Themselves Against the Stone",
        speed: "FAST",
        range: "RANGE 0",
        target: "ANY",
        thresholds: [
          {
            elements: {
              earth: 3,
            },
            description:
              "After Invaders deal 1 or more Damage to target land, 2 Damage.",
          },
          {
            elements: {
              earth: 5,
            },
            description:
              "Also deal half of the Damage Invaders did to the land (rounding down).",
          },
          {
            elements: {
              earth: 7,
              sun: 2,
            },
            description: "Repeat this Power.",
          },
        ],
        special:
          "(Reminder: Defend reduces the amount of Damage that Invaders deal to a land.)",
      },
    ],
  },

  "Sun-Bright Whirlwind": {
    thumbnail: "Sun-Bright_Whirlwind.png",
    complexity: "low",
    innatePowers: [
      {
        name: "Violent Windstorms",
        speed: "SLOW",
        range: "RANGE 1",
        target: "ANY",
        thresholds: [
          {
            elements: {
              sun: 1,
              air: 2,
            },
            description: "Push up to 1 EXPLORER.",
          },
          {
            elements: {
              sun: 2,
              air: 3,
            },
            description: "1 FEAR. Push up to 2 EXPLORER/TOWN.",
          },
          {
            elements: {
              sun: 2,
              air: 4,
            },
            description:
              "For each Invader Pushed by this Power, 1 Damage in the land it was Pushed to.",
          },
          {
            elements: {
              sun: 3,
              air: 5,
            },
            description: "4 Damage (in target land).",
          },
        ],
        specialNote:
          "(Innate Powers perform all thresholds reached, in order, on the same target land unless specified.)",
      },
    ],
  },
  Thunderspeaker: {
    thumbnail: "Thunderspeaker.png",
    complexity: "moderate",
    innatePowers: [
      {
        name: "Gather the Warriors",
        speed: "SLOW",
        range: "RANGE 1",
        target: "ANY",
        thresholds: [
          {
            elements: { air: 4 },
            description: "This power may be FAST",
          },
          {
            elements: { animal: 1 },
            description:
              "Gather up to 1 DAHAN per AIR you have. Push up to 1 DAHAN per SUN you have.",
          },
        ],
      },
      {
        name: "Lead the Furious Assault",
        speed: "SLOW",
        range: "RANGE 0",
        target: "ANY",
        thresholds: [
          {
            elements: { air: 4 },
            description: "This power may be FAST",
          },
          {
            elements: { sun: 2, fire: 1 },
            description: "Destroy 1 TOWN for every 2 DAHAN in target land.",
          },
          {
            elements: { sun: 4, fire: 3 },
            description: "Destroy 1 CITY for every 3 DAHAN in target land.",
          },
        ],
      },
    ],
  },

  "Towering Roots of the Jungle": {
    thumbnail: "Towering_Roots_of_the_Jungle.png",
    complexity: "moderate",
    innatePowers: [
      {
        name: "Shelter Under Towering Branches",
        speed: "SLOW",
        range: "SACRED SITE RANGE 0",
        target: "ANY",
        thresholds: [
          {
            elements: {
              sun: 1,
              plant: 1,
            },
            description: "Gather up to 1 DAHAN.",
          },
          {
            elements: {
              sun: 1,
              earth: 1,
              plant: 2,
            },
            description: "Gather up to 1 EXPLORER.",
          },
          {
            elements: {
              sun: 2,
              earth: 1,
              plant: 3,
            },
            description: "Gather up to 1 TOWN.",
          },
          {
            elements: {
              sun: 3,
              earth: 2,
              plant: 4,
            },
            description: "Gather up to 1 CITY.",
          },
        ],
      },
      {
        name: "Revoke Sanctuary and Cast Out",
        speed: "SLOW",
        range: "SACRED SITE RANGE 0",
        target: "TOWERING ROOTS OF THE JUNGLE + Invaders",
        thresholds: [
          {
            elements: {
              sun: 1,
              moon: 1,
              plant: 2,
            },
            description: "1 FEAR. Remove 1 EXPLORER/TOWN.",
          },
          {
            elements: {
              sun: 2,
              moon: 1,
              plant: 3,
            },
            description: "1 FEAR. Remove 1 EXPLORER/TOWN.",
          },
          {
            elements: {
              sun: 2,
              moon: 2,
              plant: 4,
            },
            description: "1 FEAR. Remove 1 Invader.",
          },
        ],
      },
    ],
  },

  "Vengeance as a Burning Plague": {
    thumbnail: "Vengeance_as_a_Burning_Plague.png",
    complexity: "high",
    innatePowers: [
      {
        name: "Epidemics Run Rampant",
        speed: "FAST",
        range: "RANGE 1",
        target: "DISEASE",
        thresholds: [
          {
            elements: {
              fire: 1,
              animal: 3,
            },
            description: "1 Damage per DISEASE.",
          },
          {
            elements: {
              water: 1,
              fire: 2,
              animal: 4,
            },
            description: "+1 Damage per DISEASE.",
          },
          {
            elements: {
              water: 3,
              fire: 3,
              animal: 5,
            },
            description:
              "+1 Damage per DISEASE. 1 FEAR per DISEASE (max 5). Remove 1 DISEASE.",
          },
        ],
        special:
          "This Power's Damage is dealt (separately) to both Invaders and DAHAN",
      },
      {
        name: "Savage Revenge",
        speed: "SLOW",
        range: "RANGE 0",
        target: "TOWN/CITY",
        thresholds: [
          {
            elements: {
              air: 3,
            },
            description: "This Power has PLUS 1 RANGE.",
          },
          {
            elements: {
              fire: 3,
              animal: 1,
            },
            description: "1 Damage.",
          },
          {
            elements: {
              fire: 4,
              animal: 2,
            },
            description: "+2 Damage.",
          },
          {
            elements: {
              fire: 5,
              air: 2,
              animal: 2,
            },
            description: "+3 Damage.",
          },
        ],
      },
    ],
  },

  "Vital Strength of the Earth": {
    thumbnail: "Vital_Strength_of_the_Earth.png",
    complexity: "low",
    innatePowers: [
      {
        name: "Gift of Strength",
        speed: "FAST",
        range: "NONE",
        target: "ANY PLAYER",
        thresholds: [
          {
            elements: { sun: 1, earth: 2, plant: 2 },
            description:
              "Once this turn, Target Spirit may Repeat 1 Power Card with Energy cost of 1 or less.",
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

  "Volcano Looming High": {
    thumbnail: "Volcano_Looming_High.png",
    complexity: "moderate",
    innatePowers: [
      {
        name: "EXPLOSIVE ERUPTION",
        speed: "FAST",
        range: "RANGE 0",
        target: "ANY",
        special:
          "Destroy X (1 or more) of your PRESENCE in target land; DESTROYED PRESENCE checks how many you destroyed. This Power does Damage (separately and equally) to both Invaders and DAHAN. Ranges below can't be increased.",
        thresholds: [
          {
            elements: {
              fire: 2,
              earth: 2,
            },
            description:
              "2 DESTROYED PRESENCE  In one land within RANGE 1, X Damage.",
          },
          {
            elements: {
              fire: 3,
              earth: 3,
            },
            description: "4 DESTROYED PRESENCE  Generate X FEAR.",
          },
          {
            elements: {
              fire: 4,
              air: 2,
              earth: 4,
            },
            description:
              "6 DESTROYED PRESENCE  In each land within RANGE 1, 4 Damage. Add 1 BLIGHT to target land; doing so does not Destroy your PRESENCE.",
          },
          {
            elements: {
              fire: 5,
              air: 3,
              earth: 5,
            },
            description:
              "10 DESTROYED PRESENCE  In each land within RANGE 2, +4 Damage. In each land adjacent to the target, add 1 BLIGHT if it doesn't have any.",
          },
        ],
      },
      {
        name: "POWERED BY THE FURNACE OF THE EARTH",
        speed: "SLOW",
        range: "RANGE 0",
        target: "ANY",
        thresholds: [
          {
            elements: {
              earth: 3,
            },
            description: "Add 1 of your destroyed PRESENCE.",
          },
          {
            elements: {
              fire: 3,
            },
            cost: "Pay 2 Energy",
            description: "Pay 2 energy. Gain a Power Card.",
          },
          {
            elements: {
              earth: 4,
              fire: 4,
            },
            description:
              "Move up to 2 of your PRESENCE from other lands to target land.",
          },
          {
            elements: {
              fire: 5,
            },
            description:
              "Return up to 2 of your destroyed PRESENCE to your PRESENCE tracks.",
          },
        ],
      },
    ],
  },

  "Wandering Voice Keens Delirium": {
    thumbnail: "Wandering_Voice_Keens_Delirium.png",
    complexity: "high",
    innatePowers: [
      {
        name: "Inscrutable Journeying",
        speed: "FAST",
        range: "NONE",
        target: "YOURSELF",
        thresholds: [
          {
            elements: {
              air: 1,
            },
            description: "You may Push WANDERING VOICE KEENS DELIRIUM.",
          },
          {
            elements: {
              air: 3,
            },
            description: "You may Push WANDERING VOICE KEENS DELIRIUM.",
          },
          {
            elements: {
              air: 5,
            },
            description: "You may Push WANDERING VOICE KEENS DELIRIUM.",
          },
          {
            elements: {
              moon: 2,
              fire: 1,
              air: 4,
              plant: 1,
            },
            description: "Empower WANDERING VOICE KEENS DELIRIUM.",
          },
        ],
        special:
          "(Each time you move WANDERING VOICE KEENS DELIRIUM into a land with Invaders, Spread Tumult and Delusion adds 1 STRIFE.)",
      },
      {
        name: "Mind-Shattering Song",
        speed: "SLOW",
        range: "SACRED SITE RANGE 1",
        target: "STRIFE",
        thresholds: [
          {
            elements: {
              moon: 1,
              air: 2,
            },
            description: "1 FEAR per MOON you have.",
          },
          {
            elements: {
              sun: 1,
              air: 2,
            },
            description:
              "1 Damage per SUN you have, to Invaders with STRIFE only.",
          },
          {
            elements: {
              moon: 1,
              sun: 1,
              air: 4,
            },
            description:
              "For each SUN MOON pair you have, Destroy 1 Invader with STRIFE.",
          },
        ],
      },
    ],
  },

  "Wounded Waters Bleeding": {
    thumbnail: "Wounded_Waters_Bleeding.png",
    complexity: "high",
    innatePowers: [
      {
        name: "Swirl and Spill",
        speed: "SLOW",
        range: "RANGE 1",
        target: "ANY",
        thresholds: [
          {
            elements: {
              water: 2,
            },
            description: "Push up to 2 EXPLORER/DAHAN/BLIGHT.",
          },
          {
            elements: {
              water: 3,
              animal: 1,
            },
            description: "1 FEAR. Push up to 2 TOWN/PRESENCE/BEASTS.",
          },
          {
            elements: {
              water: 5,
              plant: 2,
              animal: 2,
            },
            description:
              "In one land pushed into, Downgrade all TOWN and all CITY.",
          },
        ],
      },
      {
        name: "Sanguinary Taint",
        speed: "SLOW",
        range: "RANGE 1",
        target: "ANY",
        thresholds: [
          {
            elements: {
              animal: 2,
            },
            description: "1 FEAR. 1 Damage. Push 1 DAHAN.",
          },
          {
            elements: {
              water: 1,
              animal: 3,
            },
            description: "1 Damage. Add 1 BEASTS.",
          },
          {
            elements: {
              fire: 2,
              water: 2,
              animal: 5,
            },
            description: "1 FEAR. 4 Damage. Add 1 DISEASE.",
          },
        ],
      },
    ],
  },
};
