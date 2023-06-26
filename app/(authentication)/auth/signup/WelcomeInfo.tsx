"use client";
import Logo from "@/app/components/Navbar/Logo";
import WelcomeInfoContainer from "@/app/components/auth/WelcomeInfoContainer";
import WelcomeInfoNode from "@/app/components/auth/WelcomeInfoNode";
import { useTheme } from "next-themes";
import React from "react";

const WelcomeInfo = () => {
  const { theme } = useTheme();
  return (
    <section className={`w-[45%] lg1:w-[42%] md2:hidden h-full bg-secondaryBg-20 dark:bg-dark-20 p-8 lg1:p-4 flex flex-col`}>
      <span className="shrink-0">
        <Logo
          lightMode={theme === "light"}
          noMarginLeft
        />
      </span>
      <WelcomeInfoContainer
        heading="Join a thriving community of entrepreneurs and developers.
">
        <WelcomeInfoNode
          lightMode
          color="red"
          icon="Rocket"
          label="Help us build the best community for people like you."
        />
        <WelcomeInfoNode
          lightMode
          color="blue"
          icon="Inbox"
          label={
            <>
              Did you join before February 2017? You need to <span className="text-red-default">connect</span> an email address to your
              username.
            </>
          }
        />
      </WelcomeInfoContainer>
    </section>
  );
};

export default WelcomeInfo;
