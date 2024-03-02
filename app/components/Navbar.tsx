import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/navbar.css";
import SerachFilter from "./SerachFilter";
import UserNav from "./NavMenu";

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

          <div className="hidden xl:block w-[400px] h-[48px] px-[24px] border mx-auto">
            stay1
          </div>
          <div className="mx-[40px] flex items-center sm:hidden">
            <SerachFilter />
          </div>

          <div>
            add property
            <UserNav/>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex md:flex lg:flex xl:hidden justify-center">
        <div className="w-[400px] h-[48px] my-2 px-[24px] border">Stay2</div>
      </div>

      <div className="mx-[40px] hidden sm:block">
        <SerachFilter />
      </div>
    </div>
  );
}
