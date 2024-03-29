import Image from "next/image";

export const Cocktails1 = () => {
  return (
    <div className="2xl:py-12 my-4 mx-2 px-3 py-2 shadow-black shadow-2xl rounded-2xl">
      <div className="flex justify-center items-center">
        <h1 className="font-bold border-b-[1px] border-black py-1 2xl:text-13 text-11 text-shadow text-white">
          KOKTAJLE KLASYCZNE
        </h1>
        <Image
          src="/assets/icons/cocktail1.png"
          alt="cocktail"
          width={40}
          height={20}
          className="ml-2 mb-3"
        />
      </div>
      <ul className="mt-2 lg:min-w-[400px] flex flex-col 2xl:gap-2 ">
        <li>
          <h2 className="h2_cocktail">WHISKEY SOUR</h2>
          <p className="p_cocktail">whiskey, sour, białko, angostura</p>
        </li>
        <li>
          <h2 className="h2_cocktail">OLD CUBAN</h2>
          <p className="p_cocktail">
            rum, sour, mięta, angostura, prosecco/szampan
          </p>
        </li>
        <li>
          <h2 className="h2_cocktail">BASIL SMASH</h2>
          <p className="p_cocktail">gin, sour, świeża bazylia</p>
        </li>
        <li>
          <h2 className="h2_cocktail">CUBA LIBRE</h2>
          <p className="p_cocktail">rum, limonka, cola</p>
        </li>
        <li>
          <h2 className="h2_cocktail">PINA COLADA</h2>
          <p className="p_cocktail">rum, malibu, kokos, sour, ananas</p>
        </li>
        <li>
          <h2 className="h2_cocktail">TOM COLLINS</h2>
          <p className="p_cocktail">gin, sour, woda gazowana</p>
        </li>
        <li>
          <h2 className="h2_cocktail">NEGRONI</h2>
          <p className="p_cocktail">gin, wermut, campari</p>
        </li>
        <li>
          <h2 className="h2_cocktail">LONG ISLAND ICED TEA</h2>
          <p className="p_cocktail">
            wódka, rum, gin, tequila, triple sec, cola
          </p>
        </li>
        <li>
          <h2 className="h2_cocktail">OLD FASHIONED</h2>
          <p className="p_cocktail">whisky, demerara, bitter, pomarańcza</p>
        </li>
      </ul>
    </div>
  );
};
