"use client";
import React from "react";
import { New1, Popular, Follow } from "../Icons";
import useHomeSection from "@/app/hooks/useHomeSection";
import Ping from "../Ping";
interface HomeNavType {
  Name: "New" | "Popular" | "Follow";
  mainText: string;
  secondaryText: string;
  active: boolean;
}
const HomeNav: React.FC<HomeNavType> = ({ Name, mainText, secondaryText, active }) => {
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
      className={`w-full h-[50px] rounded-lg cursor-pointer dark:active:hover:bg-dark-30 active:hover:brightness-90 gap-2 flex p-2 lg1:gap-1 transition-all ${
        section === Name ? "bg-dark-40" : ""
      }`}
      onClick={func[Name]}>
      <div className="dark:bg-dark-40 p-2 rounded-md shrink-0 flex-center">{Icons[Name]}</div>
      <div className="flex flex-col justify-between flex-1 ">
        <p className="font-semibold lg1:font-normal text-xs flex items-center">
          {mainText}
          {Name === "Follow" ? <Ping /> : null}
        </p>
        <p className=" text-xss font-light text-secondary-30">{secondaryText}</p>
      </div>
    </div>
  );
};

export default HomeNav;
