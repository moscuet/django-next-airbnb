import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/navbar.css";
import SerachFilter from "./SerachFilter";

export default function Navbar() {
  return (
    <div className="w-full fixed left-0 top-0 bg-white border-b z-20">
      <div className="mx-auto px-[40px] 2xl:px-[80px]">
        <div className="flex justify-between items-center h-[80px]">
          <>
            <div className="logo">
              <Link href="/">
                <Image
                  src={"/logo/airbnb.svg"}
                  alt="air-bnb-logo"
                  width={102}
                  height={80}
                />
              </Link>
            </div>
            <div className="small-logo">
              <Link href="/">
                <Image
                  src={"/logo/airbnb-sm.svg"}
                  alt="air-bnb-logo"
                  width={30}
                  height={80}
                />
              </Link>
            </div>
          </>

          <div className="hidden xl:block w-[400px] h-[48px] px-[24px] border mx-auto"></div>

          <div>add property</div>
        </div>
      </div>
      <div className="xl:hidden flex justify-center">
        <div className="w-[400px] h-[48px] my-2 px-[24px] border">Stay</div>
      </div>

      <SerachFilter />
    </div>
  );
}
