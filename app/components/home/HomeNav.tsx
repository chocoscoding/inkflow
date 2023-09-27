"use client";
import React from "react";
import { New1, Popular, Follow } from "../Icons";
import useHomeSection from "@/app/hooks/useHomeSection";
import Ping from "../Ping";
import { useSession } from "next-auth/react";
interface HomeNavType {
  Name: "New" | "Popular" | "Follow";
  mainText: string;
  secondaryText: string;
  active: boolean;
  followingPostsLength?: number;
}
const HomeNav: React.FC<HomeNavType> = ({ Name, mainText, secondaryText, followingPostsLength }) => {
  const { status } = useSession();
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

  const handleSwitch = () => {
    if (status !== "authenticated") return;
    func[Name]();
  };
  const showPing = () => {
    if (status !== "authenticated") return null;
    if (followingPostsLength === 0) return null;
    if (Name === "Follow") return <Ping />;
    return null;
  };
  const giveOpacity = () => {
    if (status !== "authenticated" && Name === "Follow") return "opacity-50";
    return "";
  };

  return (
    <div
      className={`w-full h-[50px] rounded-lg cursor-pointer dark:active:hover:bg-dark-30 active:hover:brightness-90 gap-2 flex p-2 lg1:gap-1 transition-all ${
        section === Name ? "bg-dark-40" : ""
      } ${giveOpacity()}`}
      onClick={handleSwitch}>
      <div className="dark:bg-dark-40 p-2 rounded-md shrink-0 flex-center">{Icons[Name]}</div>
      <div className="flex flex-col justify-between flex-1 ">
        <p className="font-semibold lg1:font-normal text-xs flex items-center">
          {mainText}
          {showPing()}
        </p>
        <p className=" text-xss font-light text-secondary-30">{secondaryText}</p>
      </div>
    </div>
  );
};

export default HomeNav;
