import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuListX } from "react-icons/lu";


export default function CollapsibleSection({
  collapsed = false,
  hamburger = true,
  title,
  children,
}) {
  const [isOpen, setIsOpen] = useState(!collapsed);

  return (
    <div className="overflow-hidden rounded-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-2 py-1 font-mouse text-xl text-gray-600 border-t-2 border-gray-500/40 hover:bg-white/5 transition flex justify-center items-center bg-blue-400/15"
      >
        <span className="flex items-center gap-2">
          {isOpen ? (
            <>
              
              {title}
              <LuListX />
            </>
          ) : (
            <>
              {title}
              {hamburger !== "false" && <RxHamburgerMenu className="w-4 h-4" /> }
            </>
          )}
        </span>
      </button>
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
            <div className="">
              {/* <div className="px-4 py-2"></div> */}
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
