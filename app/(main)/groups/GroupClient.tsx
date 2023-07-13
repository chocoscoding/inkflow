"use client";
import { More } from "@/app/components/Icons";
import Ripple from "@/app/components/Ripple";
import Image from "next/image";
import React from "react";

const GroupClient = () => {
  const Group = () => (
    <li className="flex justify-between items-center mb-4">
      <div className="flex flex-1 mr-3 sm:mr-4 gap-2 sm:gap-4">
        <div className="w-[70px] sm:w-[60px] h-[70px] sm:h-[60px]  rounded overflow-hidden object-cover shrink-0">
          <Image
            src={`https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`}
            width={100}
            height={100}
            alt="group-img"
            className="h-full w-auto"
          />
        </div>
        <div className="flex flex-col w-full">
          <p className="sm:font-semibold text-base lg:text-lg md:truncate-lines-2 truncate-lines-4">
            The association of software developers who know how beautiful life is post Open AI era life is post Open AI era
          </p>
          <p className="text-sm text-gray-400">12,345 members</p>
        </div>
      </div>
      <Ripple>
        <div className="w-10 h-10 rounded-full cursor-pointer md:hover:bg-dark-30 flex-center">
          <More className="" />
        </div>
      </Ripple>
    </li>
  );
  return (
    <>
      <section className="w-full flex flex-col gap-2 md1:mb-[50px] bg-dark-40 rounded-xl min-h-[80vh] overflow-hidden">
        <div className="flex gap-8 border-b border-gray-600 h-12 w-full px-6 pt-2">
          <div className="relative w-fit pt-2 text-sm cursor-pointer">
            Your Groups
            <span className="bg-red-80 w-full h-[3px] absolute bottom-[-2px] left-0 rounded-xl"></span>
          </div>
          <div className="relative w-fit pt-2 text-sm cursor-pointer">
            Requsted
            <span className="bg-red-80 w-full h-[3px] absolute bottom-[-2px] left-0 rounded-xl"></span>
          </div>
        </div>

        <ul className="w-full px-4 mt-4">
          {Array(30)
            .fill(0)
            .map((e, i) => (
              <Group key={`group-${i}`} />
            ))}
        </ul>
      </section>
    </>
  );
};

export default GroupClient;
