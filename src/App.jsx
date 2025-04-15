import { useState } from "react";

import { SpiritProvider } from "./assets/contexts/SpiritContext";
import { ElementProvider } from "./assets/contexts/ElementContext";
import ElementSelector from "./assets/components/ElementSelector";
import GlassBG from "./assets/components/GlassBG";
import Wrapper from "./assets/components/Wrapper";
import Logo from "./assets/components/Logo";
import CollapsibleSection from "./assets/components/CollapsibleSection";
import Instructions from "./assets/components/Instructions";
import Powers from "./assets/components/Powers";
import EnergyTracker from "./assets/components/EnergyTracker";
import { FaRegQuestionCircle } from "react-icons/fa";

function App() {
  const [selectedIcons, setSelectedIcons] = useState({});

  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const currentElements = "none";

  return (
    <SpiritProvider>
    <ElementProvider>
      <Wrapper>
        {/* {" "} */}
        {/* This provides the blue gradient and texture effect */}
        <GlassBG>
          {/* {" "} */}
          {/* This provides the frosted effect */}
          <Logo />

          {/* <Divider /> */}
          <CollapsibleSection icon={<FaRegQuestionCircle />} collapsed={true} title="Instructions" hamburger="true">
            <Instructions isTouchDevice={isTouchDevice} />
          </CollapsibleSection>
          <CollapsibleSection title="Elements">
            <ElementSelector
              selectedIcons={selectedIcons}
              setSelectedIcons={setSelectedIcons}
              isTouchDevice={isTouchDevice}
            />
          </CollapsibleSection>
          {/* <Powers selectedIcons={selectedIcons}/> */}
          <CollapsibleSection title="Energy">
            <EnergyTracker />
          </CollapsibleSection>
          <CollapsibleSection title="Innates">
            <Powers currentElements={currentElements} />
          </CollapsibleSection>
          {/* <Fonts /> */}
        </GlassBG>
      </Wrapper>
    </ElementProvider>
    </SpiritProvider>
  );
}

export default App;
