import React from "react";
import { spirits } from "../data/spirits.js";
import { useSpirit } from "../contexts/SpiritContext";
import { renderIcons } from "../utils/renderIcons.jsx";
import SummaryOfPowersChart from "./SummaryOfPowersChart";
import Paragraphs from "./Paragraphs";
import ComplexityTag from "./ComplexityTag";

export default function SetupSection() {
  const { selectedSpirit } = useSpirit();
  const spiritData = spirits[selectedSpirit];

  if (!spiritData) {
    return (
      <p className="font-lato text-base flex justify-center items-center text-center py-3">
        Select a Spirit to view setup and complexity.
      </p>
    );
  }

  if (!spiritData.setup || !spiritData.complexity || !spiritData.playStyle) {
    return (
      <p className="font-lato text-base flex justify-center items-center text-center py-3">
        Setup information is coming soon.
      </p>
    );
  }

  const setup = spiritData.setup;
  const complexity = spiritData.complexity;
  const playStyle = spiritData.playStyle;

  return (
    <section className="setup-bg p-4 shadow-sm">
      <h2 className="text-xl font-bold mb-3 text-blue-900">Setup</h2>
      <Paragraphs
        text={setup}
        className="font-lato text-base icon-sizing px-2 mb-6"
      />

      <h2 className="text-xl font-bold mb-3 text-blue-900">Complexity</h2>
      <ComplexityTag level={complexity} />
      <h2 className="text-xl font-bold mb-3 text-blue-900">Play Style</h2>
      <Paragraphs
        text={playStyle}
        className="font-lato text-base icon-sizing"
      />

      <SummaryOfPowersChart />
    </section>
  );
}
