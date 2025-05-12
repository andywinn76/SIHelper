// import React from "react";

// const complexityStyles = {
//   low: "bg-red-400 w-24",
//   moderate: "bg-red-400 w-36",
//   high: "bg-red-400 w-48",
//   "very high": "bg-red-400 w-64",
// };

// export default function ComplexityTag({ level }) {
//   const key = level?.toLowerCase();
//   const base = "text-white font-bold px-2 py-1 text-base rounded-sm text-left mt-2 mb-6";

//   const styles = complexityStyles[key] || "bg-gray-400";

//   return (
//     <div className={`${base} ${styles}`}>
//       {level.toUpperCase()}
//     </div>
//   );
// }
import React from "react";

const complexityStyles = {
  low: "w-1/4 bg-green-500",
  moderate: "w-2/4 bg-yellow-300",
  high: "w-3/4 bg-orange-400",
  "very high": "w-full bg-red-400",
};

export default function ComplexityTag({ level }) {
  const key = level?.toLowerCase();
  const filledBar = complexityStyles[key] || "w-0";
  const baseText = "font-bold text-xl px-2 py-1 text-left";

  return (
    <div className="mb-8">
      {/* Label */}
      <div className={`${baseText}`}>{level.toUpperCase()}</div>

      {/* Scale Bar */}
      <div className="relative h-2 bg-gray-300 rounded-sm overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full  transition-all duration-300 ${filledBar}`}
        ></div>
      </div>
    </div>
  );
}
