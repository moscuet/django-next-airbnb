import React from "react";

import SearchIcon from "/icon/search.svg";

const SerachFilter = () => {
  return (
    <div className="mx-[40px]">
      <div className="flex flex-row flex-grow items-center justify-between max-w-[850px] h-[66px] border rounded-full mx-auto mb-[30px]">
        <div className="cursor-pointer max-w-[284px] lg:w-[284px] h-[64px] flex flex-col justify-center rounded-full px-8 hover:bg-gray-100">
          <p className=" text-xs font-semibold pb-[2px]"> Where</p>
          <p className=" text-sm"> Sesrch destinations</p>
        </div>

        <div className="cursor-pointer h-[64px] flex flex-col justify-center rounded-full px-8 hover:bg-gray-100">
          <p className="text-xs font-semibold"> Check in</p>
          <p className="text-sm"> Add dates</p>
        </div>

        <div className="cursor-pointer h-[64px] flex flex-col justify-center rounded-full px-8 hover:bg-gray-100">
          <p className=" text-xs font-semibold"> Check out</p>
          <p className="text-sm"> Add dates</p>
        </div>

        <div className="flex justify-between flex-grow  items-center max-w-[284px] lg:w-[284px] h-[64px] rounded-full pl-8 pr-2 hover:bg-gray-100">
          <div className="cursor-pointer flex flex-col justify-center">
            <p className="text-xs font-semibold"> Who</p>
            <p className="text-sm"> Add guests</p>
          </div>

          <div className="cursor-pointer p-2 lg:p-4  bg-air-bnb hover:bg-air-bnb-dark transition rounded-full text-white w-[48px] h-[48px]">
            <img src="/logo/search.svg" alt="Search Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerachFilter;