"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Calendar, Groups, GroupsActive, Home, Interviews, Podcasts } from "../Icons";
import Link from "next/link";

const LNavigation = ({ lightMode }: { lightMode: boolean }) => {
  const route = usePathname();

  const lightColor = lightMode ? "text-secondaryBg-50" : "text-secondaryBg-10";

  const active = (pathName: string) => {
    if (route === "/" && pathName === " ") return " bg-red-default font-sm";
    if (route.includes(pathName)) return " bg-red-default font-sm";
    return "hover:bg-dark-20";
  };
  return (
    <div className="flex xl:gap-6 lg:gap-4 md:gap-3 gap-2 items-center flex-shrink-0">
      <Link
        href={"/"}
        className={`${active(" ")} cursor-pointer p-2 rounded-md xl1:scale-75 text-inherit no-underline`}>
        <Home className={lightColor} />
      </Link>
      <Link
        href={"/meetups"}
        className={`${active("meetups")} cursor-pointer p-2 rounded-md xl1:scale-75 text-inherit no-underline`}>
        <Calendar className={lightColor} />
      </Link>
      <Link
        href={"/groups"}
        className={`${active("groups")} cursor-pointer p-2 rounded-md xl1:scale-75 text-inherit no-underline`}>
        <Groups className={lightColor} />
      </Link>
      <Link
        href={"/interviews"}
        className={`${active("interviews")} cursor-pointer p-2 rounded-md xl1:scale-75 text-inherit no-underline`}>
        <Interviews className={lightColor} />
      </Link>
    </div>
  );
};

export default React.memo(LNavigation);
