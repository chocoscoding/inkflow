"use client";
import ListGroup from "@/app/components/Groups/ListGroup";
import { More } from "@/app/components/Icons";
import Ripple from "@/app/components/Ripple";
import Image from "next/image";
import React from "react";

const GroupClient = () => {
  return (
    <>
      <section className="w-full flex flex-col gap-2 bg-dark-40 rounded-xl min-h-[80vh] overflow-hidden">
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
              <ListGroup key={`group-${i}`} />
            ))}
        </ul>
      </section>
    </>
  );
};

export default GroupClient;
