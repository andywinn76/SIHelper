import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuListX } from "react-icons/lu";
import { LuGripVertical } from "react-icons/lu"; 

export default function CollapsibleSection({
  collapsed = false,
  hamburger = true,
  title,
  children,
  dragListeners = {},
}) {
  const [isOpen, setIsOpen] = useState(!collapsed);

  return (
    <div className="overflow-hidden rounded-md">
      <div className="flex items-center justify-between w-full px-2 py-1 font-mouse text-xl text-gray-600 border-t-2 border-gray-500/40 hover:bg-white/5 transition bg-blue-400/15">
        {/* Drag handle on the left */}
        <div
          style={{ touchAction: "none" }}
          className="cursor-grab pr-2 text-gray-500 select-none"
          {...dragListeners}
        >
          <LuGripVertical />
        </div>

        {/* Clickable title (centered) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex-1 text-center flex justify-center items-center gap-2"
        >
          {title}
          {isOpen ? (
            <LuListX />
          ) : (
            hamburger !== "false" && <RxHamburgerMenu className="w-4 h-4" />
          )}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
