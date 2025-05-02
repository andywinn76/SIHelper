export const glossary = {
  "Spirit Tokens": [
    {
      term: "Badlands (BADLANDS)",
      definition: `One time each Action Damages Invaders in a land, increase that Damage by 1 per BADLANDS. 
      One time each Action Damages DAHAN in a land, increase that Damage by 1 per BADLANDS.`,
      flavorText: `Badlands are lands very difficult for humans to live in. They may be barren and 
      support little life, lush and verdant but also quite deadly, cursed in some way, etc. This doesn't affect 
      Spirits at all, but makes Invaders and Dahan more vulnerable - in game terms, they take more Damage.`,
    },
    {
      term: "Beasts (BEASTS)",
      definition: `Beasts tokens do not have an intrinsic effect, but they can be used in conjunction with certain Powers to deal damage to Invaders.`,
      flavorText: `Beasts tokens represent any sort of wild Beasts that are numerous, dangerous, or aggressive enough to be a problem for the Invaders. (The 
      Dahan know how to avoid them or drive them off well enough to prevent substantial casualties.) They are unpredictable allies, 
      and are much more likely to pick off EXPLORER than to attack TOWN or CITY.`,
    },
    {
      term: "Disease (DISEASE)",
      definition: `When Invaders would Build in a land with DISEASE, instead remove one DISEASE from that land.`,
      flavorText: `Disease tokens represent maladies and poor health. They reduce population: sometimes sharply, but more often by keeping growth in check. Disease is dangerous to the Dahan - not as devastating as was the case historically (thanks to their relationships with Spirits of healing and vigor), but some of the Token Events dealing with Disease can harm the Dahan.`,
    },
    {
      term: "Strife (STRIFE)",
      definition: `Whenever Invaders Damage the Dahan and/or the land, each attacking Invader with any number of STRIFE deals exactly 0 Damage and removes one STRIFE.`,
      flavorText: `Strife tokens represent internal turmoil and discard within the Invader ranks. In such turbulent and angry situations, fields go untended, farms remain small, and aggression against the Dahan becomes disorganized and ineffectual.`,
    },
    {
      term: "Wilds (WILDS)",
      definition: `When Invaders would Explore into a land with WILDS, instead remove one WILDS from that land.`,
      flavorText: `Wilds tokens represent lands that are perilous to explore - plants which look edible but are actually toxic, difficulty finding fresh water, especially dangerous paths, etc. However, once a given danger is discovered and noted (there are always a few survivors), it is easily avoided by future Explorers.`,
    },
  ],
  "Game Pieces": [
    {
      term: "Blight (BLIGHT)",
      definition: `A piece representing the Invaders' destruction of the land. Blight is added to a land when it takes 2 or more Damage in one Action. If a land has no Blight, it is Healthy. If a land has Blight, it is Blighted.`,
    },
    {
      term: "City (CITY)",
      definition: `A type of Invader piece. Does 3 Damage, has 4 Health. Destroying a City causes 2 Fear.`,
    },
    {
      term: "Dahan (DAHAN)",
      definition: `A piece representing a clan/village of local islanders. Does 2 Damage, and has 2 Health.`,
    },
    {
      term: "Explorer (EXPLORER)",
      definition: `A type of Invader piece. Does 1 Damage, has 1 Health.`,
    },
    {
      term: "Piece",
      definition: `Any physical game piece placed on the island except for players' Single-Turn Effect Markers. 
      At this time, the normal pieces are: DAHAN, PRESENCE, BLIGHT, all Invaders (EXPLORER/TOWN/CITY), and all 
      Spirit tokens (BADLANDS/BEASTS/DISEASE/WILDS/STRIFE). If a Scenario puts something else on the board (Scenario Markers, 
      Element Markers, etc.) for a game effect (as opposed to, e.g., tracking extra Damage), those are then considered pieces.`,
    },
    {
      term: "Presence (PRESENCE)",
      definition: `A piece showing where your Spirit lives in the land.`,
    },
    {
      term: "Sacred Site (SACRED SITE)",
      definition: `A land where a Spirit has 2 or more Presence.`,
    },
    {
      term: "Town (TOWN)",
      definition: `A type of Invader piece. Does 2 Damage, has 2 Health. Destroying a Town causes 1 Fear.`,
    },
  ],
  "Game Mechanics / Rules Terms": [
    {
      term: "Claim",
      definition: `Add to your Spirit panel permanently.`,
    },
    {
      term: "Damage",
      definition: `Harm done to the Invaders, the land, or Dahan. Whenever a card doesn't specify, it always means "to Invaders". Damage equal to an Invader or Dahan's Health destroys it. Dealing 2 or more Damage to a land adds one Blight to the land.`,
    },
    {
      term: "Defend",
      definition: `Guard a land against the Invaders. Reduces the Damage done by the Invaders to the land and Dahan by the specified amount.`,
    },
    {
      term: "Destroy",
      definition: `The elimination of a game piece (Invaders, Dahan, Spirit Presence, Island Boards) by dealing Damage equivalent to the piece's Health. Some effects also destroy pieces regardless of Damage or Health. The Destroyed pieces are generally returned to the supply.`,
    },
    {
      term: "Destroyed Presence (DESTROYED PRESENCE)",
      definition: `Presence that has been destroyed, removed, or replaced.`,
    },

    {
      term: "Distribute",
      definition: `Add the specified pieces in any arrangement to the lands specified. E.g.: "Distribute 3 TOWN among Coastal lands" could add 3 Towns to one Coastal land, or 2 to one land and 1 to another, or all 3 to different Coastal lands.`,
    },
    {
      term: "Downgrade",
      definition: `Replace with the next-smallest Invader. (Remove Explorer.)`,
    },
    {
      term: "Durable (Invader)",
      definition: `An Invader with extra Health equal to its base Health. "Destroy" effects instead deal Damage to pieces of that type equal to their base Health, though "Destroy All" works normally.`,
    },
    {
      term: "Effect",
      definition: `The text instructions of a card or other game element.`,
    },
    {
      term: "Energy",
      definition: `Pays for Power Cards. Carries over from turn to turn.`,
    },
    {
      term: "Explore",
      definition: `An Invader Action. Adds Explorers to accessible lands.`,
    },
    {
      term: "Fear (FEAR)",
      definition: `Fright done to Invaders. Advances Fear Markers, earning Fear Cards.`,
    },
    {
      term: "Fear Card",
      definition: `A card from the Fear Deck, earned by doing Fear to the Invaders. The Terror Level dividers are not Fear Cards.`,
    },
    {
      term: "Fear Effect",
      definition: `Anything done by an earned Fear Card.`,
    },
    {
      term: "Forget a Power Card",
      definition: `Permanently lose a Power Card from your hand, discard pile, or in play. Put it in the discard for its deck, or out of the game if it's Unique to your Spirit.`,
    },
    {
      term: "Gain a Power Card",
      definition: `In a normal game, draw four Minor Powers or four Major Powers and keep one. If using a Power Progression card, take your next Power Card. When you gain a Major Power by any means, you must Forget (lose) a Power Card.`,
    },
    {
      term: "Gather",
      definition: `Move into a land from adjacent land(s).`,
    },
    {
      term: "Growth",
      definition: `The first part of the Spirit Phase. Lets you place Presence, gain new Powers, and Reclaim Power Cards from your discard pile.`,
    },
    {
      term: "Health",
      definition: `How much Damage an Invader or Dahan can take before it is Destroyed.`,
    },
    {
      term: "Healthy Island",
      definition: `The Island starts the game Healthy. It becomes Blighted when the first pool of Blight on the Blight Card is emptied and the card flips to the Blighted side.`,
    },
    {
      term: "Invader",
      definition: `A City (CITY), Town (TOWN), or Explorer (EXPLORER).`,
    },
    {
      term: "Invader Action",
      definition: `One Ravage, Build, or Explore in one land. Usually caused by cards on the Invader Board, but can also be caused by Adversary effects, Events, Fear, Powers, etc.`,
    },
    {
      term: "Invader Board",
      definition: `The board which governs the Actions of the Invaders, including places for the Invader Deck and each of their three Actions. Additionally, the Invader Board features the Fear Pool, the Fear Deck, and the Blight Space where a Blight Card is placed during Setup.`,
    },
    {
      term: "Invader Card",
      definition: `Card in the Invader Deck, indicating in which lands the Invaders will act. Divided into Stage I, Stage II, and Stage III.`,
    },
    {
      term: "Invader Stage",
      definition: `The Stage shown on the top card of the Invader Deck: I, II, or III. If playing against Brandenburg-Prussia 2+, treat the early Stage III Card as if it were Stage II.`,
    },
    {
      term: "Isolate",
      definition: `Represents a land hard to travel to, from, or through. Prevents Invader Explore Actions, and prevents Invader pieces (EXPLORER/TOWN/CITY) from using adjacencies unless you let them.`,
    },
    {
      term: "Move",
      definition: `To put into a land from somewhere on the island, via Pushing, Gathering, or other means.`,
    },

    {
      term: "Origin",
      definition: `The land from which a Range is measured when targeting.`,
    },
    {
      term: "Outnumber",
      definition: `A outnumbers B when there are more A than B. This is true in lands where there is no B, as long as there is at least one A. (For instance, "where Dahan outnumber Cities" is true in lands with no Cities, so long as there's 1 or more Dahan.)`,
    },
    {
      term: "Permanent Element",
      definition: `An element shown on a Presence Track, or an element given to a Spirit by a certain effect that lasts for the rest of the game. While uncovered on a Presence Track, it gives an Element of that type.`,
    },
    {
      term: "Prepare",
      definition: `Set next to your Spirit panel for future use.`,
    },

    {
      term: "Push",
      definition: `Move to adjacent land(s).`,
    },
    {
      term: "Range",
      definition: `The maximum number of lands away you can use a Power or effect. You may always use a Power or effect at a shorter Range. Measured from your Presence unless otherwise specified. A Range of 0 means a land where you have Presence.`,
    },
    {
      term: "Ravage",
      definition: `An Invader Action. Invaders simultaneously deal Damage to the land and Dahan; surviving Dahan then fight back.`,
    },
    {
      term: "Reclaim",
      definition: `Return all (or the specified number) of your Power Cards to your hand. Unless otherwise specified, they come from your discard.`,
    },
    {
      term: "Reclaim One",
      definition: `Return one of your Power Cards to your hand. When revealed on a Presence Track, it may be done once per Spirit Phase, starting immediately.`,
    },
    {
      term: "Remove",
      definition: `Take off the board and return to the supply. Distinct from Destroy; Removing Invaders does not cause Fear.`,
    },
    {
      term: "Repeat",
      definition: `Use the text effects of a Power again. Doesn't grant additional Elements. When Repeating a Power, ignore any Repeat Effects.`,
    },
    {
      term: "Replace",
      definition: `Remove one piece and put another piece in its place.`,
    },
    {
      term: "Resolve",
      definition: `Perform the effects of an Action or other game item, process, or rule (e.g., "Resolve a Power", "Resolve an Invader Card"). Repeating a Power means Resolving it again. Same formal meaning as "use".`,
    },
    {
      term: "Return Presence",
      definition: `Take Presence from the island and return it to a legal spot on your Presence tracks.`,
    },
    {
      term: "Showing Invader Card",
      definition: `An Invader Card that is face-up in any of the Invader Action spaces on the Invader Board, but not the discard (so you know the Invaders will act in that land type in the next Invader Phase).`,
    },
    {
      term: "Skip",
      definition: `When you would perform the specified Action, instead don't.`,
    },
    {
      term: "Skip one Invader Action",
      definition: `You don't need to choose which Action you're going to skip in advance. Once during this turn, when an Invader Action would happen in the affected land, you can skip it.`,
    },
    {
      term: "Stage",
      definition: `See Invader Stage.`,
    },

    {
      term: "Take",
      definition: `Put the top card of the specified Power Deck into your hand. Do not forget when taking a Major Power.`,
    },
    {
      term: "Target",
      definition: `The land or Spirit a Power affects.`,
    },
    {
      term: "Target board",
      definition: `Shorthand for "the board containing target land".`,
    },
    {
      term: "Terror Level",
      definition: `A number from 1-3, representing how frightened the Invaders are. Sets the current Victory Condition.`,
    },
    {
      term: "Threshold Effects",
      definition: `Part of a Power's effects which depend on having certain Elements that turn.`,
    },
    {
      term: "Triggered Action",
      definition: `An Action that happens because certain conditions were met (e.g., "after one of your Powers Removes BLIGHT, Destroy 1 of your PRESENCE").`,
    },

    {
      term: "Up To",
      definition: `May be zero. "Up to 3" means "0, 1, 2, or 3".`,
    },
    {
      term: "Upgrade",
      definition: `Replace with the next-largest Invader.`,
    },
    {
      term: "Use",
      definition: `Perform the effects of an Action or other game item, process, or rule. Repeating a Power means using it again. Same formal meaning as "resolve".`,
    },
  ],
  "Powers and Cards": [
    {
      term: "Innate Power",
      definition: `A Power printed on your Spirit Panel.`,
    },
    {
      term: "Power",
      definition: `A Power Card or Innate Power.`,
    },
    {
      term: "Power Card",
      definition: `A Power on a card. May be a Minor Power, a Major Power, or a Unique Power.`,
    },
    {
      term: "Power Progression",
      definition: `A fixed sequence of Power Cards a Spirit gains instead of the usual "Draw 4, keep 1" from a Power Card Deck. Used in introductory games only.`,
    },
  ],
  "Board Structure & Geography": [
    {
      term: "Coastal land",
      definition: `A land readily accessible to ships, adjacent to the printed Ocean area.`,
    },
    {
      term: "Inland land",
      definition: `A land not adjacent to the printed Ocean area.`,
    },
    {
      term: "Island",
      definition: `The entire playing area of the game comprised of one or more Island Boards.`,
    },
    {
      term: "Island Board",
      definition: `An individual punchboard piece that comprises the Island. The reverse has a thematic map for more experienced players.`,
    },
    {
      term: "Land",
      definition: `A bordered area on the island map (excluding Ocean). Whenever a land takes 2 Damage, you add a BLIGHT to it.`,
    },
    {
      term: "Land Health",
      definition: `The Land has a Health of 2. If it takes this much Damage in a single Action, you Add BLIGHT.`,
    },
    {
      term: "Land Type",
      definition: `A description of what sort of land to act upon. This may be a terrain, Coastal/Inland, or a requirement for what's in/not in the land (e.g. "A land with Invaders").`,
    },
    {
      term: "Land with (Piece)",
      definition: `A land having at least one (Piece). See Piece.`,
    },
    {
      term: "Match",
      definition: `A land matches an Invader Card if it has a Land Type shown on the Invader Card.`,
    },
    {
      term: "Ocean",
      definition: `Where the Invaders sail in. The stretch of Ocean on each Island Board determines which lands are Coastal. Oceans are not lands.`,
    },
    {
      term: "Terrain",
      definition: `Jungle, Mountain, Sands, or Wetlands. Each land has one terrain.`,
    },
    {
      term: "Type of Land",
      definition: `See Land Type.`,
    },
    {
      term: "Your Land",
      definition: `A land with your Presence in it.`,
    },
  ],
  "Adversaries/Scenarios/Events": [
    {
      term: "Dahan Event",
      definition: `The portion of an Event Card in which the Dahan act on their own.`,
    },
    {
      term: "Escalation Effect ESCALATION",
      definition: `Something an Adversary does each time Exploring reveals an Invader Card with an Adversary icon on it. This icon appears only on Stage II cards.`,
    },
    {
      term: "Event",
      definition: `An unforeseen development, resolved before Earned Fear Cards each Invader Phase after the first turn.`,
    },
    {
      term: "Scenario",
      definition: `A situation providing alternate rules/victory conditions. Increases difficulty and changes how the game plays.`,
    },
    {
      term: "Token Event",
      definition: `The portion of an Event Card with an effect centering around Beasts, Disease, or Strife tokens.`,
    },
  ],
  "Element-Related Terms": [
    {
      term: "Element",
      definition: `Affinity with an aspect of nature, usually granted by a Power Card. Lets you use threshold effects.`,
    },
    {
      term: "Elemental Thresholds",
      definition: `See Threshold Effects.`,
    },
  ],
  "Edge Cases/Special Behaviors": [
    {
      term: "Does not participate in Ravage",
      definition: `Specifies pieces to be ignored during the Ravage Step and Ravage Actions.`,
    },
    {
      term: "Exactly (Range) away",
      definition: `A land is exactly some Range if it is that Range, and there is no shorter path to that land.`,
    },
    {
      term: "Extra Invader Action",
      definition: `Invader Actions caused by Adversary effects, Events, Fear, Powers, a Scenario, or anything other than an Invader Card on one of the three Action Spaces on the Invader Board.`,
    },
  ],
};
