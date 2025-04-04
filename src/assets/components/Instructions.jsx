import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";

function Instructions(isTouchDevice) {
  const instructions = isTouchDevice;

  return (
    <div className="bg-white/80 rounded-2xl shadow-md p-6 max-w-2xl mx-auto mt-1 space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-wide text-left text-gray-800">
          Elements
        </h2>
        <p className="text-left text-gray-600">
          {isTouchDevice
            ? "• Click to add an element, right-click to remove."
            : "• Tap to add, long press to remove."}
        </p>
        <p className="text-left text-gray-600">
          • Elements will automatically unlock Innate Power tiers in the Innate
          section.
        </p>
      </div>

      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-wide text-left text-gray-800">
          Energy
        </h2>
        <p className="text-left text-gray-600">
        • Use the + and - buttons to add and remove energy during play.
        </p>
      </div>

      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-wide text-left text-gray-800">
          Innate Power Tiers
        </h2>
        <p className="text-left text-gray-600">• First, select the Spirit you are playing. Innates powers will populate.</p>
        <p className="text-left text-gray-600">
        • Innate Power tiers color in when the tier unlocks (by using the
          Elements section).
        </p>
      </div>
    </div>
  );
}

export default Instructions;
