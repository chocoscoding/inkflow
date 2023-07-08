"use client";
import React from "react";
import { New1, Popular, Follow } from "../Icons";
import useHomeSection from "@/app/hooks/useHomeSection";
import Ping from "../Ping";
interface HomeNavMobileType {
  Name: "New" | "Popular" | "Follow";
  mainText: string;
  secondaryText: string;
  active: boolean;
}
const HomeNavMobile: React.FC<HomeNavMobileType> = ({ Name, mainText, secondaryText, active }) => {
  const { section, new_, popular, follow } = useHomeSection();
  const Icons = {
    New: <New1 />,
    Popular: <Popular />,
    Follow: <Follow className="text-red-80" />,
  };
  const func = {
    New: new_,
    Popular: popular,
    Follow: follow,
  };

  return (
    <div
      className={`w-full h-[50px] rounded-lg cursor-pointer dark:active:hover:bg-dark-30 active:hover:brightness-90 gap-2 flex p-2 transition-all ${
        section === Name ? "bg-dark-40" : ""
      }`}
      onClick={func[Name]}>
      <div className="dark:bg-dark-40 p-2 rounded-md shrink-0 flex-center">{Icons[Name]}</div>
      <p className=" font-semibold sm1:text-xss text-xs flex items-center">
        {mainText}
        {Name === "Follow" ? <Ping /> : null}
      </p>
    </div>
  );
};

export default HomeNavMobile;
