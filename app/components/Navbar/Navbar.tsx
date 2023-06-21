"use client";

import useLightMode from "@/app/hooks/useLightMode";
import Logo from "./Logo";
import LNavigation from "./LNavigation";
import SearchInput from "./SearchInput";
import RNavigation from "./RNavigation";

const Navbar = () => {
  const lightMode = useLightMode();
  return (
    <nav className={`${lightMode.lightMode ? "bg-secondaryBg-10" : "bg-dark-10"} h-[50px] w-full px-5`}>
      <div className="max-w-[1600px] w-full m-auto h-full flex items-center transition1 justify-between">
        <Logo lightMode={lightMode.lightMode} />
        <div className="flex w-full justify-between lg:max-w-[1200px] sm:max-w-[950px] mr-6">
          <LNavigation lightMode={lightMode.lightMode} />
          <SearchInput />
          <RNavigation />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
