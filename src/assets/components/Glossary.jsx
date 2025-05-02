import { useState } from "react";
import { glossary } from "../data/glossary";
import { renderIcons } from "../utils/renderIcons";
import { AnimatePresence, motion } from "framer-motion";
import { FaCaretRight } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { FaSearch, FaSortAlphaDown } from "react-icons/fa";
import { BsListNested } from "react-icons/bs";

export default function Glossary() {
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedTerms, setExpandedTerms] = useState({});
  const [expandedFlavor, setExpandedFlavor] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("nested"); // "nested", "search", "az"

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleTerm = (term) => {
    setExpandedTerms((prev) => ({
      ...prev,
      [term]: !prev[term],
    }));
  };

  const toggleFlavor = (term) => {
    setExpandedFlavor((prev) => ({
      ...prev,
      [term]: !prev[term],
    }));
  };

  const allTerms = Object.values(glossary).flat();

  const filteredTerms = allTerms.filter((entry) =>
    entry.term.toLowerCase().includes(searchTerm) ||
    entry.definition.toLowerCase().includes(searchTerm) ||
    (entry.flavorText && entry.flavorText.toLowerCase().includes(searchTerm))
  );

  const sortedTerms = [...allTerms].sort((a, b) =>
    a.term.localeCompare(b.term)
  );

  const termsToRender = viewMode === "az" ? sortedTerms : filteredTerms;

  return (
    <div className="p-4">
      {/* Toolbar */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => {
            setViewMode("nested");
            setSearchTerm("");
          }}
          className={`py-2 flex flex-1 items-center justify-center text-xl rounded ${viewMode === "nested" ? "bg-blue-400 text-gray-700" : "bg-blue-300 text-blue-800"}`}
        >
          <BsListNested />

        </button>
        <button
          onClick={() => setViewMode("search")}
          className={`py-2 flex flex-1 items-center justify-center text-xl rounded ${viewMode === "search" ? "bg-blue-400 text-gray-700" : "bg-blue-300 text-blue-800"}`}
        >
          <FaSearch />
        </button>
        <button
          onClick={() => {
            setViewMode("az");
            setSearchTerm("");
          }}
          className={`py-2 flex flex-1 items-center justify-center text-xl rounded ${viewMode === "az" ? "bg-blue-400 text-gray-700" : "bg-blue-300 text-blue-800"}`}
        >
          <FaSortAlphaDown />
        </button>
      </div>

      {/* Search Input */}
      {viewMode === "search" && (
        <div className="relative w-full mb-4">
          <input
            type="text"
            placeholder="Search glossary..."
            className="w-full px-4 py-2 pr-10 rounded-md border border-blue-300 bg-white/80 text-gray-800 font-lato"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 font-bold text-xl leading-none"
              aria-label="Clear search"
            >
              <MdOutlineCancel />
            </button>
          )}
        </div>
      )}

      {/* Term List */}
      {viewMode !== "nested" ? (
        <ul className="space-y-3">
          {termsToRender.map((entry) => (
            <li
              key={entry.term}
              className="border-b border-blue-200/30 pb-2 hover:bg-white/10 transition rounded px-3 py-1"
            >
              <div
                onClick={() => toggleTerm(entry.term)}
                className="flex justify-between items-center font-lato font-semibold text-lg text-blue-800 cursor-pointer"
              >
                <span>{renderIcons(entry.term)}</span>
                <motion.div
                  animate={{ rotate: expandedTerms[entry.term] ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-base"
                >
                  <FaCaretRight />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {expandedTerms[entry.term] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 mt-1 text-gray-800 overflow-hidden"
                  >
                    <div className="font-noto text-base">{renderIcons(entry.definition)}</div>

                    {entry.flavorText && (
                      <div className="mt-1 ml-2">
                        {!expandedFlavor[entry.term] ? (
                          <button
                            onClick={() => toggleFlavor(entry.term)}
                            className="text-blue-500 hover:text-blue-600 transition font-lato text-sm"
                          >
                            More...
                          </button>
                        ) : (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="font-mouse text-base italic text-gray-600 overflow-hidden p-2 bg-blue-100/20"
                          >
                            {renderIcons(entry.flavorText)}
                            <div>
                              <button
                                onClick={() => toggleFlavor(entry.term)}
                                className="text-blue-500 hover:text-blue-600 transition mt-1 font-lato text-sm"
                              >
                                Hide...
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      ) : (
        Object.entries(glossary).map(([section, terms]) => (
          <div
            key={section}
            className="mb-2 border border-blue-300/20 rounded-md"
          >
            <button
              onClick={() => toggleSection(section)}
              className="flex items-center justify-between w-full text-left px-4 py-2 font-mouse text-2xl uppercase bg-blue-200/30 hover:bg-blue-300/30 transition"
            >
              {section}
              <motion.div
                animate={{ rotate: expandedSections[section] ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl"
              >
                <FaCaretRight />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {expandedSections[section] && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 px-4 py-2 overflow-hidden"
                >
                  {terms.map((entry) => (
                    <li
                      key={entry.term}
                      className="font-josefin text-xl border-b border-blue-200/30 pb-2 rounded hover:bg-white/10 transition"
                    >
                      <button
                        onClick={() => toggleTerm(entry.term)}
                        className="flex items-center justify-between w-full text-left font-lato font-semibold text-lg text-gray-800 px-2 py-1"
                      >
                        <span className="icon-sizing">
                          {entry.term && renderIcons(entry.term)}
                        </span>
                        <motion.div
                          animate={{
                            rotate: expandedTerms[entry.term] ? 90 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="text-base"
                        >
                          <FaCaretRight />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {expandedTerms[entry.term] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-4  text-gray-800 overflow-hidden"
                          >
                            <div className="icon-sizing font-noto text-base pr-5 mt-1">
                              {renderIcons(entry.definition)}
                            </div>

                            {entry.flavorText && (
                              <div className="mt-2 ml-2">
                                {!expandedFlavor[entry.term] ? (
                                  <button
                                    onClick={() => toggleFlavor(entry.term)}
                                    className="font-lato font-xs text-blue-500 hover:text-blue-600 transition"
                                  >
                                    More...
                                  </button>
                                ) : (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="icon-sizing font-mouse text-lg italic text-gray-600 overflow-hidden p-3 bg-blue-100/20"
                                  >
                                    {renderIcons(entry.flavorText)}
                                    <div>
                                      <button
                                        onClick={() => toggleFlavor(entry.term)}
                                        className="font-lato font-sm text-blue-500 hover:text-blue-600 transition mt-1"
                                      >
                                        Hide...
                                      </button>
                                    </div>
                                  </motion.div>
                                )}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))
      )}
    </div>
  );
}