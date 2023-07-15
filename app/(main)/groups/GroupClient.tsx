"use client";
import ListGroup from "@/app/components/Groups/ListGroup";
import { More } from "@/app/components/Icons";
import Ripple from "@/app/components/Ripple";
import { Button } from "@chocoscoding/react-library-template";
import React from "react";
const GroupClient = () => {
  return (
    <>
      <section className="w-full flex flex-col gap-2 bg-dark-30 rounded-xl min-h-[80vh] overflow-hidden">
        <div className="flex h-12 w-full  border-b border-gray-600  px-6 pt-2 ">
          <div className="flex-1 flex gap-4 sm:gap-8">
            <div className="relative w-fit pt-2 text-sm cursor-pointer">
              Your Groups
              <span className="bg-red-80 w-full h-[3px] absolute bottom-[-2px] left-0 rounded-xl"></span>
            </div>
            <div className="relative w-fit pt-2 text-sm cursor-pointer">
              Requsted
              <span className="bg-red-80 w-full h-[3px] absolute bottom-[-2px] left-0 rounded-xl"></span>
            </div>
          </div>
          <Ripple containerClassName="outline outline-1 hover:outline-2 md:hover:bg-dark-20 px-2 outline-neutral-200">
            <button className="shrink-0 h-8 rounded-full sm1:text-xs">Create Group</button>
          </Ripple>
        </div>

        <ul className="w-full px-4 mt-4">
          {Array(30)
            .fill(0)
            .map((e, i) => (
              <ListGroup
                owner={i % 2 === 0}
                key={`group-${i}`}
              />
            ))}
        </ul>
      </section>
    </>
  );
};

export default GroupClient;
