function Instructions(isTouchDevice) {
  
  const instructions = isTouchDevice
  ? "Click to add an element, right-click to remove an element."
  : "Tap to add an element, long press to remove an element.";

  return (
    <div className="flex justify-center mt-2">
      <p className="w-3/5 text-center">{instructions}</p>
    </div>
  );
  
}

export default Instructions;
