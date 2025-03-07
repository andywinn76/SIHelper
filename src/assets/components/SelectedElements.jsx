// function SelectedElements({
//   children,
//   sectionName,
//   selectedIcons,
//   setSelectedIcons,
// }) {
//   // Handle removing an individual icon from the top
//   const handleRemoveIcon = (element) => {
//     setSelectedIcons((prev) => {
//       const updatedIcons = { ...prev };
//       if (updatedIcons[element] > 1) {
//         updatedIcons[element] -= 1;
//       } else {
//         delete updatedIcons[element];
//       }
//       return updatedIcons;
//     });
//   };

//   return (
//     <section className={sectionName}>
//       {children}
//       <div className="instructions">
//         {Object.keys(selectedIcons).length == 0 ? (
//           <h2>
//             Click icons below to add and track elements on your spirit board and
//             power cards.
//           </h2>
//         ) : (
//           <h2>Click an icon to remove it.</h2>
//         )}
//       </div>
//       {/* Selected icons displayed at the top */}
//       <div className="elements-container">
//         {Object.entries(selectedIcons).map(([element, count]) => (
//           <div key={element} className="element-row">
//             {Array(count)
//               .fill(null)
//               .map((_, index) => (
//                 <img
//                   className="element-icon"
//                   key={`${element}-${index}`}
//                   src={`/SIHelper/images/elements/${element}.png`}
//                   alt={element}
//                   onClick={() => handleRemoveIcon(element)}
//                 />
//               ))}
//           </div>
//         ))}
//       </div>{" "}
//     </section>
//   );
// }

// export default SelectedElements;

function SelectedElements({ children, sectionName, selectedIcons, setSelectedIcons }) {
  // Handle removing an individual icon from the top
  const handleRemoveIcon = (element) => {
    setSelectedIcons((prev) => {
      const updatedIcons = { ...prev };
      if (updatedIcons[element] > 1) {
        updatedIcons[element] -= 1;
      } else {
        delete updatedIcons[element];
      }
      return updatedIcons;
    });
  };

  return (
    <section className={sectionName}>
      {children}
      <div className="instructions">
        {Object.keys(selectedIcons).length === 0 ? (
          <h2>
            Click icons below to add and track elements on your spirit board and
            power cards.
          </h2>
        ) : (
          <h2>Click an icon to remove it.</h2>
        )}
      </div>
      
      {/* Selected icons displayed at the top */}
      <div className="elements-container">
        {Object.entries(selectedIcons).map(([element, count]) => (
          <div key={element} className="element-row" onClick={() => handleRemoveIcon(element)}>
            <img
              className="element-icon"
              src={`/SIHelper/images/elements/${element}.png`}
              alt={element}
            />
            <span className="element-count">x{count}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SelectedElements;

