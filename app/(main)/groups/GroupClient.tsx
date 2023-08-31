"use client";
import ListGroup from "@/app/components/Groups/ListGroup";
import Requested from "@/app/components/Groups/Requested";
import Ripple from "@/app/components/Ripple";
import React, { FC, useState } from "react";
import RequestedClient from "./RequestedClient";
import YourGroupsClient from "./YourGroupsClient";
import Link from "next/link";
import { GroupsClientType } from "@/app/types/client";
const GroupClient:FC<GroupsClientType> = ({guf, groupRequests}) => {
  const [currentSection, setCurrentSection] = useState<1 | 2>(1);
  return (
    <>
      <section className="w-full flex flex-col gap-2 bg-dark-30 rounded-xl min-h-[80vh] overflow-hidden">
        <div className="flex h-12 w-full  border-b border-gray-600  px-6 pt-2 ">
          <div className="flex-1 flex gap-4 sm:gap-8">
            <div
              className="relative w-fit pt-2 text-sm cursor-pointer"
              onClick={() => setCurrentSection(1)}>
              Your Groups
              <span
                className={`bg-red-80 ${
                  currentSection === 1 ? "w-full" : "w-0"
                } h-[3px] absolute bottom-[-2px] left-0 rounded-xl transition-all`}></span>
            </div>
            <div
              className="relative w-fit pt-2 text-sm cursor-pointer"
              onClick={() => setCurrentSection(2)}>
              Requsted
              <span
                className={`bg-red-80 ${
                  currentSection === 2 ? "w-full" : "w-0"
                } h-[3px] absolute bottom-[-2px] left-0 rounded-xl transition-all`}></span>
            </div>
          </div>
          <Ripple containerClassName="outline outline-1 hover:outline-2 md:hover:bg-dark-20 px-2 outline-neutral-200">
            <Link href={`/create/group`}>
              <button className="shrink-0 h-8 rounded-full sm1:text-xs">Create Group</button>
            </Link>
          </Ripple>
        </div>

        <ul className="w-full px-4 mt-4">{currentSection === 1 ? <YourGroupsClient data={guf} /> : <RequestedClient data={groupRequests}/>}</ul>
      </section>
    </>
  );
};

export default GroupClient;
