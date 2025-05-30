import React, { createContext, useContext, useState } from "react";

const allElements = ["sun", "moon", "fire", "air", "water", "earth", "plant", "animal"];

const ElementContext = createContext();

export function ElementProvider({ children }) {
  const [currentElements, setCurrentElements] = useState(() =>
    allElements.reduce((acc, elem) => {
      acc[elem] = 0;
      return acc;
    }, {})
  );

  const addElement = (element, delta = 1) => {
    setCurrentElements((prev) => ({
      ...prev,
      [element]: Math.max(0, prev[element] + delta),
    }));
  };

  const resetElements = () => {
    setCurrentElements(
      allElements.reduce((acc, elem) => {
        acc[elem] = 0;
        return acc;
      }, {cardPlays: 0})
    );
  };

  return (
    <ElementContext.Provider value={{ allElements, currentElements, addElement, resetElements, setCurrentElements, }}>
      {children}
    </ElementContext.Provider>
  );
}

export function useElements() {
  return useContext(ElementContext);
}
