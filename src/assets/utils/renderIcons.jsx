import React from "react";

const BASE_URL = import.meta.env.BASE_URL;

export function renderIcons(text) {
  const parts = text.split(
    /(Fast|Slow|City|Town|Dahan|Air|Moon|Fire|Sun|Earth|Plant|Animal|Fear|INVADERS|Explorer|Blight|Presence|DestroyedPresence|Sacred|Range 0|Range 1|Range 2|Range 3|Range 4|Player|None|Beasts|Incarna|Breath of Darkness|Endless Dark|Ember-Eyed Behemoth|Impending|Quake|PowerCard|Land without Blight|Towering Roots of the Jungle|Wandering Voice Keens Delirium|Wilds|Badlands|Disease|Strife|Plus1 Range|Jungle)/g
  );

  return parts.map((part, i) => {
    if (part === "Fast") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/fast.png`}
          alt="Fast"
          className="inline-block w-auto h-6 mx-1"
        />
      );
    }
    if (part === "Slow") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/slow.png`}
          alt="Presence"
          className="inline-block w-auto h-6 mx-1"
        />
      );
    }
    if (part === "Presence") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/presence.png`}
          alt="Presence"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Sacred") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/sacred-site.png`}
          alt="Sacred Site"
          className="inline-block w-auto h-6 mx-1"
        />
      );
    }
    if (part === "Player") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/player-spirit.png`}
          alt="Player spirit"
          className="inline-block w-auto h-6 mx-1"
        />
      );
    }
    if (part === "None") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/no-range.png`}
          alt="None"
          className="inline-block w-auto h-0.5 mx-1"
        />
      );
    }
    if (part === "Range 0") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/range_0.png`}
          alt="Range 0"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Range 1") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/range_1.png`}
          alt="Range 1"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Range 2") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/range_2.png`}
          alt="Range 2"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "City") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/city.png`}
          alt="City"
          className="inline-block w-auto h-6 mx-1"
        />
      );
    }
    if (part === "Town") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/town.png`}
          alt="Town"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Fear") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/fear.png`}
          alt="fear"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Dahan") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/dahan.png`}
          alt="Dahan"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Fire") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/elements/fire.png`}
          alt="Fire"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Air") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/elements/air.png`}
          alt="Air"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Moon") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/elements/moon.png`}
          alt="Moon"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Sun") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/elements/sun.png`}
          alt="Sun"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Plant") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/elements/plant.png`}
          alt="Plant"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Earth") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/elements/earth.png`}
          alt="Earth"
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
    if (part === "Explorer") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/explorer.png`}
          alt="explorer"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Blight") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/blight.png`}
          alt="blight"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Beasts") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/beast.png`}
          alt="beasts"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Breath of Darkness") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/BreathOfDarkness.svg`}
          alt="Breath of Darkness"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Endless Dark") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/endlessdark.svg`}
          alt="Endless Dark"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Wandering Voice Keens Delirium") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/WanderingVoice.svg`}
          alt="Wandering Voice Keens Delirium"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }

    if (part === "Ember-Eyed Behemoth") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/EmberEyedBehemoth.svg`}
          alt="Ember-Eyed Behemoth Incarnate token"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Towering Roots of the Jungle") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/ToweringRoots.svg`}
          alt="Towering Roots of the Jungle"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Impending") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/Impending.svg`}
          alt="Impending icon"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Quake") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/Quake.svg`}
          alt="Quake icon"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "PowerCard") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/PowerCard.svg`}
          alt="Power Card Icon"
          className="inline-block w-auto h-5 mx-1"
        />
      );
    }
    if (part === "Land without Blight") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/NoBlight.svg`}
          alt="Land without Blight"
          className="inline-block w-auto h-8 mx-1"
        />
      );
    }
    if (part === "Wilds") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/wilds.png`}
          alt="wilds"
          className="inline-block w-auto h-8 mx-1"
        />
      );
    }
    if (part === "Badlands") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/badlands.png`}
          alt="badlands"
          className="inline-block w-auto h-8 mx-1"
        />
      );
    }
    if (part === "Disease") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/disease.png`}
          alt="Disease"
          className="inline-block w-auto h-8 mx-1"
        />
      );
    }
    if (part === "Strife") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/strife.png`}
          alt="Strife"
          className="inline-block w-auto h-6 mx-1"
        />
      );
    }
    if (part === "Plus1 Range") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/range_plus_1.png`}
          alt="plus 1 range"
          className="inline-block w-auto h-8 mx-1"
        />
      );
    }
    if (part === "Jungle") {
      return (
        <img
          key={i}
          src={`${BASE_URL}/images/icons/jungle.png`}
          alt="jungle land"
          className="inline-block w-auto h-8 mx-1"
        />
      );
    }
    if (part === "DestroyedPresence") {
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
