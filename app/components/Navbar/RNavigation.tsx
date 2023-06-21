import React from "react";
import { ArrowDown, DownArrow, Message, Notification, Vector } from "../Icons";
import useLightMode from "@/app/hooks/useLightMode";
import Image from "next/image";
import Avatar from "../Avatar";

const RNavigation = () => {
  const lightMode = useLightMode();
  return (
    <div className="flex gap-6 items-center flex-shrink-0">
      <span className="cursor-pointer bg-dark-40 p-2 rounded-md hover:bg-dark-20">
        <Message className={`text-secondary-60`} />
      </span>
      <span className="cursor-pointer bg-dark-40 p-2 rounded-md hover:bg-dark-20">
        <Notification className={`text-secondary-60`} />
      </span>
      {/* user */}
      <section className="flex items-center gap-4 text-secondary-60">
        <div className="border border-yellow-30 rounded-md">
          <Avatar />
        </div>
        <p className="font-bold">Timileyin</p>
        <ArrowDown className={`text-secondary-60`} />
      </section>
    </div>
  );
};

export default RNavigation;
