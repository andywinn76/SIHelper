import { useState } from "react";

// Define the list of elements
const ELEMENTS = [
  "air",
  "animal",
  "earth",
  "fire",
  "sun",
  "moon",
  "plant",
  "water",
];

function App() {
  const [selectedIcons, setSelectedIcons] = useState({});

  // Handle clicking on an element to add to the top
  const handleAddIcon = (element) => {
    setSelectedIcons((prev) => ({
      ...prev,
      [element]: (prev[element] || 0) + 1,
    }));
  };

  // Handle removing an individual icon from the top
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

  return (
    <div className="main gradient">
      <div className="glass-bg">
        {/* <h1 className="title">Spirit Island Helper</h1> */}
        <section className="top">
          <img
            className="logo"
            src="src/assets/images/SIHelperLogo.png"
            alt="Spirit Island Helper"
          />
          <div className="instructions">
            {Object.keys(selectedIcons).length == 0 ? (
              <h2>
                Click icons below to add and track elements on your spirit board
                and power cards.
              </h2>
            ) : (
              <h2>Click an icon to remove it.</h2>
            )}
          </div>
          {/* Selected icons displayed at the top */}
          <div className="elements-container">
            {Object.entries(selectedIcons).map(([element, count]) => (
              <div key={element} className="element-row">
                {Array(count)
                  .fill(null)
                  .map((_, index) => (
                    <img
                      className="element-icon"
                      key={`${element}-${index}`}
                      src={`./src/assets/images/elements/${element}.png`}
                      alt={element}
                      onClick={() => handleRemoveIcon(element)}
                    />
                  ))}
              </div>
            ))}
          </div>{" "}
        </section>
        <section className="bottom">
          <hr className="divider"></hr>
          {/* Icons to click on */}
          <div className="button-container">
            {ELEMENTS.map((element) => (
              <img
                className="element-icon"
                key={element}
                src={`./src/assets/images/elements/${element}.png`}
                alt={element}
                onClick={() => handleAddIcon(element)}
              />
            ))}
          </div>
          <button
            className="clear"
            onClick={handleClearElements}
            disabled={Object.keys(selectedIcons).length === 0}
          >
            Clear
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
