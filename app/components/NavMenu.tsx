import React from "react";
import Image from "next/image";
const NavMenu = () => {
  return (
    <div className="inline-block relative border rounded-full p-[8px] pl-[14px] h-[48px] w-[86px]">
      <button className="w-full flex justify-between items-center">
        <Image
          src={"/icon/menu.svg"}
          alt="menu-icon"
          width={20}
          height={20}
        />
          <Image
          src={"/icon/user.svg"}
          alt="user-icon"
          width={32}
          height={32}
        />
      </button>
    </div>
  );
};

export default NavMenu;
