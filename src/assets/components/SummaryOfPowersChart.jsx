// import React from "react";
// import { spirits } from "../data/spirits.js";
// import { useSpirit } from "../contexts/SpiritContext";

// const categories = [
//   { key: "offense", label: "Offense", color: "bg-teal-700" },
//   { key: "control", label: "Control", color: "bg-green-700" },
//   { key: "fear", label: "Fear", color: "bg-purple-800" },
//   { key: "defense", label: "Defense", color: "bg-orange-700" },
//   { key: "utility", label: "Utility", color: "bg-stone-700" },
// ];

// export default function SummaryOfPowersChart() {
//   const { selectedSpirit } = useSpirit();
//   const spiritData = spirits[selectedSpirit];

//   if (!spiritData || !spiritData.summaryOfPowers) {
//     return (
//       <p className="font-lato text-base flex justify-center items-center text-center">
//         Summary of Powers data is not available for this spirit.
//       </p>
//     );
//   }

//   const chartData = spiritData.summaryOfPowers[0];
//   const maxValue = 5;

//   return (
//     <div className="flex items-end space-x-4 h-40 px-2 bg-gray-100 border rounded-md">
//       {categories.map(({ key, label, color }) => {
//         const heightPercent = ((chartData[key] || 0) / maxValue) * 100;
//         return (
//           <div key={key} className="flex flex-col items-center">
//             <div
//               className={`${color} w-8`}
//               style={{
//                 height: `${heightPercent}%`,
//                 transition: "height 0.3s ease-in-out"
//               }}
//             />
//             <span className="text-xs font-semibold mt-1">{label}</span>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default function SummaryOfPowersChart() {
//   const data = { offense: 5, control: 4, fear: 4, defense: 3, utility: 2 };
//   const maxValue = 5;
//   const barMaxHeight = 100; // in pixels (Tailwind's h-32 = 8rem = 128px)

//   const categories = [
//     { key: "offense", label: "Offense", color: "bg-teal-700" },
//     { key: "control", label: "Control", color: "bg-green-700" },
//     { key: "fear", label: "Fear", color: "bg-purple-800" },
//     { key: "defense", label: "Defense", color: "bg-orange-700" },
//     { key: "utility", label: "Utility", color: "bg-stone-700" },
//   ];

//   return (
//     <div className="flex justify-center items-end space-x-4 h-40 p-4 border bg-gray-50">
//       {categories.map(({ key, label, color }) => {
//         const value = data[key] || 0;
//         const height = (value / maxValue) * barMaxHeight;

//         return (
//           <div key={key} className="flex flex-col items-center">
//             <div
//               className={`w-8 ${color} transition-all duration-300`}
//               style={{ height: `${height}px` }}
//             />
//             <span className="text-xs font-semibold mt-1">{label}</span>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
import React from "react";
import { spirits } from "../data/spirits.js";
import { useSpirit } from "../contexts/SpiritContext";

const categories = [
  { key: "offense", label: "Offense", color: "bg-teal-700" },
  { key: "control", label: "Control", color: "bg-green-700" },
  { key: "fear", label: "Fear", color: "bg-purple-800" },
  { key: "defense", label: "Defense", color: "bg-orange-700" },
  { key: "utility", label: "Utility", color: "bg-stone-700" },
];

export default function SummaryOfPowersChart() {
  const { selectedSpirit } = useSpirit();
  const spiritData = spirits[selectedSpirit];

  if (
    !spiritData ||
    !spiritData.summaryOfPowers ||
    spiritData.summaryOfPowers.length === 0
  ) {
    return (
      <p className="font-lato text-base flex justify-center items-center text-center">
        Summary of Powers data is not available for this spirit.
      </p>
    );
  }

  const chartData = spiritData.summaryOfPowers[0];
  const maxValue = 5;
  const barMaxHeight = 100; // pixels

  return (
    <section className="power-summary-chart mt-2 px-4 pt-4 rounded-xl">
      <h3 className="text-xl font-bold text-blue-900">Power Summary</h3>
      <div className="flex justify-center items-end space-x-4 h-40 p-4">
        {categories.map(({ key, label, color }) => {
          const value = chartData[key] || 0;
          const height = (value / maxValue) * barMaxHeight;
          return (
            <div key={key} className="flex flex-col items-center">
              <div
                className={`w-8 ${color} transition-all duration-300`}
                style={{ height: `${height}px` }}
              />
              <span className="text-xs font-semibold mt-1">{label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
