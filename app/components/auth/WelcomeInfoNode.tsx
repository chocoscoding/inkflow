"use client";
import React, { ReactNode } from "react";
import { Business, Feedback, Fire, Inbox, Rocket, Trouble } from "../Icons";
import { motion } from "framer-motion";
interface WelcomeInfoNodeType {
  lightMode?: boolean;
  color: "red" | "yellow" | "blue" | "green";
  icon: "Rocket" | "Business" | "Chat" | "Inbox" | "Fire" | "Lightning";
  label: ReactNode;
}
const boxVariants = {
  initial: { y: "10rem" },
  animate: {
    y: 0,
    transition: { staggerChildren: 0.05, ease: "backOut", duration: 1 },
  },
};

const WelcomeInfoNode: React.FC<WelcomeInfoNodeType> = ({ color, icon, label }) => {
  const iconContainerColor = {
    red: "bg-red-10 dark:bg-dark-40",
    yellow: "bg-yellow-10 dark:bg-dark-40",
    blue: "bg-blue-10 dark:bg-dark-40",
    green: "bg-green-10 dark:bg-dark-40",
  };
  const iconColor = {
    red: "text-red-default",
    yellow: "text-yellow-default",
    blue: "text-blue-default",
    green: "text-green-default",
  };
  const iconScale = "scale-125 lg1:scale-95";
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
    <motion.div
      className="flex h-[100px] w-full  rounded-lg mb-5 items-center p-4 lg1:p-3 lg1:gap-2 gap-4 bg-white dark:bg-dark-30"
      variants={boxVariants}>
      <div
        className={`${iconContainerColor[color]} h-full w-[17%] lg1:w-[20%] lg1:h-[80%] rounded-lg shrink-0 flex items-center justify-center`}>
        {icons[icon]}
      </div>
      <p className="font-bold text-lg lg1:text-sm text-secondary-20 dark:text-secondary-60">{label}</p>
    </motion.div>
  );
};

export default WelcomeInfoNode;
