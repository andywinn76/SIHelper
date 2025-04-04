function Fonts() {
  const sampleText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.";

  return (
    <div className="p-6 space-y-8">
      {/* Mouse Memoirs */}
      <div>
        <h1 className="font-mouse text-3xl">Mouse Memoirs</h1>
        <p className="font-mouse text-base">{sampleText}</p>
      </div>

      {/* Lato */}
      <div>
        <h1 className="font-lato text-3xl">
          Lato (Regular / Semibold / BoldItalic)
        </h1>
        <p className="font-lato text-base font-normal">{sampleText}</p>
        <p className="font-lato text-base font-semibold">{sampleText}</p>
        <p className="font-lato text-base font-bold italic">{sampleText}</p>
      </div>

      {/* Josefin Sans */}
      <div>
        <h1 className="font-josefin text-3xl">Josefin Sans</h1>
        <p className="font-josefin text-base font-normal">{sampleText}</p>
        <p className="font-josefin text-base font-semibold">{sampleText}</p>
        <p className="font-josefin text-base font-bold italic">{sampleText}</p>
      </div>

      {/* Noto Sans */}
      <div>
        <h1 className="font-noto text-3xl">Noto Sans</h1>
        <p className="font-noto text-base font-normal">{sampleText}</p>
        <p className="font-noto text-base italic">{sampleText}</p>
        <p className="font-noto text-base font-bold italic">{sampleText}</p>
      </div>

      {/* Crushed Alt */}
      <div>
        <h1 className="font-crushed text-3xl">Crushed Alt 04</h1>
        <p className="font-crushed text-base">{sampleText}</p>
      </div>
      <div style={{ fontFamily: '"Mouse Memoirs", sans-serif' }}>
        If this is NOT using the font, the font still isn’t loading.
      </div>
    </div>
  );
}

export default Fonts;
