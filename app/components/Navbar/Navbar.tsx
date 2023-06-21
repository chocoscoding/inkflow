"use client";

import useLightMode from "@/app/hooks/useLightMode";
import Logo from "./Logo";

const Navbar = () => {
  const lightMode = useLightMode();
  return (
    <nav className={`${lightMode.lightMode ? "bg-dark-10" : "bg-secondaryBg-10"} h-[50px] w-full`}>
      <div className="max-w-[1600px] w-full m-auto h-full flex items-center">
        <Logo lightMode={lightMode.lightMode} />
      </div>
    </nav>
  );
};

export default Navbar;
