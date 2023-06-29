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
  const route = usePathname();
  const { onOpen } = useSearchModal();
  const lightColor = "text-secondary-50 dark:text-secondaryBg-10";
  const conditionalStyles_Bottom = useCallback(() => {
    const conditionalStyle1 = bottom ? `md2:flex md2:w-full hidden sticky bottom-0 px-1 py-2 justify-around` : `sm:flex hidden`;
    const conditionalStyle2 = bottom ? `md2:scale-110` : `xl1:scale-75`;
    const conditionalStyle3 = () => {
      if (!bottom) return "";
      return "bg-secondaryBg-10 dark:bg-dark-10";
    };
    return {
      body: conditionalStyle1,
      scale: conditionalStyle2,
      bg: conditionalStyle3(),
    };
  }, []);
  const active = (pathName: string) => {
    if (route === "/" && pathName === " ") return { container: "bg-red-default font-sm text-secondaryBg-10", icon: "text-secondaryBg-10" };
    if (route?.includes(pathName)) return { container: "bg-red-default font-sm text-secondaryBg-10", icon: "text-secondaryBg-10" };
    return { container: "hover:bg-secondaryBg-20 dark:hover:bg-dark-20", icon: "" };
  };

  return (
    <>
      <div
        className={`xl:gap-6 lg:gap-4 md:gap-3 gap-2 items-center flex-shrink-0 ${conditionalStyles_Bottom().body} ${
          conditionalStyles_Bottom().bg
        }`}>
        <Link
          href={"/"}
          className={`${active(" ").container} cursor-pointer p-2 rounded-md ${
            conditionalStyles_Bottom().scale
          } text-inherit no-underline`}>
          <Home className={`${lightColor} ${active(" ").icon} `} />
        </Link>
        <Link
          href={"/meetups"}
          className={`${active("meetups").container} cursor-pointer p-2 rounded-md ${
            conditionalStyles_Bottom().scale
          } text-inherit no-underline`}>
          <Calendar className={`${lightColor} ${active("meetups").icon}`} />
        </Link>
        <Link
          href={"/groups"}
          className={`${active("groups").container} cursor-pointer p-2 rounded-md ${
            conditionalStyles_Bottom().scale
          } text-inherit no-underline`}>
          <Groups className={`${lightColor} ${active("groups").icon}`} />
        </Link>
        <Link
          href={"/interviews"}
          className={`${active("interviews").container} cursor-pointer p-2 rounded-md ${
            conditionalStyles_Bottom().scale
          } text-inherit no-underline`}>
          <Interviews className={`${lightColor} ${active("interviews").icon}`} />
        </Link>
      </div>

      {bottom ? null : (
        <div className="sm:hidden items-center flex-shrink-0 flex">
          <span
            className={`cursor-pointer p-1 rounded-md xl1:scale-90`}
            onClick={onOpen}>
            <SearchIcon
              weight={2}
              className={`text-secondary-40 dark:text-secondary-40`}
            />
          </span>
        </div>
      )}
    </>
  );
};

export default React.memo(LNavigation);
