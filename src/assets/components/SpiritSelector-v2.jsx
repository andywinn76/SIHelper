import { useState } from "react";
import { spirits } from "../data/spirits.js";
import { useSpirit } from "../contexts/SpiritContext";

const BASE_URL = import.meta.env.BASE_URL;

function SpiritSelector() {
  const { selectedSpirit, setSelectedSpirit } = useSpirit();
  const [showGrid, setShowGrid] = useState(false);
  const [thumbnailsLoaded, setThumbnailsLoaded] = useState({});

  const [complexityFilter, setComplexityFilter] = useState("all");

  const handleSelect = (spiritName) => {
    setSelectedSpirit(spiritName);
    setShowGrid(false);
  };

  const handleImageLoad = (spiritName) => {
    setThumbnailsLoaded((prev) => ({ ...prev, [spiritName]: true }));
  };

  const getComplexityBorder = (complexity) => {
    switch (complexity) {
      case "low":
        return "border-green-500";
      case "moderate":
        return "border-yellow-300";
      case "high":
        return "border-orange-400";
      case "very high":
        return "border-red-400";
      default:
        return "border-gray-300";
    }
  };

  return (
    <div className="mt-2 mb-2 flex flex-col items-center space-y-2">
      <button
        className="appearance-none text-center font-mouse text-2xl text-amber-700 bg-white/70 border-2 
        border-amber-400 rounded-xl px-6 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
        onClick={() => setShowGrid(!showGrid)}
      >
        {selectedSpirit || "Select a Spirit"}
      </button>

      {showGrid && (
        <>
          <div className="w-full flex justify-center">
            <select
              value={complexityFilter}
              onChange={(e) => setComplexityFilter(e.target.value)}
              className="mb-3 px-2 py-1 rounded border text-sm bg-white/70 text-center"
            >
              <option className="bg-white" value="all">
                All Complexities
              </option>
              <option className="bg-green-100" value="low">
                Low
              </option>
              <option className="bg-yellow-100" value="moderate">
                Moderate
              </option>
              <option className="bg-orange-100" value="high">
                High
              </option>
              <option className="bg-red-100" value="very high">
                Very High
              </option>
            </select>
          </div>
          <div
            className="mt-2 lg:mx-4 lg:px-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 md:gap-y-3 lg:grid-cols-4 gap-1 
        md:gap-1 lg:gap-4 lg:gap-y-4 lg:gap-x-9"
          >
            {Object.entries(spirits)
              .filter(
                ([_, data]) =>
                  complexityFilter === "all" ||
                  data.complexity === complexityFilter
              )
              .map(([name, spiritData]) => (
                <div
                  key={name}
                  className="cursor-pointer flex flex-col items-center"
                  onClick={() => handleSelect(name)}
                >
                  {!thumbnailsLoaded[name] && (
                    <div className="w-24 h-20 flex items-center justify-center bg-gray-200 rounded shadow">
                      <div className="loader border-4 border-t-transparent border-gray-600 rounded-full w-6 h-6 animate-spin"></div>
                    </div>
                  )}
                  <div
                    className={`relative w-24 h-16 overflow-hidden rounded shadow border-2 ${getComplexityBorder(
                      spiritData.complexity
                    )}`}
                  >
                    <img
                      src={`${BASE_URL}/images/spirit_thumbnails/${spiritData.thumbnail}`}
                      alt={name}
                      onLoad={() => handleImageLoad(name)}
                      className={`object-fill w-full h-full transition-opacity duration-300 ${
                        thumbnailsLoaded[name] ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  <span className="text-[0.75rem] mt-1 text-center w-20 break-words">
                    {name}
                  </span>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SpiritSelector;
