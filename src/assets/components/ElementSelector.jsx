import { useEffect, useState } from "react";
import { useElements } from "../contexts/ElementContext";
import { useSpirit } from "../contexts/SpiritContext";

const BASE_URL = import.meta.env.BASE_URL;

function ElementSelector({ isTouchDevice }) {
  const [selectedIcons, setSelectedIcons] = useState({});
  const { selectedSpirit } = useSpirit();
  const {
    allElements,
    currentElements,
    addElement,
    resetElements,
    setCurrentElements,
  } = useElements();
  const [cardPlays, setCardPlays] = useState(0);

  // Handle clicking on an element to add it
  const handleAddIcon = (element) => {
    setSelectedIcons((prev) => ({
      ...prev,
      [element]: (prev[element] || 0) + 1,
    }));
  };

  // Handle clicking to remove an element
  const handleRemoveIcon = (element) => {
    setSelectedIcons((prev) => {
      const updatedIcons = { ...prev };
      if (updatedIcons[element] > 1) {
        updatedIcons[element] -= 1;
      } else {
        delete updatedIcons[element];
      }
      return updatedIcons;
    });
  };

  function handleClearElements() {
    setSelectedIcons({});
    setCurrentElements((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((key) => [key, 0])),
    }));
    setCardPlays(0);
  }

  // Long press detection state
  const [pressTimer, setPressTimer] = useState(null);

  const startLongPress = (element) => {
    setPressTimer(setTimeout(() => handleRemoveIcon(element), 600)); // 600ms for long press
  };

  const cancelLongPress = () => {
    if (pressTimer) clearTimeout(pressTimer);
  };

  useEffect(() => {
    // Prevent default right-click behavior
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  useEffect(() => {
    // Push selectedIcons to context as currentElements
    setCurrentElements((prev) => ({
      ...prev,
      ...selectedIcons,
      ...(selectedSpirit === "Dances Up Earthquakes" && { cardPlays }), // inject cardPlays into context if needed
    }));
  }, [selectedIcons, cardPlays, selectedSpirit, setCurrentElements]);

  return (
    <section>
      {/* Grid container for elements */}
      <div className="grid grid-cols-4 gap-2 gap-y-3 mt-4 mb-6 mx-4 sm:mx-8">
        {allElements.map((element) => (
          <div
            key={element}
            className="flex flex-row items-center justify-center space-x-2 px-1 sm:px-2"
          >
            <img
              className="w-10 h-10"
              src={`${BASE_URL}/images/icons/${element}.png`}
              alt={element}
              onClick={() => handleAddIcon(element)}
              onContextMenu={(e) => {
                e.preventDefault();
                handleRemoveIcon(element);
              }}
              onMouseDown={() => isTouchDevice || startLongPress(element)}
              onMouseUp={cancelLongPress}
              onTouchStart={() => startLongPress(element)}
              onTouchEnd={cancelLongPress}
            />

            {/* Element Count */}
            <span className="font-bold text-orange-900 text-3xl sm:text-2xl mr-2 text-center min-w-[1ch] font-reem">
              {selectedIcons[element] ? `${selectedIcons[element]}` : ""}
            </span>
          </div>
        ))}
      </div>
      {selectedSpirit === "Dances Up Earthquakes" && (
        <div className="text-center text-orange-900 text-xl">
          <span className="mb-0.5 font-reem">
            <img
              className="inline h-7 px-1 w-auto mb-0.5"
              src={`${BASE_URL}images/icons/PowerCard.svg`}
              alt="power card icon"
            />{" "}
            Power Card Plays: <span className="font-bold text-orange-900 text-3xl sm:text-2xl ml-2 text-center font-reem">{cardPlays}</span>
          </span>
          <div className="flex justify-center gap-4 mb-3">
            <button
              onClick={() => setCardPlays(Math.max(cardPlays - 1, 0))}              
              className="text-black text-4xl px-4 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={cardPlays === 0}
            >
              -
            </button>
            <button
              onClick={() => setCardPlays(cardPlays + 1)}
              className="text-black text-4xl px-4"
            >
              +
            </button>
          </div>
        </div>
      )}

      <button
        className="clear mb-10"
        onClick={handleClearElements}
        disabled={
          Object.values(selectedIcons).reduce((sum, val) => sum + val, 0) ===
            0 && currentElements.cardPlays === 0
        }
      >
        Clear
      </button>
    </section>
  );
}

export default ElementSelector;
