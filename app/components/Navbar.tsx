import React from "react";
import Link from "next/link";
import Image from "next/image";
import '../styles/navbar.css'

export default function Navbar() {

  return (
    <div className="w-full fixed left-0 top-0 bg-white border-b z-20">
      <div className="mx-auto px-[40px] xl:px-[80px]">
        <div className="flex justify-between items-center h-[80px]">
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
        </div>
      </div>
    </div>
  );
}
