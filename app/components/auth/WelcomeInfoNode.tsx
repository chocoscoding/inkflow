"use client";
import React, { ReactNode } from "react";
import { Business, Feedback, Fire, Inbox, Rocket, Trouble } from "../Icons";
import useLightMode from "@/app/hooks/useLightMode";
interface WelcomeInfoNodeType {
  lightMode?: boolean;
  color: "red" | "yellow" | "blue" | "green";
  icon: "Rocket" | "Business" | "Chat" | "Inbox" | "Fire" | "Lightning";
  label: ReactNode;
}

const WelcomeInfoNode: React.FC<WelcomeInfoNodeType> = ({ color, icon, label }) => {
  const { lightMode } = useLightMode();
  const iconContainerColor = {
    red: lightMode ? "bg-red-10" : "bg-dark-40",
    yellow: lightMode ? "bg-yellow-10" : "bg-dark-40",
    blue: lightMode ? "bg-blue-10" : "bg-dark-40",
    green: lightMode ? "bg-green-10" : "bg-dark-40",
  };
  const iconColor = {
    red: "text-red-default",
    yellow: "text-yellow-default",
    blue: "text-blue-default",
    green: "text-blue-default",
  };
  const iconScale = "scale-125";
  iconColor["red"];
  const icons = {
    Rocket: <Rocket className={`${iconScale} ${iconColor[color]}`} />,
    Business: <Business className={`${iconScale} ${iconColor[color]}`} />,
    Lightning: <Trouble className={`${iconScale} ${iconColor[color]}`} />,
    Inbox: <Inbox className={`${iconScale} ${iconColor[color]}`} />,
    Fire: <Fire className={`${iconScale} ${iconColor[color]}`} />,
    Chat: <Feedback className={`${iconScale} ${iconColor[color]}`} />,
  };

  return (
    <div className="  flex h-[100px] w-full bg-dark-30 rounded-lg mb-5 items-center p-4 gap-4  dark:bg-green-dark-10">
      <div className={`${iconContainerColor[color]} h-full w-[17%] rounded-lg shrink-0 flex items-center justify-center`}>
        {icons[icon]}
      </div>
      <p className="font-bold text-lg text-secondary-60 ">{label}</p>
    </div>
  );
};

export default WelcomeInfoNode;
