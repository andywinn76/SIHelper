import { useEffect, useState } from "react";
import { useElements } from "../contexts/ElementContext";

function ElementSelector({ isTouchDevice }) {
  const [selectedIcons, setSelectedIcons] = useState({});
  const {
    allElements,
    currentElements,
    addElement,
    resetElements,
    setCurrentElements,
  } = useElements();

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
    resetElements();
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
    }));
  }, [selectedIcons, setCurrentElements]);

  return (
    <section>
      {/* Grid container for elements */}
      <div className="grid grid-cols-4 gap-2 gap-y-3 my-8 mx-4 sm:mx-8">
        {allElements.map((element) => (
          <div
            key={element}
            className="flex flex-row items-center justify-center space-x-2 px-1 sm:px-2"
          >
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
            <span className="font-bold text-orange-900 text-3xl sm:text-2xl mr-2 text-center min-w-[1ch] font-reem">
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
