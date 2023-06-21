"use client";

import useLightMode from "@/app/hooks/useLightMode";
import Logo from "./Logo";
import LNavigation from "./LNavigation";
import SearchInput from "./SearchInput";
import RNavigation from "./RNavigation";
import { useState } from "react";

const Navbar = () => {
  const lightMode = useLightMode();

  return (
    <nav
      className={`${
        lightMode.lightMode ? "bg-secondaryBg-10" : "bg-dark-10"
      } h-[50px] w-full xl:px-5 xl1:px-3 lg1:px-2 sm1:px-1  sticky top-0 `}>
      <div className="max-w-[1600px] w-full m-auto h-full flex items-center transition1 justify-between relative">
        <Logo lightMode={lightMode.lightMode} />
        <div className="flex w-full justify-between lg:max-w-[1200px] md:max-w-[850px] lg:mr-6">
          <LNavigation />
          <SearchInput />
          <RNavigation />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
