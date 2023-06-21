"use client";
import React, { FC, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Calendar, Groups, GroupsActive, Home, Interviews, Podcasts, SearchIcon } from "../Icons";
import Link from "next/link";
import useSearchModal from "@/app/hooks/useSearchModal";
import useLightMode from "@/app/hooks/useLightMode";

interface LNavigationType {
  bottom?: boolean;
}
const LNavigation: FC<LNavigationType> = ({ bottom }) => {
  const { lightMode } = useLightMode();
  console.log(lightMode);

  const route = usePathname();
  const { onOpen } = useSearchModal();
  const lightColor = lightMode ? "text-secondaryBg-50" : "text-secondaryBg-10";
  const lightColor2 = lightMode ? "text-secondaryBg-40" : "text-secondary-40";
  const conditionalStyles_Bottom = useCallback(() => {
    const conditionalStyle1 = bottom ? `md2:flex md2:w-full hidden sticky bottom-0 px-1 py-2 justify-around` : `sm:flex hidden`;
    const conditionalStyle2 = bottom ? `md2:scale-110` : `xl1:scale-75`;
    const conditionalStyle3 = () => {
      if (!bottom) return "";
      return lightMode ? "bg-secondaryBg-10" : "bg-dark-10";
    };
    return {
      body: conditionalStyle1,
      scale: conditionalStyle2,
      bg: conditionalStyle3(),
    };
  }, []);
  const active = (pathName: string) => {
    if (route === "/" && pathName === " ") return " bg-red-default font-sm";
    if (route.includes(pathName)) return " bg-red-default font-sm";
    return "hover:bg-dark-20";
  };

  return (
    <>
      <div
        className={`xl:gap-6 lg:gap-4 md:gap-3 gap-2 items-center flex-shrink-0 ${conditionalStyles_Bottom().body} ${
          conditionalStyles_Bottom().bg
        }`}>
        <Link
          href={"/"}
          className={`${active(" ")} cursor-pointer p-2 rounded-md ${conditionalStyles_Bottom().scale} text-inherit no-underline`}>
          <Home className={lightColor} />
        </Link>
        <Link
          href={"/meetups"}
          className={`${active("meetups")} cursor-pointer p-2 rounded-md ${conditionalStyles_Bottom().scale} text-inherit no-underline`}>
          <Calendar className={lightColor} />
        </Link>
        <Link
          href={"/groups"}
          className={`${active("groups")} cursor-pointer p-2 rounded-md ${conditionalStyles_Bottom().scale} text-inherit no-underline`}>
          <Groups className={lightColor} />
        </Link>
        <Link
          href={"/interviews"}
          className={`${active("interviews")} cursor-pointer p-2 rounded-md ${conditionalStyles_Bottom().scale} text-inherit no-underline`}>
          <Interviews className={lightColor} />
        </Link>
      </div>

      {bottom ? null : (
        <div className="sm:hidden items-center flex-shrink-0 flex">
          <span
            className={`cursor-pointer p-1 rounded-md xl1:scale-90`}
            onClick={onOpen}>
            <SearchIcon
              weight={2}
              className={lightColor2}
            />
          </span>
        </div>
      )}
    </>
  );
};

export default React.memo(LNavigation);
