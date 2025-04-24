import React from "react";

const BASE_URL = import.meta.env.BASE_URL;

export function renderIcons(text) {

  const normalizeIconMap = (map) =>
    Object.fromEntries(
      Object.entries(map).map(([key, val]) =>
        typeof val === "string" ? [key, { src: val }] : [key, val]
      )
    );

  const iconMap = normalizeIconMap({
    // Elements (SVG or PNG)
    AIR: "elements/air.png",
    MOON: "elements/moon.png",
    FIRE: "elements/fire.png",
    SUN: "elements/sun.png",
    EARTH: "elements/earth.png",
    PLANT: "elements/plant.png",
    ANIMAL: "elements/animal.png",
  
    // Ranges
    "RANGE 0": {src: "icons/range_0.png", className: "inline-block w-auto h-5 mx-1"},
    "RANGE 1": {src: "icons/range_1.png", className: "inline-block w-auto h-5 mx-1"},
    "RANGE 2": {src: "icons/range_2.png", className: "inline-block w-auto h-5.5 mx-1"},
    "RANGE 3": {src: "icons/range_3.png", className: "inline-block w-auto h-5 mx-1"},
    "RANGE 4": {src: "icons/range_4.png", className: "inline-block w-auto h-5 mx-1"},
    "PLUS 1 RANGE": {src: "icons/range_plus_1.png", className: "inline-block w-auto h-5 mx-1"},
    NONE: {
      src: "icons/no-range.png",
      className: "inline-block w-auto h-0.75 mx-1",
    },
  
    // Spirit board icons
    CITY: "icons/city.png",
    TOWN: { src: "icons/town.png", className: "inline-block w-auto h-5 mx-1"},
    DAHAN: "icons/dahan.png",
    EXPLORER: "icons/explorer.png",
    BEASTS: "icons/beast.png",
    BLIGHT: "icons/blight.png",
    WILDS: "icons/wilds.png",
    BADLANDS: "icons/badlands.png",
    DISEASE: "icons/disease.png",
    STRIFE: "icons/strife.png",
    FEAR: "icons/fear.png",
    JUNGLE: "icons/jungle.png",
  
    // Special terms
    FAST: "icons/fast.png",
    SLOW: "icons/slow.png",
    PRESENCE: "icons/presence.png",
    "DESTROYED PRESENCE": "icons/DestroyedPresence.png",
    "SACRED SITE": {src: "icons/sacred-site.png", className: "inline-block w-auto h-6 mx-0.5"},
    PLAYER: "icons/player-spirit.png",
    "POWER CARD": "icons/PowerCard.svg",
    "LAND WITHOUT BLIGHT": {
      src: "icons/NoBlight.svg",
      className: "inline-block w-auto h-8 mx-1",
    },
  
    // Spirit-specific
    "BREATH OF DARKNESS": "icons/BreathOfDarkness.svg",
    "ENDLESS DARK": "icons/endlessdark.svg",
    "EMBER-EYED BEHEMOTH": "icons/EmberEyedBehemoth.svg",
    IMPENDING: "icons/Impending.svg",
    QUAKE: "icons/Quake.svg",
    "TOWERING ROOTS OF THE JUNGLE": "icons/ToweringRoots.svg",
    "WANDERING VOICE KEENS DELIRIUM": "icons/WanderingVoice.svg",
  });
  
  const keywords = Object.keys(iconMap);
  const regex = new RegExp(`(${keywords.join("|")})`, "g");
  const parts = text.split(regex);

  return parts.map((part, i) => {
    const icon = iconMap[part];
    if (icon) {
      const { src, className = "inline-block h-6 w-auto mx-1" } = icon; // default here 👈
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/${src}`}
          alt={part.toLowerCase()}
          className={`inline-block ${className}`}
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
