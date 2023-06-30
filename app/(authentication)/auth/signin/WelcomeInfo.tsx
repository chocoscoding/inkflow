"use client";
import React from "react";
import { useTheme } from "next-themes";
import Logo from "@/app/components/Navbar/Logo";
import WelcomeInfoContainer from "@/app/components/auth/signup/WelcomeInfoContainer";
import WelcomeInfoNode from "@/app/components/auth/WelcomeInfoNode";

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
        key={"welcome1"}
        heading="Sign in to Inkflow">
        <WelcomeInfoNode
          lightMode
          color="green"
          icon="Inbox"
          label="Communicated faster and more securely"
        />
        <WelcomeInfoNode
          lightMode
          color="yellow"
          icon="Lightning"
          label="Supercharge your growth with the aid of like-minded people"
        />
      </WelcomeInfoContainer>
    </section>
  );
};

export default WelcomeInfo;
