import { useState } from "react";

function EnergyTracker() {
  const [energy, setEnergy] = useState(0);
  return (
    <section className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-6">
        <button
          className="text-4xl px-4 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={energy === 0}
          onClick={() => energy > 0 && setEnergy(energy - 1)}
        >
          -
        </button>
        {/* <span className="mt-4 text-6xl">{energy}</span> */}
        <span
          className="mt-4 text-5xl w-[100px] h-[100px] bg-no-repeat bg-center flex items-center justify-center font-reem"
          style={{
            backgroundImage: "url('/SIHelper/images/board/energy.png')",
            backgroundSize: "contain",
          }}
        >
          {energy}
        </span>

        <button className="text-4xl px-4" onClick={() => setEnergy(energy + 1)}>
          +
        </button>
      </div>
      <div>
        <button
          className="clear mt-4"
          onClick={() => setEnergy(0)}
          disabled={energy === 0}
        >
          Clear
        </button>
      </div>
    </section>
  );
}

export default EnergyTracker;
