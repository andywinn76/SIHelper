import { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { SpiritProvider } from "./assets/contexts/SpiritContext";
import { ElementProvider } from "./assets/contexts/ElementContext";
import { FaRegQuestionCircle } from "react-icons/fa";
import ElementSelector from "./assets/components/ElementSelector";
import GlassBG from "./assets/components/GlassBG";
import Wrapper from "./assets/components/Wrapper";
import Logo from "./assets/components/Logo";
import CollapsibleSection from "./assets/components/CollapsibleSection";
import Instructions from "./assets/components/Instructions";
import Powers from "./assets/components/Powers";
import EnergyTracker from "./assets/components/EnergyTracker";
import SpiritSelector from "./assets/components/SpiritSelector";
import Glossary from "./assets/components/Glossary";

function SortableItem({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition ?? "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children(listeners)}{" "}
      {/* <--- Call children as a function with listeners */}
    </div>
  );
}

function App() {
  const [selectedIcons, setSelectedIcons] = useState({});
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  const [sectionOrder, setSectionOrder] = useState([
    "instructions",
    "innates",
    "elements",
    "energy",
    "glossary",
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = sectionOrder.indexOf(active.id);
      const newIndex = sectionOrder.indexOf(over.id);
      const newOrder = arrayMove(sectionOrder, oldIndex, newIndex);
      setSectionOrder(newOrder);
      localStorage.setItem("sectionOrder", JSON.stringify(newOrder));
    }
  };

  // Load saved order from localStorage (on mount)
  const STORAGE_VERSION = 1; // <--- Start with version 1

  useEffect(() => {
    const savedVersion = localStorage.getItem("storageVersion");
    const savedOrder = localStorage.getItem("sectionOrder");

    if (parseInt(savedVersion) !== STORAGE_VERSION) {
      // Version mismatch or missing version -> Reset
      console.log("Storage version mismatch. Clearing localStorage...");
      localStorage.clear();
      localStorage.setItem("storageVersion", STORAGE_VERSION);
      setSectionOrder([
        "instructions",
        "innates",
        "elements",
        "energy",
        "glossary",
      ]);
    } else if (savedOrder) {
      try {
        setSectionOrder(JSON.parse(savedOrder));
      } catch (e) {
        console.warn("Could not parse sectionOrder from localStorage", e);
      }
    }
  }, []);

  const sectionComponents = {
    instructions: (dragListeners) => (
      <CollapsibleSection
        key="instructions"
        icon={<FaRegQuestionCircle />}
        collapsed={true}
        title="Instructions"
        hamburger="true"
        dragListeners={dragListeners}
      >
        <Instructions isTouchDevice={isTouchDevice} />
      </CollapsibleSection>
    ),
    innates: (dragListeners) => (
      <CollapsibleSection
        key="innates"
        title="Innates"
        dragListeners={dragListeners}
      >
        <SpiritSelector />
        <Powers />
      </CollapsibleSection>
    ),
    elements: (dragListeners) => (
      <CollapsibleSection
        key="elements"
        title="Elements"
        dragListeners={dragListeners}
      >
        <ElementSelector
          selectedIcons={selectedIcons}
          setSelectedIcons={setSelectedIcons}
          isTouchDevice={isTouchDevice}
        />
      </CollapsibleSection>
    ),
    energy: (dragListeners) => (
      <CollapsibleSection
        key="energy"
        title="Energy"
        collapsed={true}
        dragListeners={dragListeners}
      >
        <EnergyTracker />
      </CollapsibleSection>
    ),
    glossary: (dragListeners) => (
      <CollapsibleSection
        key="glossary"
        title="Glossary"
        collapsed={true}
        dragListeners={dragListeners}
      >
        <Glossary />
      </CollapsibleSection>
    ),
  };

  return (
    <SpiritProvider>
      <ElementProvider>
        <Wrapper>
          <GlassBG>
            <Logo />

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={(event) => {
                handleDragEnd(event);
              }}
            >
              <SortableContext
                items={sectionOrder}
                strategy={verticalListSortingStrategy}
              >
                {sectionOrder.map((id) => (
                  <SortableItem key={id} id={id}>
                    {(dragListeners) => sectionComponents[id](dragListeners)}
                  </SortableItem>
                ))}
              </SortableContext>
              <DragOverlay />
            </DndContext>
          </GlassBG>
        </Wrapper>
      </ElementProvider>
    </SpiritProvider>
  );
}

export default App;
