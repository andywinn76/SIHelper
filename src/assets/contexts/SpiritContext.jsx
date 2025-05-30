import { createContext, useContext, useState } from "react";

const SpiritContext = createContext();

export function SpiritProvider({ children }) {
  const [selectedSpirit, setSelectedSpirit] = useState(null);

  return (
    <SpiritContext.Provider value={{ selectedSpirit, setSelectedSpirit }}>
      {children}
    </SpiritContext.Provider>
  );
}

export function useSpirit() {
  return useContext(SpiritContext);
}
