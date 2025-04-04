import { useState } from "react";
import { spirits } from "../data/spirits";
import { useElements } from "../contexts/ElementContext";
import {
  renderElementIcons,
  renderIcons,
} from "../utils/renderIcons";
import SpiritSelector from "./SpiritSelector";

function Powers() {
  const { currentElements } = useElements();
  const [selectedSpirit, setSelectedSpirit] = useState(
    "Lightning's Swift Strike"
  );
  const spiritData = spirits[selectedSpirit];

  const handleSpiritChange = (event) => {
    setSelectedSpirit(event.target.value);
  };

  function checkThreshold(thresholdElements) {
    return Object.entries(thresholdElements).every(
      ([element, count]) => currentElements[element] >= count
    );
  }

  if (!spiritData) {
    return <div>No data found for selected spirit.</div>;
  }

  const powers = spiritData.innatePowers;

  return (
    <div className="powers-list">
    <div className="power-card">
    <SpiritSelector
            handleSpiritChange={handleSpiritChange}
            selectedSpirit={selectedSpirit}
          />
      {powers.map((power, powerIndex) => (
        
          <>
          <h3 className="power-title uppercase tracking-wider">{power.name}</h3>
          <table className="power-meta-table mb-2">
            <thead>
              <tr>
                <th className="font-noto">SPEED</th>
                <th className="font-noto">RANGE</th>
                <th className="font-noto">TARGET LAND</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{renderIcons(power.speed)}</td>
                <td>{renderIcons(power.range)}</td>
                <td className="target-text font-mouse tracking-wider uppercase">{renderIcons(power.target)}</td>
              </tr>
            </tbody>
          </table>
          {power.special && <p className="px-3 font-lato text-gray-800">{renderIcons(power.special)}</p>}

          <table className="threshold-table w-full mt-2 text-left mb-4">
            <tbody>
              {power.thresholds.map((threshold, i) => {
                const unlocked = checkThreshold(threshold.elements);
                return (
                  <>
                    <tr
                      key={i}
                      className={`threshold-row ${
                        unlocked ? "unlocked" : "locked"
                      }`}
                    >
                      <td className="threshold-icons">
                        <div className="flex flex-wrap items-center gap-1">
                          {renderElementIcons(threshold.elements)}
                        </div>
                      </td>
                      <td className="threshold-effect">
                        {renderIcons(threshold.description)}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          {power.specialNote && <p className="px-3 font-lato text-gray-700">{power.specialNote}</p>}
          </>
        
      ))}
    </div></div>
  );
}

export default Powers;
