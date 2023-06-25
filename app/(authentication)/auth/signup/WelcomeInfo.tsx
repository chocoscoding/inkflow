"use client";
import Logo from "@/app/components/Navbar/Logo";
import WelcomeInfoNode from "@/app/components/auth/WelcomeInfoNode";
import useLightMode from "@/app/hooks/useLightMode";
import React from "react";

const WelcomeInfo = () => {
  const { lightMode } = useLightMode();
  const bg = lightMode ? "bg-secondaryBg-20" : "bg-dark-20";
  return (
    <section className={`w-[45%] lg1:w-[40%] md2:hidden h-full ${bg} p-8 flex flex-col`}>
      <span className="shrink-0">
        <Logo
          lightMode={lightMode}
          noMarginLeft
        />
      </span>
      <div className=" self-center flex-1 flex flex-col justify-center items-center p-4 w-10/12 max-h-[700px] max-w-[700px]">
        <h2 className="text-secondaryBg-20 font-bold xl:text-3xl text-2xl mb-7 w-full">
          Join a thriving community of entrepreneurs and developers.
        </h2>
        <WelcomeInfoNode lightMode color="red" icon="Rocket" label="Let's geddit"/>
        <div className="flex min-h-[90px] w-full bg-dark-30 rounded-lg mb-5">W</div>
        <div className="flex min-h-[90px] w-full bg-dark-30 rounded-lg"></div>
      </div>
    </section>
  );
};

export default WelcomeInfo;
