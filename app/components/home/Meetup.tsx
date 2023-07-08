"use client";
import React from "react";
import { New1, Popular, Follow } from "../Icons";
import useHomeSection from "@/app/hooks/useHomeSection";
import Ping from "../Ping";
import Tags from "../Tags";

const Meetup: React.FC<any> = () => {
  return (
    <div
      className={`w-full min-h-[70px] rounded-lg cursor-pointer dark:active:hover:bg-dark-30 active:hover:brightness-90 gap-3 flex p-[3px] transition-all select-none`}>
      <div className="rounded-md flex flex-col items-center h-[4.3rem] lg1:h-[3.5rem] px-2 shadow-md dark:shadow-dark-10">
        <p className="">FEB</p>
        <p className="text-blue-80 font-extrabold text-2xl lg1:text-xl">7</p>
      </div>
      <div className="flex-1 overflow-hidden">
        <p className="truncate font-semibold text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores exercitationem eum natus iusto obcaecati obcaecati?
        </p>
        <p className=" text-xs text-secondary-30">
          UIHUT <span></span> <span>Sylhet, Bangladesh</span>
        </p>
        <div className="flex mt-2 gap-2 overflow-x-auto scrollbar-none">
          <Tags label="Enterprenureship" />
          <Tags label="International" />
          <Tags label="Sustainability" />
        </div>
      </div>
    </div>
  );
};

export default Meetup;
