import { aspects } from "./aspects.js";
import { specialRules } from "./specialRules.js";

export const spirits = {
  "A Spread of Rampant Green": {
    thumbnail: "A_Spread_of_Rampant_Green.png",
    complexity: "moderate",

    designLore: `A Spread of Rampant Green is an ancient and enthusiastic spirit of growth and renewal that is extraordinarily difficult to keep down. It can play up to 3 Presence a turn under the right circumstances, and may return its destroyed Presence to play. It assaults the Invaders directly and bodily: clogging water supplies, tearing down buildings with creepers, and overgrowing the land so badly that it brings everything to a standstill: anywhere it has a Sacred Site, it can destroy one of its Presence to flatly prevent a Ravage or Build.
    \n\nA Spread of Rampant Green is a force of continual renewal and regeneration, a jungle so thick and verdant you can barely see five feet ahead with plants overgrowing your path behind as you walk. Wherever it goes, creepers and greenery twine their way across the land, and the leaves rustle with sounds of laughter; for all that it's ancient and primal, it loves life with the same wholehearted exuberance as a toddler, and shows up at human villages with all the enthusiasm of a kid doing a flying belly-flop atop an unsuspecting parent.
    \n\nThankfully, it's powerful enough that its acts of reckless enthusiasm happen at a timescale humans can react to: a village may be overgrown in a night or three, but not in minutes.`,

    bio: `One of the older spirits on the island, though it's even more wild and exuberant these days than when it was young. Contrary to some stories, it does think things through - it's just far more concerned with the process of life than with things like 'consequences".
    \n\nIt's not unfriendly to the Dahan, but its idea of a good time is to smother their buildings in all manner of inconvenient greenery, and its notion of "help" transforms careful cultivated areas into overgrown thickets. Entire villages have been known to move to fresh planting-sites years early if a spirit-speaker suspects that Rampant Green is going to stay in the area for too long.5`,

    setup: `Put 2 PRESENCE on your starting board; 1 in the highest-numbered Wetland, and 1 in the Jungle without any DAHAN. (If there is more than 1 such Jungle, you may choose)`,

    playStyle: `Fairly good at dealing with Towns, but terrible at handling Explorers (who are unfazed by prolific foliage). Can get Presence onto the board faster than most other Spirits. Extra Presence is good for targeting and especially for 'Choke the Land with Green", which can be extremely effective at slowing down invaders. Just be careful not to destroy Sacred Sites needed for Power use.`,

    specialRules: [
      {
        title: "CHOKE THE LAND WITH GREEN",
        description: `Whenever Invaders would Ravage or Build in a land with your SACRED SITE, you may prevent it by destroying one of your PRESENCE in that land.`,
      },
      {
        title: "STEADY REGENERATION",
        description: `When adding PRESENCE to the board via Growth, you may optionally use your destroyed PRESENCE. If the island is Healthy, do so freely. If the island is Blighted, doing so costs 1 Energy per destroyed PRESENCE you add.`,
      },
    ],
    summaryOfPowers: [
      { offense: 4, control: 3, fear: 2, defense: 5, utility: 4 },
    ],
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

    bio: `In the open spaces of Spirit Island, the night sky, when clear, blazes with light from the moon and stars - but not all of this light reaches the earth. From time to time an ever-shifting shadow writhes across the land, bringing a darkness deeper than found under any jungle canopy. It seeks out those who are isolated and alone, and swallows compatriots and communities alike into its lightless void. Some return, others do not.
    \n\nMany Dahan suspect this may be another form of Shadows Flicker Like Flame - its whispery voice crackles like fire, among other signs - but keep cautiously clear of it, as it has made no requests of them.`,

    designLore: `Fear of the dark - and of being alone in the dark - is something really primal. On Spirit Island, it's also really sensible: not just because there are things in the dark that might hurt you, but because the dark itself might swallow you, never to return. It is not a mere absence of light, but an actual thing unto itself.
    \n\nOr, perhaps, multiple things, but here we're discussing just one: Breath of Darkness Down Your Spine.
    \n\nBreath of Darkness is an Incarna Spirit, its tangled locus a fearsome creature of living shadow that is not exactly physical, but not exactly intangible - it can rend and tear, but also slip through tiny openings, suddenly unfurl itself to a vaster shape, or evaporate away altogether. This may be because it is not entirely here - there is a realm of shadows that may exist inside of it, or on the other side of it, or which it partially exists in, or to which it is connected?… even the Dahan aren't sure, and have little desire to try and find out. What they do know is that some of those trapped by darkness return - eventually - while others never do.
    \n\n(The Dahan have few troubles with Breath of Darkness these days. Perhaps this is because the Dahan are correct in their beliefs about certain patterns the Spirit is thought to dislike, allowing travelers caught out alone a much better chance of avoiding an encounter with it. Perhaps it is because the Dahan are correct in other beliefs about the nature of the island, and have resided there long enough to be better-anchored against being pulled into another realm against their will. Perhaps it is simply because Breath of Darkness has some agenda of its own, or because some other Spirit is intervening in one fashion or another, or because it is actually an alternate form of Shadows Flicker Like Flame. Regardless, most Dahan remain cautious - though if it started speaking to them, they'd hear what it had to say; part of their deep wariness is that it doesn't communicate with them much.)`,

    setup: `Put 2 PRESENCE and your Incarna (BREATH OF DARKNESS), Unempowered (UNEMPOWERED), on your starting board: 1 PRESENCE and BREATH OF DARKNESS in the lowest-numbered Jungle and 1 in the highest-numbered Jungle. Set The Endless Dark (ENDLESS DARK) tile next to the island with 1 EXPLORER on it.
    \n\nYou start with your 4 Unique Power Cards and 0 Energy.`,

    playStyle: `Abducts lone Invaders to gain Fear and keep them off the board for a time; its mobile Incarna is particularly useful for this. Reclaiming permits the Invaders to escape its void en masse, so can be quite painful.
    \n\nHas trouble with built-up lands, and may need to scatter Invaders or take a Major Power to deal with them.`,

    specialRules: [
      {
        title: "TERROR STALKS THE LAND",
        description: `You have an Incarna (BREATH OF DARKNESS). Empower BREATH OF DARKNESS after uncovering EMPOWERED. You may Abduct 1 EXPLORER/TOWN at empowered BREATH OF DARKNESS each FAST phase.
        \n\nTo Abduct a piece, Move it to The Endless Dark (ENDLESS DARK). When pieces Escape, Move them to non-Ocean lands with your PRESENCE/BREATH OF DARKNESS; if they have no legal land to move to, you lose.
        \n\nWhen your Powers would directly damage or directly destroy the only Invader in a land, instead Abduct it. (Check if it is alone at the start of the damage/destroy instruction. ENDLESS DARK is not a land.)`,
      },
      {
        title: "SHADOW-TOUCHED REALM",
        description: `Your land-targeting Powers can target ENDLESS DARK as if it were a land, ignoring Range. (ENDLESS DARK is Inland and has no terrain.)`,
      },
      {
        title: "A SPACE OF STRANGE AND INFINITE DARKNESS",
        description: `The Endless Dark (ENDLESS DARK) is on the island, but isn't a land and isn't on any board.
        \n\n• This can't be a SACRED SITE.
        \n• Spirits can't target this even if they have PRESENCE here.
        \n• Adding BLIGHT here doesn't destroy PRESENCE.
        \n• Special rules that affect lands do nothing here.
        \n• Invaders can't take Actions here.
        \n• Pieces here are on the island when checking for Victory/Defeat.`,
      },
      {
        title: "TRAPPED IN THE ENDLESS DARK",
        description: `Fear Cards and Token Events affect pieces here as if this were an Inland land, but can't remove Invaders here - when they would, instead 1 FEAR per Invader they would have removed.`,
      },
    ],
    summaryOfPowers: [
      { offense: 2, control: 4, fear: 5, defense: 1, utility: 2 },
    ],
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

    bio: `When the moon is bright, and the leaves overhead are thin enough to let stray beams fall to earth, the Bringer of Dreams and Nightmares may sometimes be spied, an apparition of pale light and deep shadow. Seen this way, it will neither stop nor acknowledge attempts to communicate with it, whether by Dahan or Spirit. It might not even be there at all: perhaps it's a reflection of a self somewhere else entirely; the realm of the The Pathmaker, or some strange road that borders it.
    \n\nBut beings which dream hear from the Bringer frequently, even if they rarely remember it. Certain patterns may even call its attention, if drawn with sand and scatters with breath before sleep. Since the Invaders came, it has tended towards more terrifying forms, even well before the current conflict arose.`,

    designLore: `Bringer of Dreams and Nightmares draws a distinction only between dreams it carries to slumbering minds and those which arise independent of its touch. It may bear visions of wonder or terror, of prophecy or muddled echoes of past experience; they may illuminate or deceive or simply confuse. It has existed since long before the Dahan arrived, bearing dreams to those few Spirits which receive them from without, but there is little question that its nature changed - and enlarged - once humanity began living on Spirit Island. Some speculate that it is related to those which prey upon the not-yet-departed souls of the dead, though others counter that it does not seem to feed off dreams, merely carry them.
    \n\nEven amongst other Spirits, it communicates almost entirely through the touch of dreams, either by manifesting in some form suitable to the dreamscape, or by taking a few moments of its mind-to-mind contact for more direct - if often no less cryptic - communication. Spirits are generally better able than humans to retain these fleeting memories, though humans sometimes help interpret a vexing conversation for some Spirit poorly suited to nuanced interpretation.
    \n\nBringer of Dreams & Nightmares is a spirit of nighttime mindscapes for humans, beasts, and those Spirits which dream. It has both kindly and fearsome aspects, but since the Invaders arrived has worn only the latter. Its powers are fundamentally over the mind and perception - it has extreme difficulty doing any direct, real harm; its Powers instead cause the Invaders to believe that they have been harmed. These mass hallucinations breed more fear than if they had been real. (High complexity.)`,

    setup: `Put 2 PRESENCE on your starting board in the highest-numbered Sands.`,

    playStyle: `With most Spirits, Terror Victories are a backup plan if the main push against the Invaders stalls out for too long, but Bringer turns Fear into a more viable primary strategy. Its transformation of damage & destruction into Fear can turn Major Powers into tremendous sources of terror and panic. However, the only real offense Bringer has is the Dahan fighting back. While it does have some defensive ability, it is fundamentally poor at clearing areas of Invaders.`,

    specialRules: [
      {
        title: "TO DREAM A THOUSAND DEATHS",
        description: `Your Powers never cause Damage, nor can they Destroy anything other than your own PRESENCE.
        \n\nWhen your Powers would Destroy (or deal enough Damage to Destroy) EXPLORER/TOWN/CITY, instead generate 0/2/5 FEAR. The Power Pushes all EXPLORER/TOWN it would Destroy.
        \n\nNotes: A single Power cannot Destroy a given Invader more than once. Powers that cause Damage via DAHAN are affected just like all others. All effects other than Damage/Destroy work as usual.`,
      },
    ],
    summaryOfPowers: [
      { offense: 1, control: 2, fear: 5, defense: 2, utility: 2 },
    ],
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

    bio: `A traveling Spirit of movement and movement's deep power, circling a bright leap of flame, dancing atop dark mysteries of night and earth. It roams the island as its visions and will to motion bid, dancing with and among whomever it finds: the waves on the shore, the animals of the jungle, the Spirits, the trees, the Dahan, and - especially - the earth itself.
    \n\nThe Dahan learned long ago that if the land-dancer was aware of them, village-wrecking earthquakes became much rarer. Through this, they found that many Spirits appreciate - and gain power from - various patterns of dance and rhythm, in addition to those of line, shape, and word.`,

    designLore: `Dances Up Earthquakes is a Spirit of rhythm, inexorable crescendo, and the earthquake - a sudden unleashing of ground-shaking energy. It is patient, but nearly always in motion; it exults in movement, movement grounded in the earth, but so powerful that eventually the earth itself also moves to the dance, becomes a dancer partnered with Dances Up Earthquakes.
    \n\nThe earth is hardly the only thing it dances with: it will dance with the swaying trees, with the pounding ebb and flow of the surf, with the flickering flames of a wildfire, with humans who shuffle and stomp leap to the beat of drums and hands. It may leap atop a cliff's edge as gulls cry overhead, or pound across sand dunes under starlight. But the living earth and stone beneath seem to be the partner it circles back to, time and again.
    \n\nIt is rarely not dancing.
    \n\nThe Dahan observed long ago that where it went, earthquakes tended to follow - but that if it was dancing with things upon the earth that its devastation rarely touched the area. (It would be a poor dancer that harmed its partner or bowled them over, and Dances Up Earthquakes does not dance poorly.) So if it approaches one of their villages it is made welcome; if it is observed nearby then fires are lit and a dance started in hopes of attracting it - and if that does not work, preparations are made equally swiftly for the quake which will quite likely follow.
    \n\nDancing with it is exhilarating, wild, and exhausting; a physical meditation of motion where nature is experienced-but-not-contemplated as movement drives out conscious thought. Its presence may allow humans dancing with it to surpass their usual limits of endurance and grace, though even so, no flesh-and-blood being can hope to match it for sheer indefatigability.
    \n\nIt does not (or will not) command others to the dance, only inspire them. It has tried to dance with the Invaders, multiple times, and has found that as more of them gather together, the less they heed the call to motion. After being fired upon by guns as it approached an Invader City, it has decided that they no longer belong in the dance here.
    \n\nIt has a much more nuanced view of what may be meant by "dancing" than many Spirits (or Dahan) might realize. Even though most of its dancing is the direct, individual, physical sort, it sees greater dances in all aspects of life. There's a story among the Dahan about a time it was found standing perfectly still, limbs outstretched, speaking, and making a dance of its words and its stillness, with the same sense of timing and grace and rhythm and crescendo that it usually has for the physical. The story may or may not have actually happened, but it rings true to the Spirit's nature.`,

    setup: `Put 1 PRESENCE on your starting board in the highest-numbered land with DAHAN.
    \n\nYou start with your 6 Unique Power Cards and 0 Energy. Set the Quake Tokens (QUAKE) nearby.`,

    playStyle: `Very much about tempo and timing: Can play high-cost Powers extremely easily, but they won't take effect until later in the game. Faces a constant tension between solving problems now and carefully planning ahead for big turns in the future - neglecting either one can be disastrous.
    \n\nDespite starting with 6 Unique Powers, benefits greatly from gaining more.`,
    specialRules: [
      {
        title: "BEGIN A DANCE OF DECADES",
        description: `Whenever you would play a Power Card, you may instead pay any amount of Energy onto the card to make it an impending card (IMPENDING), setting it aside out of play for use on a future turn. (It doesn't provide Elements. It's still your Power Card, so it can be forgotten while it's impending.)`,
      },
      {
        title: "RHYTHMIC POWER BUILDS TO A CATACLYSMIC CRESCENDO",
        description: `When you gain Energy from your Presence Track, also gain Energy onto each Power Card made IMPENDING on a previous turn. If any IMPENDING now have Energy on them at least equal to their cost, discard that Energy and play them. (This costs no card plays.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 5, control: 2, fear: 2, defense: 3, utility: 4 },
    ],
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
            description: `1 FEAR. In any number of lands with QUAKE: 2 Damage per QUAKE, to TOWN/CITY 
              only. Remove 1 QUAKE.`,
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

    bio: `Long ago, the being which would become Devouring Teeth Lurk Underfood was a small, territorial Spirit of the sand-by-water. It waited patiently for small prey to approach, then frightened them towards its waiting maw; when fresh prey was scarce it would scavenge.
    \n\nMost such Spirits stay tiny, but this one happened to take a bite out of Ember-Eyed Behemoth. It slowly grew larger and more mobile, slithering below the land's surface in a way impossible for normal animals.
    \n\nIt has learned to avoid conflict with the Dahan, who grew wise to its ways long ago, and has even formed a peace of sorts with them. The Invaders do not have that benefit.`,

    designLore: ``,

    setup: `Put 1 PRESENCE on your starting board, in land #5.
    \n\nYou start with your 4 Unique Power Cards and 0 Energy.`,

    playStyle: `Likes being in the same lands as Invaders, so it can use Range 0 offensive and defensive Powers. The first tier of its Innate Power can give some mobility, if needed.
    \n\nHas a poor Plays track and potent but expensive Unique Powers, so can be better at handling fewer large threats than lots of little ones.`,
    specialRules: [
      {
        title: "TERRITORIAL AGGRESSION",
        description: `Your Damage-Dealing Powers do +1 Damage.
        \n\n(This adds +1 Damage total for the Power, even if the Power Damages multiple 
        Invaders or "each Invader". It can boost Minor/Major Power Cards, too, not just 
        your Uniques + Innate.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 5, control: 2, fear: 2, defense: 1, utility: 1 },
    ],
    innatePowers: [
      {
        name: "DEATH APPROACHES FROM BENEATH THE SURFACE",
        speed: "SLOW",
        range: "RANGE 1",
        target: "Invaders",
        thresholds: [
          {
            elements: { fire: 1, animal: 1 },
            description: `If you don't have PRESENCE in target land, Gather 1 of your 
              PRESENCE. (This is required.)`,
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

    bio: `The deluge. As the Dahan say, "When the very air turns to water and the sound of rainfall drowns out all but the loudest of thunder, at that moment when it could not conceivably pour any more - and then suddenly, impossibly, it is raining twice as much - that is the downpour."
    \n\nA Spirit of the high skies bridging to the earth below with a cascading torrent of water, rain blowing on the wind and soaking the ground. Flies back and forth across the boundary between water which brings life and growth, and water which overwhelms everything save the plants and soil entwined in each other's protection.`,

    designLore: `Spirit Island has a dry season and a wet season, but those descriptions are very broad. The wet season brings more frequent and heavier rains, but it doesn't pour constantly - the skies do clear from time to time. And specific areas of the island have their own local variations in climate and rainfall.
    \n\nSome variation also comes from the travels of Downpour Drenches the World, which flies across Spirit Island (and sometimes beyond), settling down in one place or another for days or weeks. It is, for the most part, a content Spirit. rolling around in the greenery and nosing rain-glossed leaves aside to see what might be growing beneath. Wherever it goes, there is rain, for it is rain: an ongoing pouring from the heavens, sometimes light and sometimes heavy, but never stopping. During its stay, the ground grows muddy, plants explode into verdancy, and many Dahan among those-who-stay spend a great deal of time in a common-lodge, cooking and crafting and telling stories while watching the downpour through the lodge's open sides. If those-who-travel are caught out near Downpour Drenches the World, they sigh and make the best of a wet situation - its rains may cause inconvenience and discomfort to travelers, or force them to take different paths, but usually don't make journeying outright impossible.
    \n\nUsually.
    \n\nSometimes, the rains grow torrential for days at a time rather than minutes. Riverbeds flood, cleared ground erodes, and the ground turns to vast reaches of impassable mud. A Dahan proverb cautions against sleeping on one's back in such weather, lest one drown. Spirit-speakers have learned that the rains seem to match the mood of Downpour Drenches the World - when it's agitated, winds will gust and blow every which way; when it's angry the rains will wear away at soil more rapidly - but do not yet understand its mood during these times of heaviest rain. Those who have braved the deluge to seek it out at such times have found it standing high with both heads pointed the same direction, relaxed but focusing intently on something distant, or unseen, or all around, heedless of questions shouted up through the rain.
    \n\nDownpour Drenches the World paid little heed to the Invaders at first, but has been seeing more and more cleared land as it flies on its journeys. It brings rain to the Invaders' crops just as much as any other plants - that's in its nature - but finds no joy in rolling around their ranked and serried fields, and its contented nature is slowly giving way to a fierce resentment.`,

    setup: `Put 1 PRESENCE on your starting board in the lowest-numbered Wetlands.`,

    playStyle: `Cares about the question "How useful is this Power in the current context?" even more than most Spirits; it rarely plays all its Power Cards in any given Reclaim cycle (some get discarded to Growth), and for those it does play, it often has the option of using them multiple times.
    \n\nBenefits even more than most Spirits from having lots of Presence on the board, both for Rain and Mud Suppress Conflict and to facilitate its Unique Powers (by making more lands Wetlands).`,
    specialRules: [
      {
        title: "DRENCH THE LANDSCAPE",
        description: `Spirit Actions and Special Rules treat your SACRED SITE as 
        Wetlands in addition to the printed terrain.`,
      },
      {
        title: "POUR DOWN POWER ACROSS THE ISLAND",
        description: `For each 2 WATER you have, during the FAST/SLOW phase you may either:
        \n• Gain 1 Energy; or
        \n• Repeat a land-targeting Power Card by paying its cost again. (It need not target the same land.)
        \n\nUse scenario markers or spare game pieces to track uses of this rule. (Max 5 times per turn, no matter how much WATER you have.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 2, control: 3, fear: 1, defense: 5, utility: 3 },
    ],
    innatePowers: [
      {
        name: "Rain and Mud Suppress Conflict",
        speed: "FAST",
        range: "NONE",
        target: "Yourself",
        thresholds: [
          {
            elements: { air: 1, water: 3 },
            description: `Each of your PRESENCE grants Defend 1 and lowers DAHAN counterattack damage 
              by 1. (Total, in its land.)`,
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
            description: `Gain 1 Energy. You may remove 1 BLIGHT by removing one of your PRESENCE 
              (from target land).`,
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

    bio: `Amidst the boggier jungles, one might find a tree-covered hill - somewhat rocky - rising upwards from the dank and the damp. One might climb it to scout the lay of the land, or camp there for respite from the water-snakes and warm muck below.
    \n\nBut do not settle there, nor quarry that stone, for the hill is a Spirit, immense and incarnate. It might be a living scale of the great Serpent; or a dream given waking form; or a Spirit wrapped around a great curse, enfolding it and containing it from spilling outwards. If you bother it, fire will kindle in its eyes, and it will rise and smash its way across the landscape.`,

    designLore: `Spirit Island has innumerable hills, crags, ridges, and mountains. A fair number of them have Spirits - or more precisely, are Spirits: the natural feature and the Spirit are the same thing. And over time, some of those Spirits have grown to encompass more places than the natural feature from which they first arose, just as the Spirits you play in Spirit Island spread Presence across the land, growing greater than they began.
    \n\nHowever, most of those innumerable hills, crags, and mountains - even the ones with Spirits - don't get up and walk around.
    \n\nEmber-Eyed Behemoth is one of the exceptions, and one to be careful of. Most of the time, it chills out in the wetlands, letting the water wash over it and nourish the plants that grow upon it. But if it's angered, it rouses and goes on a rampage across the land, smashing anything that annoys it.
    \n\n(The Dahan term translated as “Behemoth” means something like “Moving-Mountain”, though with “Mountain” specifically referring to “verdant rise supporting plant life”, not “lifeless crag of rock”. While Dahan will often use longer names for dangerous Spirits in order to be more formal and avoid antagonizing them, they don't bother here: when it's relaxed, it doesn't really care if you're formal, and when it's rampaging, it's not even listening to you anyway.)
    \n\nDevouring Teeth Lurk Underfoot (from Horizons of Spirit Island) is a partial child of Ember-Eyed Behemoth, as referenced in its lore - which may seem something of a trick, given that Devouring Teeth is on a different islet from where Behemoth's Incarna currently resides! But any Spirit with long enough reach can usually find a way to cross such a stretch of distance, so long as there are no metaphysical obstacles, and Ember-Eyed Behemoth certainly isn't one to be stopped by a bit of ocean. (In game terms, either Spirit could cross to another islet in an Archipelago, as all playable Spirits can.)`,

    setup: `Put 2 PRESENCE and EMBER-EYED BEHEMOTH, Unempowered (UNEMPOWERED) side up, in the highest-numbered Wetland on your starting board that is adjacent to any Jungle.
    \n\nYou start with your 4 Unique Power Cards and 0 Energy.`,

    playStyle: `Slowly but consistently stomps its Incarna around the island, smashing invaders. (Dahan can keep clear, unless it really gets going.)
    \n\nBenefits from spread-out Sacred Site, both for targeting Powers and for moving its Incarna long distances. Adding Presence at its Incarna (which can count as Presence) can make it easier to get Presence into new lands, particularly non-Jungles.`,
    specialRules: [
      {
        title: "THE BEHEMOTH RISES",
        description: `You have an Incarna (EMBER-EYED BEHEMOTH). Once per turn, during the Spirit, FAST, or SLOW phase, you may either:
          \n• Push EMBER-EYED BEHEMOTH; or
          \n• Add or Move EMBER-EYED BEHEMOTH to any of your SACRED SITE on the island.`,
      },
      {
        title: "UNRELENTING STRIDES",
        description: `On any turn that you don't use Innate Powers, you may use The Behemoth Rises an additional time. (When you use an Innate Power, cover this Special Rule with a Reminder Marker; when you use this Special Rule, cover your Innate Power.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 5, control: 1, fear: 1, defense: 1, utility: 2 },
    ],
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
        special: `If EMBER-EYED BEHEMOTH is Empowered, you may Repeat this Power once each turn. (You may take other Actions before Repeating, including The Behemoth Rises.)`,
      },
    ],
  },

  "Eyes Watch from the Trees": {
    thumbnail: "Eyes_Watch_from_the_Trees.png",
    complexity: "low",

    bio: `Even after centuries, the Dahan find many things about Eyes Watch From the Trees somewhat enigmatic. Is it a Spirit of the trees themselves, or a Spirit which inhabits trees as its home? Is it one Spirit, or many, or a sort of collective-Spirit?
    \n\nDespite these uncertainties, most Dahan trust the Spirit: it warns of danger, helps those lost or injured in the forest, and only works mischief on aggressors and the arrogant. Back in the days of the First Reckoning, its faint whispers were a source of dread, but to current generations they're a familiar and expected part of the island.`,

    designLore: ``,

    setup: `Put 2 Presence on your starting board, in the highest-numbered Jungle.
    \n\nYou start with your 4 Unique Powers and 0 Energy.`,

    playStyle: `Good at Defending against Ravages, and at steadily earning FEAR.
    \n\nIts ability to Gather DAHAN to fight back when Defending can make a huge difference, changing a stalling tactic into a blow against the Invaders.`,

    specialRules: [
      {
        title: "Dahan Trust the Watchers",
        description: `After one of your Powers adds Defend to a single land, Gather up to 1 Dahan into that land.
        \n\n("Power" includes both your Innate Power and your Power Cards. Can be used with any number of Defend Powers each turn.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 2, control: 3, fear: 4, defense: 5, utility: 1 },
    ],
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
        specialNote: `(This is all one Power, so your Special Rule 'DAHAN Trust the Watchers' 
          can Gather only 1 DAHAN.)`,
      },
    ],
  },

  "Fathomless Mud of the Swamp": {
    thumbnail: "Fathomless_Mud_of_the_Swamp.png",
    complexity: "low",

    bio: `The Island has many swampy deltas along its coasts. Some are fairly navigatable, while others are mazes of murky water, tangled trees, and land that isn't nearly so solid as it appears. Fathomless Mud of the Swamp is one of these latter sorts, with a penchant for spreading - it likes getting everywhere, slowly turning solid ground into muck and mire.
    \n\nSome Dahan villages have struck fruitful bargains with it: easy passage and useful plants in exchange for tasks more easily done by human hands. Most, however, will move on to new living-grounds years early should they notice the sodden signs of it moving into their area.`,

    designLore: ``,

    setup: `Put 2 PRESENCE on your starting board, in the lowest-numbered Wetland.    \n\nYou start with your 4 Unique Powers and 0 Energy.`,

    playStyle: `Likes having SACRED SITE where Invaders will Build, but may need to re-create those SACRED SITE after oozing outwards with its Innate Power. In smaller games, might be able to cut off the most Inland lands from Explore actions by Destroying Inland TOWN/CITY and stopping new ones from being built.
    \n\nCauses a fair bit of Fear, much of which represents unpleasantness, hardship, and disgust.`,

    specialRules: [
      {
        title: "OFFER NO FIRM FOUNDATIONS",
        description: `At your Sacred Site, Build actions add Explorer instead of Town/City.`,
      },
    ],
    summaryOfPowers: [
      { offense: 3, control: 2, fear: 3, defense: 3, utility: 2 },
    ],
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

    bio: `Finder of Paths Unseen is well known to the Dahan: it traverses the island with ease, and most spirit-speakers have met it at least once or twice. It communicates more straightforwardly than most Spirits, layering thought-sendings over its high-pitched trills. And it - or its assistants - sometimes help soulforms of dead Dahan move swiftly on, eluding those Spirits that seek to devour them.
    \n\nIt is almost commonplace... but also deeply enigmatic, even to those clans who call it Pathfinder. Does it locate paths, or make them? Is the other-space it moves through a realm, or a state of being? While it is occasionally willing to answer, its thoughts do not always translate well to words.`,

    designLore: `Finder of Paths Unseen is a Spirit of ways and paths, travelers and journeys, places and boundaries. The paths they travel seem to exist in another realm that weaves through and around our world - or perhaps this is just a trick of perspective, and it's simply our world interacted with in a different way. Regardless, Finder of Paths Unseen interacts with place and way and journey in ways even most Spirits cannot.
    \n\nThey have good relations with the Dahan, some of whom are close enough to them to simply call them Pathmaker, rather than their more formal title-name. (Whether they “make” or “find” paths - or “uncover”, “open”, “enable”, or “empower” them - is something nobody can quite say; all those words are in good measure correct, but none of them exactly right.) Some older spirit-speakers acting as mentors or teachers will walk its paths with their students, reaching places on the far side of the island for an afternoon's studies or conversation rather than having to make a trip of months or longer. This isn't done trivially: the patterns that best please Pathmaker tend to be intricate and (from a human perspective) spread out piecemeal over miles, rather than a simple sketch scribed in beach-sand or ash. But given an excuse, they're happy to help individuals and small groups; they may be enigmatic in some ways, but their nature is clearly not merely of paths, but of those paths' travel (or forbiddance).
    \n\nFinder of Paths Unseen is also an occasional psychopomp, helping Dahan soulforms move on promptly to wherever / whatever happens next. (The Dahan have been told by Spirits that yes, when a human dies, a non-physical portion of them continues to exist, at least for a little while. Then it becomes absent - not destroyed, simply “no longer there” - which the Dahan interpret as something roughly like “go somewhere else”. A handful of Spirits can - and occasionally do - prey on those soulforms, should they encounter them, and a number of Dahan death customs originate from the desire to misdirect or deceive these Spirits, just in case.) The Dahan consider hummingbirds in general as potential helpers of Pathmaker: some spirits associated with them and their realm appear as such, and even the physical birds may have some connection.`,

    setup: `Put 1 PRESENCE on your starting board in land #3. Put 1 PRESENCE on any board in land #1. 
    \n\nNote that you have 6 Unique Power Cards.`,

    playStyle: `All about moving the Invaders - and DAHAN/PRESENCE/BEASTS from time to time. Good at creating Invader-free "safe-zones," due to its many movement Powers and its capacity to Isolate. Can't afford to Destroy Invaders too often without a way to re-add Destroyed PRESENCE, so either needs a big-hammer Major Power or to rely on its teammates for offense.
    \n\nChanges the topology of the board, which increases complexity for all players - particularly in larger games!`,

    specialRules: [
      {
        title: "RESPONSIBILITIES TO THE DEAD",
        description: `After one of your Actions Destroys 1 or more DAHAN/Invaders, or directly triggers their Destruction by moving them, Destroy 1 of your PRESENCE and lose 1 Energy. If you have no Energy to lose, Destroy another PRESENCE.`,
      },
      {
        title: "OPEN THE WAYS",
        description: `You may make up to two of your lands adjacent at a time. You may change which lands are adjacent once between Actions.`,
      },
    ],
    summaryOfPowers: [
      { offense: 0, control: 5, fear: 1, defense: 1, utility: 2 },
    ],
    innatePowers: [
      {
        name: "LAY PATHS THEY CANNOT HELP BUT WALK",
        speed: "FAST",
        range: "RANGE 0",
        target: "Any",
        thresholds: [
          {
            elements: { moon: 2, air: 2 },
            description: `Push up to half (rounded down) of invaders from target land. Do likewise for DAHAN, PRESENCE, and BEASTS (each separately).`,
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

    bio: `The sun and moon are short-term timekeepers of Spirit Island, measuring days and months with their rise and set, wax and wane. When they meet in a solar eclipse, time collides with time, sending jagged pieces of Was, Will-Be, and Might-Have-Been tearing through the weave of seasons and years. Gleaming vision-shards of future or past events may shimmer across the sky, but often those futures or pasts do not match what others know.
    \n\nFractured Days Split the Sky exists mostly in the high reaches of the heavens, but touches the island now and then, time and possibility flowing around it like a wind-blown mantle.`,

    designLore: `Spirits do not perceive time as humans do - see the recent update about Shifting Memory of Ages for one example - but there is still a certain orderliness to it. Days follow nights follow days, seasons follow seasons, years follow years, and if some events are unmoored in exactly when they happened, it is more that the structure is looser than human minds conceive, not that it lacks structure at all.
    \n\nFractured Days Split the Sky is a hammerblow to that structure, the periodic collision of sun and moon overhead. Or it might be the edges of Time, where the usual order cracks and splinters into pieces hanging out over the void. Or perhaps it is simply the eclipse itself, which by virtue of its nature wears Time around itself like a jagged cloak - few Spirits and no humans have the discernment to distinguish between these stories, and in the nature of Spirits and stories, they may all be true and untrue at the same time.
    \n\nWhat is certain is that on Spirit Island, when a solar eclipse darkens the sky, fragmentary visions of past and future and present may appear in the air, ghostly but clear. Frequently, the visions are not of the past or future or present that those witnessing it know.
    \n\n(Fractured Days Split the Sky is not, for the most part, a spirit of visions - these sights that swirl around it carry no unusual wisdom or import, and may be irrelevant - or outright deceptive - to the past-present-future in which the observer exists. If it focuses, it can feel out which fragments of future correspond to a particular present, but the very act of doing so tends to jostle the future about and make it less certain.)
    \n\nIt is a celestial Spirit, somewhat remote and not especially accessible the way that, say, a river-spirit or earth-spirit can be. It's capable of piecing together a humanoid puppet-form if it wishes to communicate with the strange scurrying upright-animal-things far below, but even this form made expressly for contact with humans is difficult for spirit-speakers to interact with; it conveys jumbles of sensory impressions from moments that never actually happened, or haven't happened yet, a little bit like a modern human might piece together a paragraph by cutting out words from newspaper articles.
    \n\nBut celestial or not, it is connected to Spirit Island by ancient ties between land and sky. Both the island and this connection are threatened by the Invaders, so if an eclipse has happened recently enough for it to be present in strength, it will resist.`,

    setup: `Put 3 PRESENCE on your starting board: 1 in the lowest-numbered land with 1 DAHAN, and 2 in the highest-numbered land without DAHAN. Deal 4 Minor and Major Powers face-up as your initial Days That Never Were cards; in a 1 or 2-player game, instead deal 6 of each. In a 1-board game, gain 1 Time.`,

    playStyle: `Excellent at support and sweeping indirect effects, but starts off very limited otherwise. Several of its Unique Powers need setup to use well; it's entirely possible 1 or 2 of them may see no play in a given game.
    \n\nHas a hard time getting lots of PRESENCE onto the board. This can make targeting tricky, and may be quite dangerous if a Blighted Island effect Destroys PRESENCE.`,
    specialRules: [
      {
        title: "FRAGMENTS OF SHATTERED TIME",
        description: `Each PRESENCE on this ability represents 1 Time. Many of your Powers require Time as an additional cost. Spend it when you Resolve the Power. (Not when you play it.)
        \n\nWhen you Gain 1 Time, put 1 of your PRESENCE here from your PRESENCE track (or, optionally, the island). When you Spend 1 Time, return it to a PRESENCE track - or if you have no free spaces, Destroy it.`,
      },
      {
        title: "DAYS THAT NEVER WERE",
        description: `Your 3rd Growth option lets you gain any one Power Card from a special set you create during Setup. When you gain a Power Card any other way, you may add one unchosen card to this set.`,
      },
    ],
    summaryOfPowers: [
      { offense: 1, control: 2, fear: 1, defense: 3, utility: 5 },
    ],
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
            description: `Target Spirit may Reclaim 1 Power Card from their discarded or played 
              cards. (If they Reclaim a card from play, they lose its Elements.)`,
          },
          {
            elements: { sun: 3, air: 2 },
            description:
              "Target Spirit may play a Power Card by paying its cost.",
          },
        ],
        special: `You may use this Power any number of times. Cost to Use: 1 Time per 
          previous use this turn.`,
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

    bio: `There are many trickster Spirits, but this one is the most infamous due to its part in instigating the Second Great Reckoning between the Dahan and the Spirits. It wears any form it pleases - perhaps a tree, perhaps a canoe, perhaps a prominent clan-chief - but can always be distinguished by its multitude of eyes, though they may be subtle or concealed.
    \n\nDespite its knack for stirring up trouble, it's neither unfriendly nor motivated by malice - it just has a driving curiosity to see what will happen when it messes around with things. Of course, this may involve putting Spirits, people, and animals alike into suddenly precarious situations, so the Dahan appreciate its shenanigans best at a healthy distance.`,

    designLore: `Trickery, misdirection, and curiosity are all common in nature, and so there are Spirits which partake of those things to a greater or lesser extent. The urge to try things for onesself and a “let's poke the anthill and see what will happen!” attitude also exist in nature... and are particularly prevalent among humans. The being now known as Grinning Trickster Stirs Up Trouble was one of those Spirits who found the arrival of the Dahan fascinating, and over many centuries its nature has shifted somewhat in response.
    \n\nIt's generally friendly, and fairly congenial - but even in the days before it became infamous, the Dahan learned that “friendly” was no guarantee that it wouldn't, say, hide a tiger inside your house. Not out of any malice, but because it would be fun to see how the whole ridiculous (and incidentally deadly) situation would unfold.
    \n\nIt became infamous by touching off the Second Reckoning, the second great clash between Dahan and Spirits. It did this by telling the absolute truth in the worst manner possible, throwing the (admittedly already tense) situation straight into outright conflict. (Nobody is quite sure whether it intended such a huge blow-up; it claims not to remember.)
    \n\nIt's been involved in all sorts of adventures and misadventures since - its life is nothing if not eventful - but nothing quite so large-scale as the arrival of the Invaders! (Well, except for that time with the cave? And maybe that other thing with the Sky Serpent. Or…)`,

    setup: `Put 2 PRESENCE on your starting board: 1 in the highest-numbered land with DAHAN, and 1 in land #4.`,

    playStyle: `Requires some comfort with risk: both Overenthusiastic Arson and Let's See What Will Happen involve uncertainty about how the Fast Powers phase will pan out.
    \n\nCan be effective from the get-go, but benefits greatly from not working too hard, instead improving its capacity for mischief by adding PRESENCE and gaining Power Cards. Bonus Energy from Let's See What Will Happen can be extremely helpful in avoiding the distraction of gaining Energy elsewhere.`,

    specialRules: [
      {
        title: "A REAL FLAIR FOR DISCORD",
        description: `After one of your Powers adds STRIFE in a land, you may pay 1 Energy to add 1 STRIFE within 1
Range of that land.`,
      },
      {
        title: "CLEANING UP MESSES IS A DRAG",
        description: `After one of your Powers Removes BLIGHT, Destroy 1 of your PRESENCE. Ignore this rule for Let's See What Happens.`,
      },
    ],
    summaryOfPowers: [
      { offense: 1, control: 2, fear: 5, defense: 2, utility: 2 },
    ],
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

    bio: `A spirit of natural destruction... and renewal after destruction, though those whose lands have been scoured by flame don't usually much appreciate the latter. Thrives near human habitations, glorying in their fires and sparks, but has existed on the island since long before the Dahan arrived, a child of the Volcano and the Green.
    \n\nThe Wildfire is a long-standing friend of the Dahan: the early slash-and-burn agriculture which turned most Spirits against them gave it the best decades it had had in centuries. It later supported the Dahan during the Second Reckoning, backing their threats of reprisal. It doesn't interact with the Dahan often these years, but spares their villages as best it can, and fights the Invaders in large part for them.`,

    designLore: `Burning, blazing, rising, consuming - Heart of the Wildfire is quite fond of humans, in a general sense: they keep hearths and use fire as a tool all the time, and those sparks give birth to so many lovely conflagrations! It is the nature of Spirits to be true to what they are, so even though Wildfire knows on some level that too much fire is bad for the land, it just doesn't think about that aspect of things very much. It is also, after all, a spirit of renewal after the blaze, so it implicitly assumes that everything will regrow eventually. (Its strong ties to A Spread of Rampant Green probably contribute to this point of view.)
    \n\nIt fights the Invaders partly due to the exhortations of other Spirits, but more for the sake of the Dahan, as it's become clear that the Invaders have no compunctions about putting them to the sword. (The Dahan and it have a long and storied history together, beginning with the very first Dahan settlements.) It is also, it should be said, somewhat gleeful over the chance to really cut loose without the other Spirits getting all riled up and putting out its firestorms.`,

    setup: `Put 3 PRESENCE and 2 BLIGHT on your starting board in the highest-numbered Sands. (BLIGHT comes from the box, not the Blight Card)`,

    playStyle: `Starts with good offense and gets better from there, but lays down Blight as it grows. The smaller the game, the more restraint is needed to prevent tipping the island over into being completely Blighted. The Wildfire can heal the land where it is, but may benefit from other Blight removal Powers so it can add Presence to problem lands without triggering Blight cascade. Removing Blight from its own lands limits its "Firestorm" innate power, however.
    \n\nIn the Reprint, the complexity was changed from Moderate to High`,
    specialRules: [
      {
        title: "BLAZING PRESENCE",
        description: `Post-Setup, after your PRESENCE is added/moved, in the land it goes to:
        \n\n• For each FIRE showing on your PRESENCE Tracks, do 1 Damage.
        \n• If 2 FIRE or more are showing on your PRESENCE Tracks, add 1 BLIGHT.
        \n• Push all BEASTS and any number of DAHAN.
        \n\nIf you add multiple PRESENCE into a land at the same time, only do the above effects once.`,
      },
      {
        title: "DESTRUCTIVE NATURE",
        description: `BLIGHT added due to Spirit effects (Powers, Special Rules, Scenario-based Rituals, etc) does not destroy your PRESENCE. (This includes cascades.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 5, control: 3, fear: 4, defense: 1, utility: 2 },
    ],
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

    bio: `Hearth-Vigil is a Spirit of neither fire nor cooking - it is a watcher and guardian, a protector who keeps vigil over common-hearths. In the dry season, it smothers rogue blazes; in the wet season, it fortifies the health of older Dahan suffering from wheezelung; in all season, it intensifies the hearth's powers of wellness and community-strength. It's friendly to speak to, though most grown Dahan don't usually distract it without cause.
    \n\nHistorically, its aid was first sought during the bloody conflicts of the Servant Cults, due to the threat of mass poisonings. As those agreements affected its nature, it became able to offer more than simple vigilance.`,

    designLore: `A game of Spirit Island does not open at the very instant the Invaders show up: the first tall ship landed at the island around 8 to 10 years before game start, the first colonists arrived maybe 4 to 6 years back. The opening acts of the eventual conflict are presumed to play out similarly each time, so are left invisible: the initial settlements, the Dahan reaching out to the colonizers, the Invaders failing to heed Dahan warnings about proper behavior, the first Blight, larger Spirits being caught by surprise at the speed of the Invaders… and Invader-borne diseases ripping through the interconnected Dahan population.
    \n\nIt is horrifying that the mortality rate among the Dahan - around 20 to 30 percent - is substantially less than what was historically suffered by many Indigenous communities in the face of such pathogenic onslaughts. Most Dahan communities benefited from close relationships with some smaller Spirits able to provide quick palliative assistance, and perhaps blunt the severity of an illness.
    \n\nHowever, most Spirits capable of more dramatic aid were unable to react in time or to bring their full power to bear - events unfolded extremely quickly, from their perspective, and these illnesses were novel, unfamiliar.
    \n\nHearth-Vigil, however, was able to help a great deal more, being a Spirit both of vigilance and of health, already existing among the Dahan. Communities with a close relationship to Hearth-Vigil are accustomed to bringing their ill or poisoned to it for aid, and this allowed many to survive who otherwise would not have.
    \n\n(A side note on language: Spirit names attempt to capture feel in addition to literal meaning. “Hearth” is the closest English word in meaning + connotation to the Dahan word for the shared communal space around common pit ovens over which Hearth-Vigil watches - just like Shroud of Silent Mist uses “shroud” due to its connotations in the English language, even though the Dahan don't generally use burial-shrouds and their name for the Spirit doesn't reference fabric at all.)`,

    setup: `Put 3 PRESENCE on your starting board: 1 in the highest-numbered land with DAHAN and 2 in the lowest-numbered land with at least 2 DAHAN. Add 1 DAHAN in each of those lands (additional survivors of the Invaders' diseases).
    \n\nYou start with your 4 Unique Power Cards and 1 Energy.`,

    playStyle: `Very good at protecting DAHAN in its lands, not so great at stopping BLIGHT. In keeping with its nature, largely brings DAHAN to its PRESENCE (or vice versa); getting DAHAN elsewhere may require a bit of forethought with Keep Watch for New Incursions.
    \n\nVery reactive, with reliable ways to deal with Invaders as they Ravage and Build, but has trouble handling established CITY that aren't Ravaging.`,

    specialRules: [
      {
        title: "ROOTED IN THE COMMUNITY",
        description: `BLIGHT added in your lands does not Destroy your PRESENCE if DAHAN are present. (Ravage Actions Destroy DAHAN before added BLIGHT destroys PRESENCE and cascades.)`,
      },
      {
        title: "FORTIFY HEART AND HEARTH",
        description: `DAHAN have +4 Health (each) while in your lands. Event and Blight Card Actions don't damage, destroy, or replace DAHAN in your lands. (Ravages are not Event Actions even if caused by Events.)`,
      },
      {
        title: "LOYAL GUARDIAN",
        description: `When all DAHAN leave one of your lands, your PRESENCE may Move with those DAHAN. (Each DAHAN can Bring any number of PRESENCE.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 3, control: 1, fear: 2, defense: 4, utility: 4 },
    ],
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

    bio: `Spread throughout Spirit Island are pockets of deep wilderness, untouched by human hands. A few have a spirit of sanctity about them. The leaves there whisper words of forbiddance, of warnings, of wrath for those who trespass. The Dahan know how to listen, and stay well away.
    \n\nA few spirit-seekers claim that these wild-spirits (powerful as they are) are merely custodians and wardens for other more powerful, spirits of ancient trees and deep roots who wake neither frequently nor easily. Nobody much cares to test the truth of the matter.`,

    designLore: `Keeper of the Forbidden Wilds is a guardian-spirit, charged with maintaining the sanctity of the deepest wilds of Spirit Island. It serves spirits of deep root and ancient branch which foresaw the need for a more energetic guardian, being immensely slow in their age and great power. It takes its charge with unnerving seriousness, and the Dahan have learned that no matter how carefully they respect the land, raising their roof-poles too close to its domains will result in retribution: its charge is to prevent trespass, even if well-intentioned or scrupulously polite.`,

    setup: `Put 1 PRESENCE and 1 WILDS on your starting board in the highest-numbered Jungle.`,

    playStyle: `A slowly growing wall - expanding can sometimes be difficult, but the Invaders will have an equally difficult time penetrating wherever the Keeper plants itself.
    \n\nIn larger games, it may be useful to spread to one of the two far-distant lands early on, to have multiple points from which to slowly grow.`,

    specialRules: [
      {
        title: "FORBIDDEN GROUND",
        description: `After you create a SACRED SITE, Push all DAHAN from that land. Dahan Events never move DAHAN to your SACRED SITE, but Powers can do so.`,
      },
    ],
    summaryOfPowers: [
      { offense: 5, control: 2, fear: 1, defense: 4, utility: 3 },
    ],
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
            description: "+1 Damage per SUNPLANT you have.",
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

    bio: `The child of a passing storm-spirit, Lightning's Swift Strike danced off the shores of the island many ages ago, and liked it enough to stay. It spends much of its time resting and quiet, waking up to dance through the sky when the winds blow strong.
    \n\nIt only concerns itself occasionally with the Dahan, usually appearing out of nowhere to send them off on some obscure errand. The Dahan cooperate - partly out of wary respect for Lightning's power, but as much for the sake of the Thunderspeaker - Lightning's child - who is a patron and ally of their people.`,

    designLore: `Most spirits of storm travel the sky, never touching down or staying in any one place for too long, but a few find a place they're sufficiently drawn to to stay - often a site with high winds or violent weather. Spirits of lightning are especially prone to this, finding the earth below more interesting than their cloud-formed bretheren.
    \n\nLightning's Swift Strike was born long ago, of a storm-spirit off the shores of Spirit Island. It decided to stay in the instant it first struck ground, and has remained ever since. Lightning destroys with a fierce and glorious joy, not for the sake of destruction itself, but for the exultation of swiftness-in-power.`,

    setup: `Put 2 PRESENCE on your starting board in the highest-numbered Sands.`,

    playStyle: `Virtually all offense to start with: without a more defensive teammate, Blight may become a problem. Excellent at destroying buildings, less good at containing Explorers. Using Thundering Destruction tends to be a burst affair: a turn or two of position and build up Energy, followed by a really big turn.
    \n\nStarting Powers are extremely focused on Air and Fire: good for Thundering Destruction, bad for Major Power versatility.`,

    specialRules: [
      {
        title: "SWIFTNESS OF LIGHTNING",
        description: `For every Air you have, you may use 1 Slow Power as if it were Fast. (Power Cards or your Innate Powers.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 5, control: 2, fear: 3, defense: 1, utility: 2 },
    ],
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

    bio: `Most early Dahan settlements clustered along the coasts. From time to time, a handful of residents would get a distant look in their eyes and stride off into the heart of the island, no pleading or reason dissuading them from seeking some distant call only they could hear.
    \n\nMany of these involuntary wanderers survived and settles together in time. This may have hastened the First Reckoning, as they relied much more on agriculture than did their fishing bretheren along the coast.
    \n\nA few wanderers spoke of finding the Spirit which called them ever-further inward, in voices of wonder mingled with fear. But most never even saw it, only felt its distant beckoning.`,

    designLore: `Lure of the Deep Wilderness can in some ways be seen as a counterpart to Ocean's Hungry Grasp: it calls humans towards the deep centers of its power, in one case the depths of the ocean, in the other inland areas far from the shore. There the similarity ends: where Ocean's Hungry Grasp is an embodiment of the seas' hunger to consume the land and those who dwell upon it, Lure of the Deep Wilderness is an embodiment of nature's allure and danger intertwined: the desire to seek what lies further in, and the consequences of so doing. For the purposes of fighting the Invaders, most of those consequences are bad ones, but that is not an inextricable truth about it: wanderlust may lead to good things as well as bad.
    \n\nA digression: Spirit Island generally presents Spirits in a way such that you see the sides of them best suited to the struggle against the Invaders. However, many Spirits have portions of their nature that aren't very relevant to the conflict, so they don't get much mechanical representation. For instance, A Spread of Rampant Green could (perhaps) cause *only* crops to grow abundantly, creating plenty of food for Invaders or Dahan. But the effect wouldn't be enough to support the Dahan the way that River Surges in Sunlight does, and wouldn't be especially useful against the Invaders, so it doesn't have any rules associated with it. If the Spirit doubled down and hyper-focused on that part of itself, it might be able to expand / empower / better control that crop growth enough to make it relevant - perhaps entice Invaders to change where they try to settle - but in the process, other portions of itself would be neglected and become weaker. Mechanically, this trade-off would most likely be captured in an Aspect for the Spirit. End of digression!
    \n\nFor its part, Lure of the Deep Wilderness likes humans, but not in a way that humans find especially comfortable. Arguably it prefers the acquisition more than the actual having (though it finds both satisfying), and while this tilt is probably a boon to those called away by waking dreams (if they survive, they're likely to break free at some point), it's still not something that makes the Dahan want to have it as a neighbor.
    \n\n(There are, in the way of humans, exceptions: a scattering of families and people hope to be called on such a journey, seeing it as something of a rite of passage. Their neighbors are pretty skeptical, but hey, if it keeps Lure of the Deep Wilderness from snaring their relatives with a vision-call, they'll happily live with it. And sometimes, Lure of the Deep Wilderness will call an entire village during that village's moving-time; the Dahan tend to find this far less objectionable than individuals being lured away. Partly because it doesn't involve the painful bereavement of loved ones suddenly walking off into the jungle possibly never to return, and partly because villages called in this fashion tend to find excellent sites for their next settlement - often previously unknown ones.)
    \n\nUnlike the Dahan, the Invaders have no agreements with or knowledge of the Spirits, which means from Lure of the Deep Wilderness' perspective they're entirely fair game. At first, there was no malice in its call, but as the threat the Invaders posed became clear, it began acting with more deliberation and anger.`,

    setup: `Put 3 PRESENCE on your starting board: 2 in land #8, and 1 in land #7. Add 1 BEASTS to land #8.`,

    playStyle: `Very focused on the interior - its best options for coastal lands are "draw the Invaders inland" or "turn TOWN/CITY into Explorer, then draw them inland". Likes the interior to be dangerous, full of BADLANDS, BEASTS, DISEASE, and WILDS, ideally where its PRESENCE is.
    \n\nHas better-than-average potential for containing Invaders and setting up a zone safe from Explores, but the coasts may get messy while doing so.`,

    specialRules: [
      {
        title: "HOME OF THE ISLAND'S HEART",
        description: `Your PRESENCE may only be added/moved to lands that are Inland.`,
      },
      {
        title: "ENTHRALL THE FOREIGN EXPLORERS",
        description: `For each of your PRESENCE in a land, ignore up to 2 EXPLORER during the Ravage Step and any Ravage Actions.`,
      },
    ],
    summaryOfPowers: [
      { offense: 4, control: 4, fear: 4, defense: 2, utility: 1 },
    ],
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

    bio: `A Spirit of flocks, swarms, schools, and packs, where the whole moves together in concert to accomplish what the individuals in it could not do alone. Unlike Weaves a Web of Souls, its nature leans towards smaller and simpler creatures, and it regards other sorts of animals - including humans - as bizarrely alien in their individuality; while it will communicate with the Dahan, it has shown no ability (or inclination) to integrate them into itself.
    \n\nWhile it is willing to sacrifice individuals to protect the whole, it is not a Spirit of sacrifice per se - that is a tactic it employs, not the essence of its nature.`,

    designLore: `On one level, a flock of birds is dozens or hundreds of individual beings: each has a separate body, a separate brain, lives or dies separately, makes its own choices, and may compete with the others over mates or food. On another level, a flock of birds is a single organism, twisting and turning in flight, mobbing predators and keeping watch, finding food and safety for its member birds as best it can.
    \n\nMany Minds Move As One is a Spirit of these aggregate beings: flocks of birds, swarms of insects, schools of fish. In particular, it is a Spirit of *joined movement* towards a common cause - a single mind manifest in a multitude of bodies.
    \n\nIt is not attached to any single swarm or school, and indeed, maybe in-with-of many such groups at a time, each flock having a distinct single-mind formed from that particular union of animals. Of course, in keeping with its nature, those distinct hive-minds can then move in concert with each other as part of a still-greater aggregate: it has both multiple selves and a single self at the same time, reflecting the thing it is composed of. It has a very different mindset about minds than humans do - it can be a bit confusing to communicate with, particularly because it finds humans equally baffling in their monolithic isolation.
    \n\nSince the Invaders arrived on Spirit Island, there have been occasional tales - usually from outlying farmers - about someone walking near the edge of the treeline who sees every single bird staring intently at them. These get laughed off - "of course the birds are watching you, you dummy, you've moving nearby!" - but there's truth to them; Many Minds Move As One has been keeping a wary eye on the Invaders since shortly after they showed up. Its instinctive caution is well-founded.`,

    setup: `Put 1 PRESENCE and 1 BEASTS on your starting board, in a land with BEASTS. Note that you have 5 Unique Power Cards.`,

    playStyle: `Requires heavy spatial thought for BEASTS movement, due to its improved Push/Gather and large numbers of BEASTS.
    \n\nHas no offense to start with, but an excellent stalling defense combined with FEAR generation; outright Fear victories may be plausible in smaller games. Both Fear Cards and BEASTS events are unpredictable, however, so swings of fortune are apt to be more relevant than usual.`,

    specialRules: [
      {
        title: "FLY FAST AS THOUGHT",
        description: `When you Gather or Push BEASTS, they may come from or go to lands up to 2 distant (rather than adjacent only).`,
      },
      {
        title: "A JOINING OF SWARMS AND FLOCKS",
        description: `Your SACRED SITE may also count as BEASTS. (Note: You never have more than 1 SACRED SITE in a land, no matter how many PRESENCE you have there.)
        \n\n(If something changes a BEASTS that is your SACRED SITE, it affects 2 of your PRESENCE there - e.g., Push 1 BEASTS will Push 2 of your PRESENCE together.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 1, control: 5, fear: 5, defense: 5, utility: 1 },
    ],
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

  "Ocean's Hungry Grasp": {
    thumbnail: "Oceans_Hungry_Grasp.png",
    complexity: "high",

    bio: `The hunger of the ocean runs deep and powerful, sometimes patient, sometimes tempestuous and angry. It slowly wears away at rocky shores, or devours half an island during a hurricane. It lures humans out onto the water with its sire call, then consumes ship and crew alike unless the proper offerings are made.
    \n\nThe ocean's voraciousness keeps the Dahan from frequent sea travel, though they still manage a trading expedition every decade or so. These trading-trips take the cooperation of several families, and always involve at least two spirit-speakers. That way, even if one perishes abroad, the expedition will still be able to get home.`,

    designLore: `The seas around Spirit Island were not always so dangerous as they now are; when the Dahan's ancestors first arrived, the journey was no more (or less) perilous than any other voyage between islands. Several centuries ago, between the Second Reckoning and the rise of the Spirit-speakers, Ocean's Hungry Grasp arrived in the nearby waters. It has severely curtailed the Dahan's trade with other islands, though not extinguished it: expeditions are careful to propitiate the Ocean before setting out and upon their return. Some smaller ocean spirits still exist - some playful, some indifferent, some moody - but all are overshadowed by the hungry, waiting presence lurking deep offshore, and many have fled. Thus far, the tall-shipped Invaders have mostly escaped its attention, but that is sure to shift soon.
    \n\nOcean's Hungry Grasp is by turns tempestuous and patient; it may slowly eat away a rocky shore over centuries or devour half an island in a hurricane. It has an awful fascination to it, luring sailors to founder and people to hurl themselves into its embrace. The one constant is that it is always willing to consume more, until all things lie beneath the waves.`,

    setup:
      "Put 2 PRESENCE onto your starting board: 1 in the Ocean, and 1 in a Coastal land of your choice.",

    playStyle:
      "Extremely good at assaulting the coasts where the Invaders start out strong, but quite weak inland - the ocean is not accustomed to affecting events so far ashore. Its Presence shifts in and out like the tide, which can be tricky to manage, but permits re-positioning and tactical retreats or offensives in the hands of a skillful player. Has fairly inexpensive Unique Powers, but the energy gained from drowning Invaders can be necessary in stepping up to more potent Powers.",

    specialRules: [
      {
        title: "OCEAN IN PLAY",
        description:
          "You may add/move PRESENCE into Oceans, but may not add/move PRESENCE into Inland lands. On boards where you have 1 or more PRESENCE, Oceans are treated as Coastal Wetlands for Spirit Powers and Blight. You Drown any Invaders or DAHAN moved to those Oceans.",
      },
      {
        title: "DROWNING",
        description:
          "Destroy Drowned pieces, placing Drowned Invaders here. At any time you may exchange (X) Health of these Invaders for 1 Energy, where X = number of players. (Ignore modifiers to Invader Health.)",
      },
    ],

    summaryOfPowers: [
      { offense: 5, control: 4, fear: 4, defense: 3, utility: 2 },
    ],
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

    bio: `Relentless Gaze of the Sun is an imperious Spirit, brimming with wrathful power that scorches the land barren beneath its focused regard. For long centuries, it viewed all others as beneath it, unworthy of consideration.
    \n\nYet since being thwarted during the Years of the Relentless Sun, it wonders if its pride deceives it - perhaps it should work with some Spirits and humans, rather than indulging in indiscriminate destruction?
    \n\nIt is still considering this idea. Regardless, the Invaders offend it by making the land fragile, forcing it into the intolerable choice between dimming its majesty and unintentionally scorching the land.`,

    designLore: `There are many Spirits of the sun and sun's light - some are gently beautiful, some are nourishing, some are aloof and barely touch the island at all. Relentless Gaze of the Sun is none of these things: it is a blazingly imperious Spirit that blasts the land with relentless heat. The tropical sun is something to respect and even fear.
    \n\nThe Spirit was not always like this - long ago, something happened that swelled its pride, turning its satisfaction at shining with bright and brilliant constancy into more and more of an obsession. It came to see the wilting of the land beneath as evidence of how amazing and powerful and important it was, rather than a sign of growing excess. It required rest between these bouts of intense activity, but the number of decades - and, eventually, years - between scorching bouts grew shorter and shorter, and the duration of the scorching-times grew longer and longer.
    \n\nSome seaside Dahan villages figured a way to distract it, buying respite: every year before and during the dry season, they would send well-crewed boats out with shards of obsidian or reflective shell to flash the sun's brilliance back upwards, pulling the Spirit's attention slightly offshore with the apparent signs of an upstart contender for its brilliance. This held off disaster for a couple hundred years - and even after the growing hunger of the Ocean made such trips more dang-erous, several Spirits of sky and heavens managed to keep the Sun's attention elsewhere... for a time.
    \n\nBut when its attention did return to the island, it was full of the wrath and built-up power of centuries. So began the Years of the Relentless Sun, when the Sun shone such power down on the island that it came near to devastating immense swaths of it. Several Spirits of moon and night tried to oppose it, but withered beneath the uncompromising assault; it was not until Shadows Flicker Like Flame took an interest that the Sun was effectively checked. Both Spirits came out of that confrontation somewhat the worse for wear, and are not nearly so powerful now as they were then - though perhaps this is a blessing in disguise. If they were as great in might and scale as they used to be, they would likely not be fast and nimble enough now to fight the Invaders effectively.
    \n\nWhile it is still destructive, Relentless Gaze of the Sun has been at least somewhat tempered, and its motivations seem to be in the midst of a change. It used to act out of a sort of impersonal contemptuous fury, scourging low all who came under its gaze as an affirmation and manifestation of its power - not in an insecure way, or out of hatred, as a human might, but simply because that was its nature: to strike down those who dared raise themselves before it. But even Spirits with the constancy of Sun or Earth can change, over time, and grappling with a Spirit as shifting and protean as Shadows Flicker Like Flame may have accelerated that process. It is still a destructive Spirit, breaking down and burning up those upon whom it focuses its gaze, but it seems to be exploring the idea that 'those outside of itself' are not some homogenous mass, and that perhaps it ought to focus its contempt and fury on those actively opposing it? It is once again willing to communicate with other Spirits, and given that it's not actually trying to rule anything or boss anyone around, most Spirits are content to shrug and speak to it respectfully (if they speak to it at all), or just work around it - it is not a Spirit of great subtlety or connivance.`,

    setup: `Put 2 PRESENCE and 1 BADLANDS on your starting board, in the lowest-numbered Sands.
    \n\nYou start with your 4 Unique Power Cards and 0 Energy.`,

    playStyle: `Uses stacks of 3 Presence and high Energy income to hammer the same lands with repeated Power Cards. Because of its single-mindedness, is better at dealing with large problems than smaller ones.
    \n\nHarms the land and Dahan while smiting Invaders unless it successfully changes its nature (by expanding into new Elements), which may mean partially foregoing the Sun and Fire that form the core of its initial strength.`,

    specialRules: [
      {
        title: "RELENTLESS PUNISHMENT",
        description: `After using a Power Card, if you had at least 3 PRESENCE in the origin land, you may Repeat it any number of times on the same target land(s) (ignoring origin, Range, and target requirements) by paying both:
        \n• the Energy cost of the Power, and
        \n• 1 Energy per previous use of the Power this turn
        \n\neach time you Repeat the Power.
        \n\n(You may Repeat each Power Card multiple times, but its 1st Repeat costs 1 extra, its 2nd Repeat costs 2 extra, etc. Check if the origin has at least 3 PRESENCE when you target it the first time.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 5, control: 1, fear: 3, defense: 2, utility: 3 },
    ],
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

    bio: `Dahan herders are very familiar with Rising Heat of Stone and Sand: the signs of its presence are passed down from generation to generation, so it can be acknowledged and thanked for safe passage across its scorching domain. Even after centuries, the Spirit remains a bit unclear on why living things get so unhappy about fatal desiccation, but the Dahan make such pleasant patterns across its sands that it's happy to forbear.
    \n\nIt is mostly found in sandy and rocky lands with sparse vegetation, but may also reside in volcanic areas, or even stretches of gravel or sand amidst wetter climates, radiating an intense and unusual heat all around.`,

    designLore: ``,

    setup: `Put 2 PRESENCE on your starting board, in the highest-numbered Sands.
    \n\nYou start with your 4 Unique Power Cards and 0 Energy.`,

    playStyle: `Weaken-and-Destroy. Likes having SACRED SITE where there's TOWN/CITY, as it makes all Spirits' Damage more effective there.
    \n\nHas an easier time setting up SACRED SITE in Sands and Mountains, but can do so in any terrain with a bit more time.`,

    specialRules: [
      {
        title: "BLISTERING HEAT",
        description: `At your SACRED SITE, Invaders have -1 Health (min. 1).`,
      },
    ],
    summaryOfPowers: [
      { offense: 1, control: 2, fear: 5, defense: 2, utility: 2 },
    ],
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

    bio: `On most of Spirit Island, the rivers run high during the rainy season, as one would expect. There is one exception: the lingering remains of an ancient curse keep a high ridge shrouded in ice, and when the sun beats down, it feeds a single river with abundant meltwater.
    \n\nRiver Surges in Sunlight is a spirit of rushing water, inundation, and bounty out of season.
    \n\nIt gets along well with the Dahan who farm along its banks; they reap the benefit of good harvests, and tend to the health of the river in its drier times. Both gain.`,

    designLore: `River Surges in Sunlight is one of the greater river-spirits of the island, at least among those moderate enough in their locus of power to still interact readily with humans. (Joining of Three Rivers, for instance, is much larger and more powerful, but sluggish even by spirit standards, and very difficult to contact in any but a few very particular, well-worn ways.) River Surges has a well-established symbiotic relationship with the Dahan, who gain fertile ground from its controlled flooding and gifts of health from its magic; in turn, they tend to the river's needs during times of drought and darkness.
    \n\nLike the river it embodies, it is a spirit of many moods: exuberant or subdued, curious or focused, playful in its power or grim under gray skies. For the Invaders, it brings its more destructive aspects: the force of rushing water, the destructive power of a flash flood, the inexorable rise of waters in a flooded land.`,

    setup: `Put 1 PRESENCE on your starting board in the highest-numbered Wetlands.`,

    playStyle: `While capable of some direct offense, River Surges in Sunlight is best at flooding out Explorers and Towns, displacing them from lands where they might Build or Ravage.
    \n\nThe ability to get free Sacred Sites makes a wide range of Powers more useful.`,

    specialRules: [
      {
        title: "RIVER'S DOMAIN",
        description: `Your Presence in Wetlands counts as SACRED SITE.`,
      },
    ],
    summaryOfPowers: [
      { offense: 4, control: 5, fear: 1, defense: 1, utility: 4 },
    ],
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

    bio: `Long ago in an earlier age, there was only water where islands now lie. One day - for there were day and night by then, though humans did not yet exist - a great serpent grew tired of swimming and decided to rest. It drew the earth up around itself, and so the island was born. Other stories say different things - in particular, Volcano Looming High has its own account - but stories do not need to agree for them to be true. Regardless, many spirits can sense the immense serpent deep below. It is mostly asleep, and its influence on the land above is limited, but the Invaders' Blight already begins to sting it towards greater wakefulness.`,

    designLore: `Let's shift our sight so we see only spirits. There are throngs of them visible across the surface of the island: spirits of tree and glade, of rushing river and entangling vines, of beast and butterfly and mists floating eerily over the marshes. Turning our vision downward, we see nearly as many within the land itself: spirits of hard unyielding stone and of drifted sand dunes, of sinkhole and high peak. Vital Strength of the Earth is here. As we look deeper, fewer spirits greet our eyes - some of volcano, some of dark and ancient caves, a handful of others. But like the earth itself, most of those we see are large, powerful, and slow. Deeper and larger than all of those lies the Serpent Slumbering Beneath the Island. It could be argued that it is the Island, or at least its roots. Like all spirits of such size and power, it is slow beyond human reckoning. Unlike many of them, it is also asleep.
    \n\nOr, now, mostly asleep. The distant sting of the Invaders' blight has begun to rouse portions of its consciousness towards waking, those fragments aware of the land's surface far above. Even that small aspect of the Serpent is slow to act, slow to awaken... but contains the potential for power greater than most spirits could ever muster.`,

    setup: `Put 1 PRESENCE on your starting board in the land #5.`,

    playStyle: `There are several ways to play the Serpent, but all require patience: early game involves slowly building up Powers and Presence. It's not helpless during this time, but it isn't as effective as anyone else. It becomes incredibly powerful after awakening, but getting there requires a lot of time.
    \n\nMake sure to Absorb Essence before you run up against your Presence cap - and to get other players' buy-in before using Absorb Essence on their Presence.`,

    specialRules: [
      {
        title: "DEEP SLUMBER",
        description: `You start off limited to 5 PRESENCE on the island. Raise this with your "Absorb Essence" Power Card. Each use covers the lowest revealed number; your PRESENCE limit is the lowest uncovered number.`,
      },
    ],
    summaryOfPowers: [
      { offense: 2, control: 2, fear: 2, defense: 4, utility: 5 },
    ],
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

    bio: `The Dahan say, "If the long shadows of sunset stretching beside you begin to shift and flicker like tongues of hungry fire, do not run. That will only feed your fear, and whet the shadows' appetite."
    \n\nThis spirit invokes an instinctive fear in humans, perhaps because it doesn't think at all like humans do - it's more alien-minded than most. Until a few generations ago, the Dahan carefully propitiated it only at a distance, steering as clear as they could. But during the Years of The Relentless Sun, it shaded large swaths of the Island, averting catastrophe; since then, many Dahan have been willing to carefully - and cautiously - heed its words, feeling they have a debt they ought to try to repay.`,

    designLore: `A spirit of darkness and fire, of the alien and unnatural just out of vision around the corner. Its mindset is even more non-human than most Spirits', and it's somewhat dangerous just to be around; the only reason the Dahan have anything to do with it is out of a sense of reciprocity for a great favor it did them some generations ago. Its darkness works in ways not intuitive to humans; it may engulf a single person or an entire city, and it can act at great distance by reaching through the shadows of the Dahan. While not a spirit of fear, all of its Powers cause some amount of Fear due to their unnerving effects.
    \n\nSpirits corresponding directly to natural features make instinctive sense to human minds: "the spirit of this river here", or "a spirit of stormy wind" are straightforward and easy to grasp. Some spirits are more inscrutable, such as the Keeper of the Forbidden Wilds, or harder to perceive, such as the Serpent Slumbering Beneath the Island. And then there are others still whose nature simply does not mesh well with humanity's view of the universe, such as Shadows Flicker Like Flame. It is the shadow of a candleflame; a fire that withers what it touches rather than igniting it; the dark silhouette of a tree cast across the ground which, when you step on it, turns out to be a pit of ink-black otherspace. Its form is as fluid as smoke, rising up from any shadow lying on the ground. Shadows Flicker Like Flame does not seem to represent any natural phenomenon known outside of itself, but is associated with shade, transformation, shadows given life, unnatural spaces, and engulfing dark. While it is not a spirit of terror per se, it evokes a primal fear in humans, both due to its associations and the alienness of its nature. It seems to honor its bargains, but it thinks along strange lines... and when it's near, you're never entirely sure that you won't just vanish.
    \n\nOther Spirits do not seem to find Shadows Flicker Like Flame the least bit unnatural, however; perhaps humanity's view of nature is not perfectly complete.`,

    setup: `Put 3 PRESENCE on your starting board: 2 in the highest-numbered Jungle and 1 in land #5`,

    playStyle: `Good at causing Fear and picking off lone Explorers and Towns, containing the Invaders. Not so good at massive damage - may need to rely on allies to handle thoroughly colonized lands.
    \n\nThe ability to boost Range gives more flexibility to Range 0 Powers, and can be important in larger games.`,

    specialRules: [
      {
        title: "SHADOWS OF THE DAHAN",
        description: `Whenever you use a Power, you may pay 1 Energy to target a land with DAHAN regardless of the Power's Range. (Power Cards or your Innate Powers.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 4, control: 3, fear: 5, defense: 1, utility: 1 },
    ],
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

    bio: `A predator-spirit of the jungles, a stalker and hunter of animal and human alike. Wherever it lives, savage beasts emerge to hunt, and the jungle grows dark and ominous.
    \n\nSharp Fangs doesn't bother talking to the Dahan. Sometimes it will hunt them, or run them off, but for the most part it ignores them. The Dahan's legends tell of a time when Sharp Fangs hunted them more actively, until a pair of warriors - twins, sister and brother - drove it off with traps and guile, then turned the tables and hunted it down. Since then, it has seen the Dahan as not-entirely-prey, which, for it, is something akin to respect.`,

    designLore: `Sharp Fangs Behind the Leaves is a predator-spirit, half-seen stalker in the jungles, hunter of prey large and small. This most emphatically includes humans - though a pair of heroes long ago won the Dahan the status of "not entirely prey", and with it an uneasy semi-reprieve from its more active predations. Still, the Dahan know better than to stick around too long when it moves into an area to stay.
    \n\nWhere it lairs for any length of time, the jungle becomes a hunting-grounds, and not just for its own hunts - Sharp Fangs can bring the aggressive and predatory instincts of other animals to the fore. Creatures that ordinarily might be dangerous only when provoked become actively marauding threats, or even driven into a berserker frenzy if it suits Sharp Fangs' purposes. It's not that it lives for the hunt and the fight: it is the hunt and the fight, the way that Lightning is lightning and Earth is earth.`,

    setup: `Put 1 PRESENCE and 1 BEASTS on your starting board in the highest-numbered Jungle. Put 1 PRESENCE in a land of your choice with BEASTS anywhere on the island.`,

    playStyle: `All about Beasts and Jungles. Can be very fast out of the gate, but doesn't have the late-game power that some spirits do, and is likely to have some difficulty with Blighted areas. "Ranging Hunt" is a critical Innate ability, particularly in early-game: it simultaneously gives Beasts mobility and permits picking off a stray Explorers or Towns on most turns.`,

    specialRules: [
      {
        title: "ALLY OF THE BEASTS",
        description: `Your PRESENCE may move with BEASTS. (Whenever a BEASTS moves from 1 of your lands to another land, you may move 1 PRESENCE along with it.)`,
      },
      {
        title: "CALL FORTH PREDATORS",
        description: `During each Spirit Phase, you may replace 1 of your PRESENCE with 1 BEASTS. The replaced PRESENCE leaves the game. (It was not destroyed, so things which return destroyed PRESENCE cannot bring it back.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 3, control: 3, fear: 4, defense: 2, utility: 1 },
    ],
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

    bio: `An immensely old Spirit that has ascended to great power countless times over the ages - and then destroyed that power each time, severing huge pieces of itself to become small once again. It does this in part for the thrill of learning anew, but also for the delight of perceiving the living world on the short timescales that larger Spirits grow beyond.
    \n\nThe Invaders' arrival has pushed it to grow much more quickly that it usually would, re-learning lessons and powers from its deep past in order to fight more effectively. After the fight is won, there will be time to forget, to diminish, and to renew itself once more.`,

    designLore: `Shifting Memory of Ages has been a Spirit of many things over the eons: they are both a Spirit of self-change and of self-memory. To understand the source of this tension within them, you must understand something of the nature of Spirits.
    \n\nThe larger and more powerful a Spirit is, the slower the time frame in which they act: the tiny Spirits of leaf and dewdrop are nearly impossible to communicate with, as a single day for a human is a long eternity to them. (And their knowledge of the world is extremely localized, though still intricate within its bounds.) Most Spirits the Dahan deal with regularly are a touch larger: the Spirit of a single path, of a small glade, of a riverside pool. Not all such places have/are Spirits, but neither are they are especially rare. These Spirits are still fast-minded enough that they may seem somewhat flighty or forgetful to humans, but they will respond to a call, a dance, a pattern, a song.
    \n\nSpirits who perceive the world on a timescale similar to humans are a bit larger, a bit less common, stay a bit more removed from humanity on average - and the correlation continues, all the way up to Spirits so vast that they could make the Invaders vanish with a thought… but might erase the island in the process, and in any event by the time they acted, they would be far, far too late, as they measure millennia with their breath.
    \n\n(The Spirits you play start the game in a sweet-spot of “small enough to act on human timescales, large enough to impact the Invasion”. The slowdown that comes with growth is not instantaneous - more like an accumulation of drag over time - so you're able to ramp up to a combination of speed and potency that Spirits don't normally exhibit except during the process of such a change.)
    \n\nShifting Memory of Ages is an ancient Spirit that has always loved learning, and growing, and understanding. Long eons before humans, they grew to a great ascendancy of power and knowledge. With that greatness, they stopped perceiving the world on the scale of sunrise and sunset, instead of resonating to the deeper rhythms of seasons, of years, of weather-cycles and climate and tectonics…
    \n\n…and they found that they missed what they had been. Not that they desired ignorance, but they wanted to be able to bask in the slow and perfect glory of a sunset; to hear how the river sounds during different types of rainfall; to watch the antics of this animal or that growing up as an individual rather than perceiving a new generation every time they blinked. They wanted a certain experience of the world that was incompatible with what they had become.
    \n\nSo they changed. They carefully identified, located and protected those parts of themselves that were most core to their being, then slowly let go of everything else: ties to the land, modes of thinking and being, a billion treasured memories, and more. They made themselves small so that they might see the world with young eyes once again.
    \n\n(This is not a usual thing. Spirits may become diffuse or fade or may shrink as the thing-they-are diminishes in some way, but those which grow-and-diminish cyclically generally do so on a much smaller scale.)
    \n\nShifting Memory of Ages found existence different the second time around: they retained aspects of understanding they hadn't had during their first nascency, learned new things, and grew in different directions (despite the occasional feeling of strange familiarity and ease when they re-discovered something that resonated with their prior self). But their core aims were realized, and they rejoiced in seeing the world with fresh eyes! Since then, they have risen to ascendancy over and over, followed each time by this deliberate forgetting-of-self, a return to beginnings with a mostly - but not entirely - blank slate.
    \n\nThe threat posed by the Invaders has caused Shifting Memory of Ages to accelerate their cycle, progressing along half-familiar paths of power more quickly than they otherwise would. If victory is achieved, they can pause and diminish once more, after making sure that the lessons of the conflict are remembered by some on the island.`,

    setup: `Put 2 PRESENCE on your starting board in the highest-numbered land that is Sands or Mountain. Prepare 1 MOON, 1 AIR, and 1 EARTH marker (put them by your Special Rules).`,

    playStyle: `Starts with little ability to influence the board - most of what it does in that regard will come from new Power Cards.
    \n\nExtremely good with Major Powers and usually wants to take them early and often. Can either try sprinting towards victory with its phenomenal Energy Growth or build up towards becoming a late-game powerhouse.`,

    specialRules: [
      {
        title: "LONG AGES OF KNOWLEDGE AND FORGETFULNESS",
        description: `When you would Forget a Power Card from your hand, you may instead discard it. (Max. once per Action.)`,
      },
      {
        title: "INSIGHTS INTO THE WORLD'S NATURE",
        description: `Some of your Actions let you Prepare Element Markers, which are kept here until used. Choose the Elements freely. (I.e., you are not limited to Elements you have at the time.)
        \n\nEach Element Marker spent grants 1 of that Element for a single Action. (E.g., one Power use.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 1, control: 2, fear: 2, defense: 4, utility: 5 },
    ],
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

    bio: `A spirit of dissolution and the cold silence of death, creeping quietly down from the hills and across the open waters. Its trail is adorned with dew-covered leaves and the bones of small animals.
    \n\nSome legends say Shroud of Silent Mist came from the final breath of a Dahan spirit-speaker who spoke too freely of secrets entrusted to him, for which his soulform was afflicted with a death-bringing curse. Others claim it was born from the legends and tales rather than from any actual person, for the story of Kadura shows that human and Spirit do not so readily transform into each other.`,

    designLore: `With wetlands, mountains and high-humidity jungles during the rainy season, Spirit Island has plenty of Spirits of mist and fog. Among them are Morning-Glow, a smallish Spirit that lives near a few Dahan villages and manifests as striking patterns of light in the dawn's first rays, then sleeps for most of the day and night; Tide of the Forest's Breath, a dense fog that rolls down from certain mountain peaks; a Spirit called different names on different parts of the island that rises where the sun beats down on wet sand (often near the ocean); and Shroud of Silent Mist, the mist which silently flows in, bringing quiet and slow dissolution in its wake.
    \n\n(The Spirit's name is an inexact translation; the Dahan don't generally use burial-shrouds. One word being translated refers to the mist-like clouding of the eyes with age and/or death, and another word brings in association of muffling or enfolding cloth. But attempts at literal translation such as "Attenuating Death-Cataract Enfolding-Blanket" mangle the poetry of the original, and completely miss the allusions to mists and cold, so "Shroud of Silent Mist" is, all in all, a better representation.)
    \n\nShroud of Silent Mist is one of those Spirits where knowledge of its nature helps greatly in dealing with it. It doesn't (usually) kill humans quickly at all; while there are stories of those-who-travel dying overnight in a mist-shrouded dell, the reality is that the danger it brings is on the scale of months to years: the mists seep in (perhaps just at night, at first), and everyone feels a little lethargic, a little cold, a little not-quite-there, with a slightly harder time seeing or hearing or breathing as the world turns a pale silver-white. Then the mists stay - perhaps retreating for a day or two here and there, but always returning - and everyone keeps feeling a little worse, and a little worse, and a little worse, but it gets harder and harder to muster the motivation to do anything about it.
    \n\nThose that manage to leave the area of the mists recover fully, given a bit of time. This may be easier said than done: if it's just manifesting in a small hollow or river-basin, you might win free easily, but more often the fog stretches all around for a much greater distance, and it's very easy to get lost in the pall. Overall, though, the Dahan consider Shroud of Silent Mist to be a very dangerous Spirit, but not always an imminent threat, between the slow pace of its enervation and the fact that it doesn't seem to bear the Dahan any specific ill-will. It might enfold a Dahan village for a few days then depart, leaving a few dead herd animals and a scattering of smaller wildlife. (Or it might stay for months and leave only the bones of those who lived there among the trees. If it shows up and you decide to stick around, you're taking your chances.)
    \n\nThere are stories that it once was a Dahan, and was somehow changed into a Spirit, cursed to wander silently bringing death. Most don't give this much credence, but it does make for a good tale.`,

    setup: `Put 2 PRESENCE on your starting board: 1 in the highest-numbered Wetland and 1 in the highest-numbered Mountain.`,

    playStyle: `Constantly shifting and moving its Presence around the board. Hurt more than most by Presence loss due to its desire to surround and envelop the Invaders.
    \n\nCan (slowly) clear the most built-up of lands, but its real strength is the free Fear from Slow and Silent Death.
    \n\nExtremely limited Energy income, but can stretch to Major Powers if it manages to gather enough Energy from its Special Rules.`,

    specialRules: [
      {
        title: "GATHER POWER FROM THE COOL AND DARK",
        description: `Once a turn, when you Gain a Power Card without FIRE, gain 1 Energy.`,
      },
      {
        title: "MISTS SHIFT AND FLOW",
        description: `When targeting a land with a Power, you may Gather 1 of your Presence into the target or an adjacent land. This can enable you to meet Range and targeting requirements.`,
      },
      {
        title: "SLOW AND SILENT DEATH",
        description: `Invaders and DAHAN in your lands don't heal Damage.
        \n\nDuring Time Passes: 1 FEAR (max. 5) per land of yours with Damaged Invaders. Gain 1 Energy per 3 lands of yours with Damaged Invaders.`,
      },
    ],
    summaryOfPowers: [
      { offense: 4, control: 4, fear: 5, defense: 2, utility: 1 },
    ],
    aspects: aspects["Shroud of Silent Mist"],
    specialRules: specialRules["Shroud of Silent Mist"],
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

    bio: `Every once and again, where starlight falls to ground there arises a new Spirit. Its essence is initially that of the stars and nighttime sky, but from the moment it touches the island it begins to change, adapting and reimagining itself for its new home. Only a few of the island's Spirits came to be in this fashion, but many of them have been memorable.
    \n\nThis one arrived after the Invaders started to spread, striking the earth where they had cleared land for farming. Fragile and new, it was saved from dissolution by Stone's Unyielding Defiance, and in gratitude fights the Invaders even as it seeks to define itself.`,

    designLore: `The natural world is not static, and neither are the Spirits. Individuals among them grow and change, both reflective-of and reflecting-into the parts of the world that they embody. Spirits can cease to exist, either slowly fading away, being severed from the vital life of nature, or through the cessation of portions of the world they cannot do without. They can transform, their nature fundamentally shifting. And new Spirits can come into being, either coalescing around the existing, or via the genesis of the new.
    \n\nUsually, when Spirits arise, they embody or represent something right from the get-go. There is, however, something different and unusual about the light of stars. While there do certainly exist Spirits of the night and nighttime sky, when starlight itself falls to earth (common) and brings a Spirit (much rarer), that Spirit arises unattached to any facet of nature, other than a lingering and fading connection to the stars above. Over its first hours, months, years of its existence, it transforms, forming connections to local places and aspects of nature, becoming something altogether new.
    \n\nAre the stars themselves immense Spirits, slower-moving than any on the island, but so powerful they create children from across the vast reach of sky? By the time starlight-Spirits understand this question being posed to them, they no longer remember whether it is true.`,

    setup: `Put 1 PRESENCE on your starting board, in a land with BLIGHT.`,

    playStyle: `A build-your-own-Spirit, capable of going in many different directions based on Elements picked, Growth choices selected, and Power Cards kept. Has a very high personal/visual complexity and a huge number of early-game options, but doesn't alter play much for other players at the table.
    \n\nAs it commits to choices, it loses versatility - not all paths will be good (or even possible) at all things. It especially wants a measure of adaptation to early Power Cards, rather than trying to pre-select a strategy.`,

    specialRules: [
      {
        title: "GROWTH BEGETS GROWTH",
        description: `You have 6 PRESENCE tracks. (As usual, you may add PRESENCE from any track.) 4 of the PRESENCE tracks are next to rows of Growth choices: these choices start unavailable. Upon emptying a Growth track, pick one of its two Growth choices to be immediately available. The other stays unavailable for the rest of the game (cover with a spare piece).
        \n\nAfter you add PRESENCE from a space marked PLUS 1 ENERGY, gain 1 Energy.`,
      },
      {
        title: "SLOWLY COALESCING NATURE",
        description: `After revealing an ELEMENT, place 1 Element Marker of your choice on it. That element is permanent and is constantly available (As if pre-printed on the PRESENCE track.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 1, control: 1, fear: 1, defense: 2, utility: 2 },
    ],
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

    bio: `Some things refuse to break.
    \n\nUnderneath the soil and sand of the island lies rock, layer upon layer built up over the ages. Some stones weather quickly once exposed to the elements, while others are sterner and harder. Stone's Unyielding Defiance is a Spirit of that stone which resists being shattered, moved, or shaped to the will of another.
    \n\nIt is capable of tremendous feats of resilience and obstinacy, particularly when confronted head-on in a belligerent fashion. It's not unfriendly to other Spirits or the Dahan, but it works with them on its own terms.`,

    designLore: `Stone lies under everything. All on its own, it's not necessarily the friendliest of environments for large-scale life, but it's still part of the living earth - over time it weathers to help form soil, after all. Until then, while it may not be nourishing like a lovely regolith full of organic matter, it's supportive and durable and makes great homes for all manner of plants and animals. In some senses, Spirit Island is made out of rock. (In other senses, it's made of a giant serpent, and in others still it's made of a volcano. All these things are true, and more.)
    \n\nStone's Unyielding Defiance is a Spirit of one particular type of stone: that which won't get out of your way and you just can't budge. (This can take many physical forms; andesite and rhyolite are common ones.) The Dahan are no strangers to quarrying, nor to discussion and negotiation with local spirits over whether and how such quarrying might proceed in a way that works for all concerned, but with Stone's Unyielding Defiance they don't even try - they'll inquire once, politeness masking frustration, and head home when it refuses.
    \n\n(Once or twice, someone has tried to match its stubbornness, in hopes of winning its respect. This has worked insofar as the respect is concerned, but failed utterly in terms of actually changing its answer. It has occasionally decided of its own volition to gift Dahan villages with building-pillars, however. These endure better than any others and are always appreciated when a village moves back to one of the old sites which has one. None have yet needed to be replaced, despite the passage of centuries.)`,

    setup: `Put 2 PRESENCE on your starting board: 1 in the lowest-numbered Mountain without DAHAN; 1 in an adjacent land that has BLIGHT (if possible) or is Sands (if not).`,

    playStyle: `Most of its special rules and innates require being where the Invaders are - particularly in the worst, most-overrun lands, so it can mitigate incoming Blight and (eventually) destroy the Invaders with their own Ravages.
    \n\nDoes best with the patience to build up a position over time, and the temperance to hold some Energy in reserve so it can take advantage of Hold the Island Fast With a Bulwark of Will.`,

    specialRules: [
      {
        title: "BESTOW THE ENDURANCE OF BEDROCK",
        description: `When BLIGHT is added to one of your lands, unless the BLIGHT then outnumbers your PRESENCE, it does not cascade or destroy PRESENCE (yours or others').`,
      },
      {
        title: "DEEP LAYERS EXPOSED TO THE SURFACE",
        description: `The first time you uncover each of your "+1 Card Play" PRESENCE spaces, gain a Minor Power. (They're marked with MINOR SYMBOL as a reminder.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 3, control: 2, fear: 1, defense: 5, utility: 2 },
    ],
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

    bio: `Sun-Bright Whirlwind is a Spirit of sun-warmed and gusting air. It spins leaves and dust into miniature cyclones, playfully snatches at small unsecured objects, and sometimes - when joyful, or upset, or full of the vigor of nature - howls across the island, bending trees and abrading the landscape with pebbles, twigs, shells, and the occasional bird nest.
    \n\nSome Dahan take its appearance as a good sign for travel, and others have tried asking it to help bring messages to those far away - with mixed success, as it tends to lightly prank the recipients by mixing the messages' words all about.`,

    designLore: `Sun-Bright Whirlwind is all about control and thrives with utility Powers, enabling fellow Spirits to reach new heights.`,

    setup: `Put 3 PRESENCE on your starting board: 1 in the highest-numbered Sands, 2 in the lowest-numbered Mountain.`,

    playStyle: `Incredibly good at handling EXPLORER, clearing newly-Explored lands of Invaders so they don't Build there. Not nearly so good at dealing with TOWN/CITY.
    \n\nCan focus on Energy and largely forego its Innate Power, focus on Plays to aim for mid-to-high Innate thresholds, or strike a more balanced path. Adds at most 1 PRESENCE per turn, so there won't be time to do it all.`,

    specialRules: [
      {
        title: "A STIFF WIND AT THEIR BACKS",
        description: `After you Add PRESENCE during Growth, Push up to 1 EXPLORER/DAHAN from that land.
        \n\n(Let other players know this is due to your Special Rule, so they know you're still in the Spirit Phase and not using a FAST power.)`,
      },
    ],
    summaryOfPowers: [
      { offense: 3, control: 5, fear: 1, defense: 1, utility: 3 },
    ],
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

    bio: `Child of the Lightning, once known as Bright Thunder Roars in the days when it tore across the land as an avalanche of sound and chaos. It lost that form when the Stalker of Hidden Secrets imprisoned it in a canyon, binding it to echo perpetually back and forth until its thunder died out or the stones of the island wore away.
    \n\nThe Dahan freed it from that imprisonment. Weakened but grateful, Bright Thunder Roars bound itself to aid the Dahan until a generation had passed for every year of its imprisonment, and in so binding changed its nature, becoming both less and more than it had been. It often takes human form, now, and with centuries' practice wears it with ease.
    \n\nChiefs call on the Thunderspeaker only in times of great need; it has not been much seen since the destruction of the Servant Cults.`,

    designLore: `Thunderspeaker is a child of Lightning's Swift Strike, metamorphosed through a binding-oath to the Dahan that saved it from imprisonment. It wears human form, now, and is sometimes called upon by the Dahan to act as a leader against larger threats which must be confronted by many clans: partly because of the powers and knowledge it can bring to bear, and partly because following Thunderspeaker's lead helps circumvent the delicate question of who should be in charge of such a large coalition. Thunderspeaker primarily acts via the Dahan, organizing them to fight in ways they have not had to fight for many generations, but is capable of direct Power use - and must decide when choosing new Powers whether to double-down on its allegiance to the Dahan, or to complement that with more direct effects.
    \n\nThunderspeaker is a spirit of sound and of power, of words on the wind and bright bursts of destruction. It is tied strongly to the Dahan by a long-standing vow, and most often appears in human form as a result, but no one would mistake it for an ordinary person: its form crackles with energy and its voice carries a storm-born strength.
    \n\nIt serves the Dahan mostly in times of great need - it fought fiercely alongside them during the Second Reckoning - but has also been known to turn up from time to time offering aid unasked-for, calling messages to distant families or guarding against a hitherto-unknown threat. It has occasionally agreed to serve as a commander of sorts, when multiple Dahan clans wish to make common cause but cannot agree on which of them should lead the effort.
    \n\nThunderspeaker has not been much seen since the destruction of the Servant Cults. Some speculate that fighting against Dahan - even on behalf of other Dahan - must have taken a heavy spiritual toll, given the oath that binds it.`,

    setup: `Put 2 PRESENCE on your starting board: 1 in each of the 2 lands with the most DAHAN`,

    playStyle: `Has a keen interest in where the Dahan are - partly because so many of its starting powers work through them partly because its Presence can move along with them. When picking new Power Cards, it will often want to take good Dahan-centric Powers, but it can also branch out into other areas.`,

    specialRules: [
      {
        title: "RULE TITLE",
        description: `Your PRESENCE may move with DAHAN. (Whenever a DAHAN moves from 1 of your lands to another land, you may move 1 PRESENCE along with it.)`,
      },
      {
        title: "RULE TITLE",
        description: `After a Ravage Action destroys 1 or more DAHAN, for each DAHAN Destroyed, Destroy 1 of your PRESENCE within RANGE 1`,
      },
    ],
    summaryOfPowers: [
      { offense: 4, control: 5, fear: 3, defense: 2, utility: 1 },
    ],
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

    bio: `Towering Roots of the Jungle is a massive, sprawling tree, mighty and ancient. It predates the Dahan, but its history has entwined with theirs ever since they arrived: as part of the terms of the First Reckoning, it served as one place where Dahan might settle freely. It protected the land from any accidental damage done by the Dahan, and the Dahan from Spirits that wished them ill.
    \n\nIt has never before felt the need to reach out through its offshoots and descendants around the island, but the threat of the Invaders and their heedless destruction has motivated it to grow and change in this new way.`,

    designLore: `When the First Reckoning between the Dahan and the Spirits concluded, the Spirits wanted to keep track of the Dahan and what they were doing...
    \n\n(...an important digression: I say “the Spirits” as if they were some sort of monolithic, united block.That's completely untrue: they were (and are) an ecosystem, both figuratively and literally. There were plenty of disagreements among them, plenty of Spirits who took unilateral action according to their natures, plenty of other Spirits who acted to check those Spirits according to their natures, and so on. Many local Spirits never got involved in the first place, not even counting the vast numbers of Spirits who weren't even close enough to be involved, as initial settlement by the ancestors of the Dahan was mostly confined to one part of the island. Much of this was behind the scenes and not super-evident to the humans involved, and time + the nature of stories have altered the tale enough that most such details wouldn't have survived anyway.)
    \n\nWith that simplification understood - the Spirits had a variety of desires: to keep track of the Dahan and what they were doing, to understand them better, to support them living on the island, to enforce the terms of the First Reckoning, and more. A number of Spirits got involved in this, and one of the more obvious and prominent ones was Towering Roots of the Jungle.`,

    setup: `Put 3 PRESENCE on your starting board: 1 in the highest-numbered Jungle without BLIGHT, 1 in the highest-numbered Mountain, and 1 in the highest-numbered Wetland. Put TOWERING ROOTS OF THE JUNGLE, Unempowered (UNEMPOWERED) side up, in the Jungle with your PRESENCE.
    \n\nYou start with your 4 Unique Power Cards and 0 Energy.`,

    playStyle: `Incredibly good at protecting everything at its TOWERING ROOTS OF THE JUNGLE - and can draw Invaders towards there - but is constrained in when and where it can move its TOWERING ROOTS OF THE JUNGLE. Has some ability to Remove Invaders (driving them from the island), but starts off vastly better at guarding the land than at smashing things.`,

    specialRules: [
      {
        title: "ENDURING VITALITY",
        description: `Some of your Actions Add Vitality Tokens (VITALITY). (Each VITALITY in a land with no BLIGHT prevents 1 BLIGHT from being added, then is Removed.)`,
      },
      {
        title: "HEART-TREE GUARDS THE LAND",
        description: `You have an Incarna (TOWERING ROOTS OF THE JUNGLE).
        \n\n• Your Powers get PLUS 1 RANGE if TOWERING ROOTS OF THE JUNGLE is in the origin land.
        \n• Invaders/DAHAN/BEASTS can't be damaged or destroyed at TOWERING ROOTS OF THE JUNGLE.
        \n• Empower TOWERING ROOTS OF THE JUNGLE the first time it's in a land with 3 or more VITALITY
        \n• Skip all Build Actions at empowered TOWERING ROOTS OF THE JUNGLE.`,
      },
    ],
    summaryOfPowers: [
      { offense: 1, control: 3, fear: 2, defense: 5, utility: 2 },
    ],
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

    bio: `A Spirit of vengeance, anger, and retribution. In its incarnation as a Burning Plague, it slumbers in a simmering volcanic pool, awakening at unpredictable intervals.... or when roused through supplication by one wronged. Most Dahan consider this foolhardy, for it vents its wrath on entire communities, and its pestilence may spread anywhere. Clans with a close relationship to Hearth-Vigil have less to fear, but still deem it wise - and humane - not to push their luck.
    \n\nIt is unclear whether its recent waking is due directly to the ravaging of the Invaders or to some Spirit's pleas.`,

    designLore: `The Dahan suspect that Vengeance is a Spirit of many forms, just as vengeance itself can run hot, or cold, instinctive or premeditated. There are certainly multiple Spirits that seem to fit the bill, and certain events from past generations suggest they are at the very least related or interlinked somehow, if not actually a single Spirit with unusually disparate manifestations. Showing a prudent caution, the Dahan call these Spirits by names that would not give offense should they be single or multiple.
    \n\n(The name you see on the Spirit panel is a shortened version of what the Dahan usually call it, but “Vengeance as a Burning Plague that Scours All Those Who Remain Before It” doesn't fit in the layout. In the Dahan language, monikers given to Spirits are titles, with longer names being more formal. While this displays a certain form of respect, it is also distancing, a politeness which either acknowledges a Spirit who is powerful but has little to do with the Dahan, or implies a desire that the Spirit and Dahan keep separate both socially and physically. Shorter name-titles usually convey a different sort of respect, implying some sort of connection or closeness which merits the familiarity… though there are exceptions.)
    \n\nAfter the diseases brought by the Invaders started to sweep through the Dahan population (5 or so years prior to the game's start), many Dahan leapt to the thought that someone had awoken Vengeance as a Burning Plague. There was a great deal of bitterness and cursing whomever had been so foolish - painful history has led them to view the Spirit a little bit like modern civilized nations view chemical warfare: everyone leaves it alone because it's so terrible, and unleashing it just results in more pain all around.
    \n\nThankfully for the Dahan, Vengeance as a Burning Plague is currently venting its wrath on the Invaders, so its diseases are tailored towards them. The Dahan are not entirely safe - but when Vengeance is making the rounds, who is?`,

    setup: `1 of your PRESENCE starts the game already Destroyed. Put 2 PRESENCE on your starting board: 1 in a land with BLIGHT, 1 in a Wetland without DAHAN.`,

    playStyle: `Not so powerful early, but can be a late-game juggernaut, especially if things are going badly: BLIGHT adds to its Damage and its PRESENCE being Destroyed adds DISEASE. It may even want to engineer these situations, which can make other Spirits nervous (and be risky if things go poorly).`,

    specialRules: [
      {
        title: "THE TERROR OF A SLOWLY UNFOLDING PLAGUE",
        description: `When DISEASE would prevent a Build on a board with your PRESENCE, you may let the Build happen (removing no Disease). If you do, 1 FEAR.`,
      },
      {
        title: "LINGERING PESTILENCE",
        description: `When your PRESENCE is destroyed by anything except a Spirit action, add 1 DISEASE where each destroyed PRESENCE was.`,
      },
      {
        title: "WREAK VENGEANCE FOR THE LAND'S CORRUPTION",
        description: `Your actions treat BLIGHT on the island as also being BADLANDS.`,
      },
    ],
    summaryOfPowers: [
      { offense: 5, control: 2, fear: 3, defense: 1, utility: 1 },
    ],
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

    bio: `A spirit of great and unhurried power. The life that earth yields up to roots, the ground supporting the life that lives upon it. The patience of seasons and of stone.
    \n\nIt is not usually a direct benefactor of the Dahan - rather than giving blessings it prefers to work in concert with them, lending power to joint undertakings.
    \n\nCurrently it is trying to rouse itself to fight against the Invaders, but this swift and direct action runs somewhat counter to its nature.`,
    
    designLore: `Vital Strength of the Earth is a spirit of the support and sustenance that growing life gains from the ground below. It finds animals (including humans) quite interesting, but they fall outside of its bailiwick. While it is not a Spirit born of sunlight, its cycle of life is ultimately nourished by the sun, and the sun's constancy and power align well with its nature.
    \n\nIt is old, and its strength runs deep; while most Spirits have heard tell of the Serpent Slumbering Beneath the Island, Vital Strength is one of a few which can sense its uneasy sleep. It is patient and unhurried, though it understands the need to act with more alacrity when dealing with humans. (If you take too long, they forget what you were working on together and pack up to move elsewhere, which is such a shame.) It has good ongoing relations with multiple Dahan clans, treading carefully around their attitudes towards debt and favors; it does not see the world from the same angle of reciprocity, status, and obligation that the Dahan do.`,

    setup: `Put 3 PRESENCE on your starting board: 2 in the highest-numbered Mountain, 1 in the highest-numbered Jungle.`,

    playStyle: `Powerful but slow: has potent Power Cards and an excellent Energy income, but starts with only one card play per turn, and Growth is limited to adding one Presence per turn.
    \n\nAlso slow to change: learning new Powers carries slightly more cost than reclaiming played Power Cards`,

    specialRules: [
      {
        title: "EARTH'S VITALITY",
        description: `Defend 3 in every land where you have SACRED SITE.`,
      },
    ],
    summaryOfPowers: [
      { offense: 2, control: 3, fear: 1, defense: 5, utility: 3 },
    ],
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

    bio: `A spirit of fire and earth stretching upwards to the sky, casting a long and dangerous shadow across the land. The deeper Spirits of vulcanism are too powerful and slow, too removed to respond to the Invaders - but not so this one.
    \n\nIt doesn't dislike humans per se, but neither does it have much use for them, so the Dahan tend to keep away from it as much as possible and will not quarry stone in its shadow. Of course, larger eruptions can impact a good chunk of the island, so they sometimes end up dealing with its temper whether they want to or not.`,

    designLore: `There is more than one Volcano Spirit, and many others partake of volcanism in some manner or other, but Volcano Looming High may be the most prominent of them all: while its core essence is born from the deep fires of the earth, it exists where that molten stone reaches high into the sky, peaks looming overhead and explosions blotting out the sun. It is extremely visible, and the Dahan take care not to live too close: it's not hostile, but nor is it a friend. Sooner or later its power will rise, the stone of the mountain will swell upwards, and an explosion - perhaps large, perhaps small - will follow.
    \n\nIt's a mostly felsic volcano, so it doesn't burble highly-liquid lava the way Hawaiian volcanoes do - its lava is thick and viscous, sometimes visually indistinguishable from stone save for a red glow visible only at night. As a result, pressure builds up in the earth over time, and the mountain grows larger as a lava dome rises upwards. This may subside naturally or be alleviated by smaller blasts of pyroclastic activity here and there, but can also culminate in an explosive collapse of the built-up lava dome, like the eruptions of the Soufriere Hills or Mt. St. Helens.
    \n\nVolcano Looming High is tall, and proud, and rejoices in its strength. It's aloof from most Spirits more due to location than any desire for isolation, though it's also entirely unbothered by its relative paucity of visitors - it has a magnificent view, after all, can see what transpires virtually everywhere, and is grounded by a pillar of molten stone coming straight out of the earth's heart. Maybe it has a hard time perceiving down to the scale of individual humans, but it doesn't see that as particularly important.`,

    setup: `Put 1 PRESENCE and 1 BADLANDS on your starting board in a mountain of your choice. Push all DAHAN from that land.`,

    playStyle: `Benefits more than most Spirits from getting PRESENCE onto the board; in addition to the usual benefits, it can fuel an Explosive Eruption. This can result in a huge turn, but if overdone the following turn or two may be very constrained.
    \n\nBigger eruptions are extremely powerful, but cause BLIGHT, and the Invaders may not provide the luxury of enough time to build up the desired pressure - judging the timing of when to erupt and for how much is a key part of playing this Spirit.`,

    specialRules: [
      {
        title: "MOUNTAIN HOME",
        description: `Your PRESENCE may only be added/moved into Mountains.`,
      },
      {
        title: "COLLAPSE IN A BLAST OF LAVA AND STEAM",
        description: `When your PRESENCE is destroyed, in that land, deal 1 Damage per destroyed PRESENCE to both Invaders and to DAHAN.`,
      },
      {
        title: "VOLCANIC PEAKS TOWER OVER THE LANDSCAPE",
        description: `Your Power Cards gain PLUS 1 RANGE if you have 3 or more PRESENCE in the origin land.`,
      },
    ],
    summaryOfPowers: [
      { offense: 5, control: 1, fear: 2, defense: 1, utility: 3 },
    ],
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

    bio: `Ages ago, Calls All Living Things to Die was a great and respected Spirit, until it decided to test the limits of its power - accounts disagree as to why - and devastated a portion of the island with a vast swath of death. Matters would have gone even worse but for three Spirits who cleverly sundered the great Spirit's voice and bound it to wander, never returning to its owner.
    \n\nWandering Voice Keens Delirium only occasionally brings death with its song, now, more usually causing derangement, obsession and folly in those it touches. The Dahan have learned a variety of tricks to avoid the worst of its influence, but are occasionally affected nonetheless.`,

    designLore: `Many Spirits break bodies. This one breaks minds.
    \n\nWhether it really intends harm to humans is a hard question to answer, as it itself is also somewhat broken: it is a great Spirit's voice, torn away but not destroyed, erratically roaming the island. It can be heard from a far distance, and its sound is many things: sometimes an eerie keening, sometimes a direly fascinating song, sometimes a brain-numbing resonance more felt than heard - most often all of these at once, forming strange and perilous harmonies.
    \n\n(It may be argued that its song is entirely in the minds of those who hear it, for it does not ripple water nor shake trees. But this is hard to prove; it may simply be that Spirits of water and plant have learned not to heed it.)
    \n\nOver its long existence, Wandering Voice Keens Delirium has gathered up moonlight and sunlight, twining them together with strands of breath and mind to create a sometimes-visible form for its voice: its Incarna - while it leaves faint echoes of itself hither and yon across the island, that voice is always the primary locus of its existence, its primary tangle of power and reality.
    \n\nFortunately for the Dahan, that voice is much less deadly than it was before it was separated from its owner. They have figured out a number of ways to avoid the worst of its effects; while individuals may sometimes be caught unawares, it is quite rare for communities to be. Stopping one's ears helps a bit, as do certain line-patterns, but neither is generally sufficient on its own. Small Spirits with affinity for air, sounds, thought, or journeys can assist a fair bit, however; there are stories of long-ago days when someone might sacrifice themself to try and attract the attention of Finder of Paths Unseen or its assistants in hopes they might help, though thankfully such drastic measures are no longer needed. Also more reliable is singing certain types of songs together while working on cord-making, hair-braiding, sewing, and weaving; retreating to a fastness covered with vines or living earth; or both together.
    \n\nPerhaps the biggest mystery around Wandering Voice Keens Delirium is that it has chosen to focus on the Invaders. Perhaps it has been convinced by other Spirits - it can be communicated with, by some - or perhaps the Invaders simply call to its nature in some fashion.`,

    setup: `Put 2 PRESENCE on your starting board: 1 in land #6 and 1 in land #7. Put WANDERING VOICE KEENS DELIRIUM, Unempowered (UNEMPOWERED) side up, on your starting board in land #6.

You start with your 4 Unique Power Cards and 0 Energy.`,

    playStyle: `Very positional; has a highly mobile Incarna (particularly with lots of AIR) that adds STRIFE and chases EXPLORER/TOWN around as it roams the island.
    \n\nHas a harder time setting up DAHAN counterattacks, but can use Mind-Shattering Song to more directly harm Invaders with STRIFE - and earn a fair bit of FEAR in the process.`,

    specialRules: [
      {
        title: "A CLARION VOICE GIVEN FORM",
        description: `You have an Incarna (WANDERING VOICE KEENS DELIRIUM). If Empowered, it Isolates its land.`,
      },
      {
        title: "SPREAD TUMULT AND DELUSION",
        description: `When your Actions add/move WANDERING VOICE KEENS DELIRIUM to a land with Invaders, Add 1 STRIFE in the destination land.
        \n\nIn lands with or adjacent to WANDERING VOICE KEENS DELIRIUM: if STRIFE is present, DAHAN do not participate in Ravage. (They do not take Damage or counterattack. Isolate has no effect on WANDERING VOICE KEENS DELIRIUM and DAHAN being adjacent.)`,
      },
      {
        title: "SENSELESS ROAMING",
        description: `When your Actions add STRIFE to an EXPLORER/TOWN, you may Push it.`,
      },
    ],
    summaryOfPowers: [
      { offense: 2, control: 5, fear: 3, defense: 1, utility: 2 },
    ],
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

    bio: `In years past, Peace-Waters was a woodland pond, fed by a small river: a Spirit of contented coexistence and the gift of water. Humans and animals would drink in peace, then move on.
    \n\nThe Invaders, too, found Peace-Waters, drank, and moved on. Upriver, they built slaughterhouses and tanneries, pouring charnel-blood through the pool day after day, year after year.
    \n\nThe Spirit which used to be Peace-Waters has barely survived. It is no longer a Spirit of peace - but it has not yet found coherence in a new nature, and until it does, it is at risk of unraveling altogether.`,

    designLore: `In years and generations past, there was a small lake (or a large pond, depending on how you looked at it) nestled into a wooded area. It was fed by a large brook (or a small river) that ran its way down a rocky slope, producing a bit of spray and a pleasing burbling noise.
    \n\nYou might expect that animals would come to the lake to drink, and you would be more right than you knew - for the pool was (or was the home of, again depending on how you looked at it) Peace-Waters, a Spirit of contented co-existence and the gift of water. On its banks, predators did not hunt prey, and a curious feeling of peace spread through all who approached.
    \n\n(Do you wonder to yourself how the ecosystem survived such a thing? The protections of Peace-Waters only applied to guests, to animals visiting for water, not to those which lived within the waters itself. Any animal or human which came to drink would, after finding enough inner peace to lose track of time's passage, feel an urge to move onwards - prey animals could drink without fear, but predators could do quite well for themselves on the game-paths leading to and from Peace-Waters, so long as they were far enough away.)
    \n\nThen the Invaders came. Some of their explorers found Peace-Waters' lake, and in keeping with the nature of the place, decided it didn't feel quite right to site a mill there. But upstream... upstream of Peace-Waters, they settled, and built slaughterhouses and tanneries. With death’s blood and worse pouring into the pool day after day, Peace-Waters started to change.
    \n\nThey are - for now - still a Spirit of water and water's gift, but half-transformed to a Spirit of blood, predation, and wracking taint. Caught between these two deeply opposed natures, they are slowly disintegrating, trying to find coherence before dissolving completely.`,

    setup: `On your starting board, put 2 PRESENCE in a land with BLIGHT, then put 2 PRESENCE and 1 BLIGHT (from the box) in the highest-numbered land with a TOWN Setup Symbol.
    \n\nYou start with your 4 Unique Power Cards and 4 Energy. Set your 4 Healing Cards nearby.`,

    playStyle: `Starts off wounded, losing a PRESENCE or a Power Card every turn. Heals over the course of the game, finding a new nature - while some choices may be a touch better or worse due to Adversary, Power Card picks, teammates, etc., most combinations are viable in most games.
    \n\nBenefits from careful PRESENCE placement, both due to losing PRESENCE and because some if its Unique Powers must target from lands with BLIGHT.`,

    specialRules: [
      {
        title: "SEEKING A PATH TOWARDS HEALING",
        description: `After playing cards each Spirit Phase:
        \n\n• Claim a Healing Marker (Element Marker) matching whichever of WATER or ANIMAL you have more of. (You break ties.)
        \n• You may then Claim a Healing Card if you meet its requirements. (You can claim your first Healing Card on Turn 3.)
        \n• Then Destroy 1 PRESENCE or Forget a Power Card (unless a Healing Card just removed this rule).`,
      },
    ],
    summaryOfPowers: [
      { offense: 4, control: 5, fear: 2, defense: 1, utility: 1 },
    ],
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
