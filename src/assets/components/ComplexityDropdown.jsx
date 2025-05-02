import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { FaCheck, FaChevronDown } from "react-icons/fa";

const complexities = [
  { label: "All Complexities", value: "all", color: "bg-white/70" },
  { label: "Low", value: "low", color: "bg-green-200" },
  { label: "Moderate", value: "moderate", color: "bg-yellow-200" },
  { label: "High", value: "high", color: "bg-orange-200" },
  { label: "Very High", value: "very high", color: "bg-red-300" },
];

export default function ComplexityDropdown({ complexityFilter, setComplexityFilter }) {
  const selected = complexities.find((c) => c.value === complexityFilter) || complexities[0];

  return (
    <div className="w-full flex justify-center mb-4">
      <Listbox value={complexityFilter} onChange={setComplexityFilter}>
        <div className="relative w-48">
          <ListboxButton className="w-full relative py-2 pl-3 pr-10 text-center bg-white/80 rounded-lg border border-blue-300 shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-sm font-lato">
            <span className="block truncate">{selected.label}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FaChevronDown className="text-gray-600" />
            </span>
          </ListboxButton>

          <ListboxOptions className="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
            {complexities.map((option) => (
              <ListboxOption
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${option.color} ${
                    active ? "bg-blue-100" : ""
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? "font-semibold" : ""}`}>
                      {option.label}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-700">
                        <FaCheck className="h-4 w-4" />
                      </span>
                    )}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
