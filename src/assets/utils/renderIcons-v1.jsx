const BASE_URL = import.meta.env.BASE_URL;

export function renderIcons(text) {
  console.log("TEXT RECEIVED BY renderIcons:", text);
  if (!text) return null;
  const elements = ["AIR", "MOON", "FIRE", "SUN", "EARTH", "PLANT", "ANIMAL"];
  const ranges = [
    "RANGE 0",
    "RANGE 1",
    "RANGE 2",
    "RANGE 3",
    "RANGE 4",
    "PLUS 1 RANGE",
    "NONE",
  ];
  const spiritBoardIcons = [
    "CITY",
    "TOWN",
    "DAHAN",
    "EXPLORER",
    "BEASTS",
    "BLIGHT",
    "WILDS",
    "FEAR",
    "BADLANDS",
    "DISEASE",
    "STRIFE",
    "JUNGLE",
  ];
  const specialTerms = [
    "FAST",
    "SLOW",
    "PRESENCE",
    "DESTROYED PRESENCE",
    "SACRED SITE",
    "POWER CARD",
    "PLAYER",
    "LAND WITHOUT BLIGHT",
    "PLUS 1 ENERGY",
    "ELEMENT",
  ];
  const spiritTerms = [
    "BREATH OF DARKNESS",
    "ENDLESS DARK",
    "EMBER-EYED BEHEMOTH",
    "IMPENDING",
    "QUAKE",
    "TOWERING ROOTS OF THE JUNGLE",
    "WANDERING VOICE KEENS DELIRIUM",
  ];

  const keywords = [
    ...elements,
    ...ranges,
    ...spiritBoardIcons,
    ...specialTerms,
    ...spiritTerms,
  ].sort((a, b) => b.length - a.length);
  const regex = new RegExp(`(${keywords.join("|")})`, "g");
  const parts = text.split(regex);

  return parts.map((part, i) => {
    if (part === "FAST") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/fast.png`}
          alt="Fast"
          className="inline-block w-auto h-6 mx-1"
        />
      );
    }
    if (part === "SLOW") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/slow.png`}
          alt="Slow"
          className="inline-block w-auto h-6 mx-1"
        />
      );
    }
    if (part === "PRESENCE") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/presence.png`}
          alt="Presence"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "SACRED SITE") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/sacred-site.png`}
          alt="Sacred Site"
          className="inline-block w-auto h-6 mx-1"
        />
      );
    }
    if (part === "PLAYER") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/player-spirit.png`}
          alt="Player spirit"
          className="inline-block w-auto h-6 mx-1"
        />
      );
    }
    if (part === "NONE") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/no-range.png`}
          alt="None"
          className="inline-block w-auto h-0.5 mx-1"
        />
      );
    }
    if (part === "RANGE 0") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/range_0.png`}
          alt="Range 0"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "RANGE 1") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/range_1.png`}
          alt="Range 1"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "RANGE 2") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/range_2.png`}
          alt="Range 2"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "CITY") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/city.png`}
          alt="City"
          className="inline-block w-auto h-6 mx-1"
        />
      );
    }
    if (part === "TOWN") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/town.png`}
          alt="Town"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "FEAR") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/fear.png`}
          alt="fear"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "DAHAN") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/dahan.png`}
          alt="Dahan"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "FIRE") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/fire.png`}
          alt="Fire"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "AIR") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/air.png`}
          alt="Air"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "MOON") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/elements/moon.png`}
          alt="Moon"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "SUN") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/elements/sun.png`}
          alt="Sun"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "PLANT") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/elements/plant.png`}
          alt="Plant"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "EARTH") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/elements/earth.png`}
          alt="Earth"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "ANIMAL") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/elements/animal.png`}
          alt="animal"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "INVADERS") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/invaders.png`}
          alt="Invaders"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "EXPLORER") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/explorer.png`}
          alt="explorer"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "BLIGHT") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/blight.png`}
          alt="blight"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "BEASTS") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/beast.png`}
          alt="beasts"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "BREATH OF DARKNESS") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/BreathOfDarkness.svg`}
          alt="Breath of Darkness"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "ENDLESS DARK") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/endlessdark.svg`}
          alt="Endless Dark"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "WANDERING VOICE KEENS DELIRIUM") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/WanderingVoice.svg`}
          alt="Wandering Voice Keens Delirium"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }

    if (part === "EMBER-EYED BEHEMOTH") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/EmberEyedBehemoth.svg`}
          alt="Ember-Eyed Behemoth Incarnate token"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "TOWERING ROOTS OF THE JUNGLE") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/ToweringRoots.svg`}
          alt="Towering Roots of the Jungle"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "IMPENDING") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/Impending.svg`}
          alt="Impending icon"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "QUAKE") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/Quake.svg`}
          alt="Quake icon"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "POWER CARD") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/PowerCard.svg`}
          alt="Power Card Icon"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "LAND WITHOUT BLIGHT") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/NoBlight.svg`}
          alt="Land without Blight"
          className="inline-block w-auto h-8 mx-1"
        />
      );
    }
    // if (part === "PLUS1ENERGY") {
    //   return (
    //     <img
    //       key={i}
    //       src={`${BASE_URL}/images/icons/plus_1_energy.png`}
    //       alt="plus 1 energy"
    //       className="inline-block w-auto h-8 mx-1"
    //     />
    //   );
    // }
    if (part === "PLUS1ENERGY") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/plus_1_energy.png`}
          alt="plus 1 energy"
          className="inline-block w-auto h-8 mx-1"
        />
      );
    }
    if (part === "ELEMENT") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/element.png`}
          alt="element"
          className="inline-block w-auto h-8 mx-1"
        />
      );
    }
    if (part === "WILDS") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/wilds.png`}
          alt="wilds"
          className="inline-block w-auto h-8 mx-1"
        />
      );
    }
    if (part === "BADLANDS") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/badlands.png`}
          alt="badlands"
          className="inline-block w-auto h-8 mx-1"
        />
      );
    }
    if (part === "DISEASE") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/disease.png`}
          alt="Disease"
          className="inline-block w-auto h-8 mx-1"
        />
      );
    }
    if (part === "STRIFE") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/strife.png`}
          alt="Strife"
          className="inline-block w-auto h-6 mx-1"
        />
      );
    }
    if (part === "PLUS 1 RANGE") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/range_plus_1.png`}
          alt="plus 1 range"
          className="inline-block w-auto h-8 mx-1"
        />
      );
    }
    if (part === "JUNGLE") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/jungle.png`}
          alt="jungle land"
          className="inline-block w-auto h-8 mx-1"
        />
      );
    }
    if (part === "DESTROYED PRESENCE") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/DestroyedPresence.png`}
          alt="destroyed presence"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function renderElementIcons(elements) {
  return Object.entries(elements).map(([element, count]) =>
    [...Array(count)].map((_, i) => (
      <img
        key={`${element}-${i}`}
        src={
          element === "cardPlays"
            ? `${BASE_URL}images/icons/PowerCard.svg`
            : `${BASE_URL}images/elements/${element}.png`
        }
        alt={element}
        className="inline-block w-6 h-6 mx-0.5"
      />
    ))
  );
}
