function Instructions(isTouchDevice) {
  return (
    <div className="bg-white/80 rounded-2xl shadow-md p-6 max-w-2xl mx-auto mt-1 space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold font-lato tracking-wide text-left text-gray-800">
          Getting Started
        </h2>
        <p className="text-left font-lato font-semibold text-gray-800">
          Select a Spirit by using the labeled button. Spirit thumbnails are
          shown in a grid format. Click on the Spirit name to select it. Use the
          dropdown menu to filter Spirits by complexity level.
        </p>

        <p className="text-left font-lato text-gray-800">
          All sections are collapsible. Click the title to expand or collapse
          the section.
        </p>
        <p className="text-left font-lato text-gray-800">
          You may reorder the sections by dragging and dropping them in the
          order you prefer.
        </p>
      </div>
      <div className="space-y-1">
        <h2 className="text-xl font-semibold font-lato tracking-wide text-left text-gray-800">
          Elements
        </h2>
        <p className="text-left font-lato text-gray-700">
          {isTouchDevice
            ? "Click to add an element, right-click to remove."
            : "Tap to add, long press to remove."}
        </p>
        <p className="text-left font-lato text-gray-700">
          Elements will automatically unlock Innate Power tiers in the Innate
          section.
        </p>
      </div>

      <div className="space-y-1">
        <h2 className="text-xl font-semibold font-lato tracking-wide text-left text-gray-800">
          Energy
        </h2>
        <p className="text-left font-lato text-gray-700">
          Use the + and - buttons to add and remove energy during play.
        </p>
      </div>

      <div className="space-y-1">
        <h2 className="text-xl font-semibold font-lato tracking-wide text-left text-gray-800">
          Innate Power Tiers
        </h2>
        <p className="text-left font-lato text-gray-700">
          Innate Powers will populate this section once you've selected your
          Spirit
        </p>
        <p className="text-left font-lato text-gray-700">
          Innate Power tiers color in when the tier unlocks. Add elements by
          using the Elements section.
        </p>
      </div>
      <div className="space-y-1">
        <h2 className="text-xl font-semibold font-lato tracking-wide text-left text-gray-800">
          Setup Section and Special Rules Section
        </h2>
        <p className="text-left font-lato text-gray-700">
          The Setup section will show spirit-specific setup, complexity, and
          lore
        </p>
        <p className="text-left font-lato text-gray-700">
          The Special Rules Section will show Special Rules for the selected
          Spirit
        </p>
      </div>
      <div className="space-y-1">
        <h2 className="text-xl font-semibold font-lato tracking-wide text-left text-gray-800">
          Glossary
        </h2>
        <p className="text-left font-lato text-gray-700">
          Note the sort and search functions to quickly locate a keyword. Use
          the sort and search buttons to:
        </p>
        <p className="text-left font-lato text-gray-600">
          • Sort by Nested Categories
        </p>
        <p className="text-left font-lato text-gray-600">
          • Search glossary terms
        </p>
        <p className="text-left font-lato text-gray-600">
          • List glossary terms alphabetically (A-Z)
        </p>
      </div>
    </div>
  );
}

export default Instructions;
