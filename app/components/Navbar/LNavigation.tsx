"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Calendar, Groups, GroupsActive, Home, Interviews, Podcasts } from "../Icons";
import Link from "next/link";

const LNavigation = ({ lightMode }: { lightMode: boolean }) => {
  const route = usePathname();

  const lightColor = lightMode ? "text-secondaryBg-50" : "text-secondaryBg-10";

  const active = (pathName: string) => {
    if (route === "/" && pathName === " ") return "cursor-pointer bg-red-default p-2 rounded-md";
    if (route.includes(pathName)) return "cursor-pointer bg-red-default p-2 rounded-md";
    return "cursor-pointer hover:bg-dark-20 p-2 rounded-md";
  };
  return (
    <div className="flex gap-6 items-center flex-shrink-0">
      <span className={active(" ")}>
        <Link href={"/"}>
          <Home className={lightColor} />
        </Link>
      </span>
      <span className={active("meetups")}>
        <Link href={"/meetups"}>
          <Calendar className={lightColor} />
        </Link>
      </span>
      <span className={active("groups")}>
        <Link href={"/groups"}>
          <Groups className={lightColor} />
        </Link>
      </span>
      <span className={active("interviews")}>
        <Link href={"/interviews"}>
          <Interviews className={lightColor} />
        </Link>
      </span>
    </div>
  );
};

export default React.memo(LNavigation);
