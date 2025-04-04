import { spirits } from "../data/spirits";

function SpiritSelector({ selectedSpirit, handleSpiritChange }) {
  return (
    <div>
      {/* <label htmlFor="spirit-select">Choose a Spirit:</label> */}
      <div className="relative inline-block w-full text-center">
      <select
        id="spirit-select"
        value={selectedSpirit}
        onChange={handleSpiritChange}
        className="appearance-none text-center font-mouse text-2xl text-amber-700 bg-white/70 border-2 border-amber-400 rounded-xl px-6 py-4 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all "
      >
        {Object.keys(spirits).map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      
  </div>
</div>
    
  );
}

export default SpiritSelector;
