"use client";
import Logo from "@/app/components/Navbar/Logo";
import AllWelcome from "@/app/components/welcome/AllWelcome";
import { useTheme } from "next-themes";
import React from "react";

const WelcomeInfo = () => {
  const { theme } = useTheme();
  return (
    <section className={`w-[45%] lg1:w-[42%] md2:hidden h-full bg-secondaryBg-20 dark:bg-dark-20 p-8 lg1:p-4 flex flex-col`}>
      <span className="shrink-0">
        <Logo
          lightMode={theme === "dark"}
          noMarginLeft
        />
      </span>
      <AllWelcome />
    </section>
  );
};

export default React.memo(WelcomeInfo);
