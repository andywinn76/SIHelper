import { useState } from "react";
import ElementSelector from "./assets/components/ElementSelector";
import GlassBG from "./assets/components/GlassBG";
import Wrapper from "./assets/components/Wrapper";
import Logo from "./assets/components/Logo";
import Divider from "./assets/components/Divider";
import Instructions from "./assets/components/Instructions";

function App() {
  const [selectedIcons, setSelectedIcons] = useState({});
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return (
    <Wrapper>
      {" "}
      {/* This provides the blue gradient and texture effect */}
      <GlassBG>
        {" "}
        {/* This provides the frosted effect */}
        <Logo />
        <Instructions isTouchDevice={isTouchDevice} />
        <Divider />
        <ElementSelector
          selectedIcons={selectedIcons}
          setSelectedIcons={setSelectedIcons}
          isTouchDevice={isTouchDevice} 
        />
      </GlassBG>
    </Wrapper>
  );
}

export default App;
