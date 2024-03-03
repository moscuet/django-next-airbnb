import React from "react";
import Image from "next/image";
const Catagories = () => {
  return (
    <div style={{border:'2px solid green'}} className="font-size- flex justify-center h-[74] sm:h-[78px] sm:mt-[12px] gap-3 sm:gap-5">
      <div className="flex flex-col items-center justify-center border border-white border-b-2 opacity-60 hover:opacity-100 hover:border-b-gray-200 cursor-pointer">
        <Image
          src="/icon/castle.jpeg"
          alt="castel-icon"
          height={24}
          width={24}
        />
        <p className="text-xs font-semibold mt-1 sm:mt-2">Castles</p>
      </div>

      <div className="flex flex-col items-center justify-center border border-white border-b-2 opacity-60 hover:opacity-100 hover:border-b-gray-200 cursor-pointer">
        <Image
          src="/icon/amazing-views.jpeg"
          alt="amazing-views-icon"
          height={24}
          width={24}
        />
        <p className="text-xs font-semibold mt-1 sm:mt-2">Amazing views</p>
      </div>

      <div className="flex flex-col items-center justify-center border border-white border-b-2 opacity-60 hover:opacity-100 hover:border-b-gray-200 cursor-pointer">
        <Image
          src="/icon/Surfing.jpeg"
          alt="Surfing-icon"
          height={24}
          width={24}
        />
        <p className="text-xs font-semibold mt-1 sm:mt-2">Surfing</p>
      </div>

      <div className="flex flex-col items-center justify-center border border-white border-b-2 opacity-60 hover:opacity-100 hover:border-b-gray-200 cursor-pointer">
        <Image
          src="/icon/houseboats.jpeg"
          alt="houseboats-icon"
          height={24}
          width={24}
        />
        <p className="text-xs font-semibold mt-1 sm:mt-2">Houseboats</p>
      </div>

      <div className="flex flex-col items-center justify-center border border-white border-b-2 opacity-60 hover:opacity-100 hover:border-b-gray-200 cursor-pointer">
        <Image
          src="/icon/islands.jpeg"
          alt="islands-icon"
          height={24}
          width={24}
        />
        <p className="text-xs font-semibold mt-1 sm:mt-2">Islands</p>
      </div>

      <div className="flex flex-col items-center justify-center border border-white border-b-2 opacity-60 hover:opacity-100 hover:border-b-gray-200 cursor-pointer">
        <Image
          src="/icon/creative-spaces.jpeg"
          alt="creative-spaces-icon"
          height={24}
          width={24}
        />
        <p className="text-xs font-semibold mt-1 sm:mt-2">Creative spaces</p>
      </div>

      <div className="flex flex-col items-center justify-center border border-white border-b-2 opacity-60 hover:opacity-100 hover:border-b-gray-200 cursor-pointer">
        <Image src="/icon/luxe.jpeg" alt="Luxe-icon" height={24} width={24} />
        <p className="text-xs font-semibold mt-1 sm:mt-2">Luxe</p>
      </div>

      <div className="flex flex-col items-center justify-center border border-white border-b-2 opacity-60 hover:opacity-100 hover:border-b-gray-200 cursor-pointer">
        <Image
          src="/icon/histroric-home.jpeg"
          alt="histroric-home-icon"
          height={24}
          width={24}
        />
        <p className="text-xs font-semibold mt-1 sm:mt-2">Histrorical Homes</p>
      </div>

      <div className="flex flex-col items-center justify-center border border-white border-b-2 opacity-60 hover:opacity-100 hover:border-b-gray-200 cursor-pointer">
        <Image
          src="/icon/mansions.jpeg"
          alt="Mansions-icon"
          height={24}
          width={24}
        />
        <p className="text-xs font-semibold mt-1 sm:mt-2">Mansions</p>
      </div>
    </div>
  );
};

export default Catagories;
