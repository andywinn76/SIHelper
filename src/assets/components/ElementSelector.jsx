import { useEffect, useState } from "react";
import ElementButton from "./ElementButton";
import { PiMinusCircleDuotone } from "react-icons/pi";

function ElementSelector({ setSelectedIcons, selectedIcons, isTouchDevice }) {
  const ELEMENTS = [
    "sun",
    "moon",
    "fire",
    "air",
    "water",
    "earth",
    "plant",
    "animal",
  ];

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

  return (
    <section>
      {/* Grid container for elements */}
      <div className="grid grid-cols-2 gap-2 my-8">
        {ELEMENTS.map((element) => (
          <div
            key={element}
            className="flex flex-row items-center justify-center space-x-4"
          >
            {/* + Button */}
            {/* <ElementButton
              className="bg-green-500 text-white px-2 py-1 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={() => handleAddIcon(element)}
            >
              +
            </ElementButton> */}

            {/* Element Icon */}
            <img
              className="w-10 h-10"
              src={`/SIHelper/images/elements/${element}.png`}
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
            <span className="font-bold text-orange-900 text-3xl text-center min-w-[1ch]">
              {selectedIcons[element] ? `${selectedIcons[element]}` : ""}
            </span>
          </div>
        ))}
      </div>

      <button
        className="clear mt-4"
        onClick={handleClearElements}
        disabled={Object.keys(selectedIcons).length === 0}
      >
        Clear
      </button>
    </section>
  );
}

export default ElementSelector;
