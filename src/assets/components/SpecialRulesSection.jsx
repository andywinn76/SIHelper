import { spirits } from "../data/spirits.js";
import { useSpirit } from "../contexts/SpiritContext";
import Paragraphs from "./Paragraphs";

export default function SpecialRulesSection() {
  const { selectedSpirit } = useSpirit();
  const spiritData = spirits[selectedSpirit];

  if (!spiritData) {
    return (
      <p className="font-lato text-base flex justify-center items-center text-center py-3">
        Select a spirit to view special rules.
      </p>
    );
  }

  if (!spiritData.specialRules) {
    return (
      <p className="font-lato text-base flex justify-center items-center text-center py-3">
        Special Rules coming soon.
      </p>
    );
  }

  const specialRules = spiritData.specialRules;

  return (
    <section className="setup-bg px-4 py-6 shadow-sm">
      <h2 className="text-xl font-bold mb-3 text-blue-900">Special Rules</h2>
      {specialRules.map((rule, index) => (
        <div key={index}>
          <h3 className="power-title uppercase tracking-wider">{rule.title}</h3>
          <Paragraphs
            text={rule.description}
            className="font-lato text-base icon-sizing"
          />
        </div>
      ))}
    </section>
  );
}
