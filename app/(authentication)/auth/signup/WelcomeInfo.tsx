"use client";
import Logo from "@/app/components/Navbar/Logo";
import useLightMode from "@/app/hooks/useLightMode";
import React from "react";

const WelcomeInfo = () => {
  const { lightMode } = useLightMode();
  const bg = lightMode ? "bg-secondaryBg-20" : "bg-dark-20";
  return (
    <section className={`w-[45%] lg1:w-[40%] md2:hidden h-full ${bg} p-8`}>
      <span className="shrink-0">
          <Logo lightMode={lightMode} noMarginLeft/>
      </span>
      <div className="f">ddd</div>
    </section>
  );
};

export default WelcomeInfo;
