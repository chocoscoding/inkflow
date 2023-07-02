"use client";
import React from "react";
import { New1, Popular, Follow } from "../Icons";
import useHomeSection from "@/app/hooks/useHomeSection";
import Ping from "../Ping";

const Meetup: React.FC<any> = () => {
  return (
    <div
      className={`w-full min-h-[70px] rounded-lg cursor-pointer dark:active:hover:bg-dark-30 active:hover:brightness-90 gap-2 flex p-2 transition-all border`}>
      <div className="rounded-md border flex flex-col items-center h-[4.3rem] px-2">
        <p className="">FEB</p>
        <p className="text-blue-80 font-extrabold text-2xl">7</p>
      </div>
      <div className="border flex-1 overflow-hidden">
        <p className="truncate font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores exercitationem eum natus iusto obcaecati odit magni
          repudiandae, adipisci quam blanditiis in quia! Nihil fugit laudantium, natus blanditiis consequuntur obcaecati?
        </p>
        <p>
          UIHUT <span></span> <span>Sylhet, Bangladesh</span>
        </p>
      </div>
    </div>
  );
};

export default Meetup;
