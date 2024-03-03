import React from "react";
import Image from "next/image";

const Property = () => {
  return (
    <div>
      <div className="relative cursor-pointer aspect-square overflow-hidden rounded-xl">
        <Image
          fill
          src={"/image/image1.jpeg"}
          alt={"property image"}
          objectFit="cover"
          className="hover:scale-110 transition h-full w-full"
        />
      </div>
      <div className="mt-2 text-sm">
        <p className="font-semibold">Salo, Finland</p>
        <p>Beach and ocean view</p>
        <p>March 7 - 12</p>
        <p className="font-semibold">€ 416 night</p>
      </div>
    </div>
  );
};

export default Property;
