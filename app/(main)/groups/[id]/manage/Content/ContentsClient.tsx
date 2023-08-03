import { More, SearchIcon } from "@/app/components/Icons";
import Image from "next/image";
import React from "react";
import OneMemeber from "../Membership/Members/OneMemeber";

const MembersClient = () => {
  return (
    <div className="rounded-lg ">
      <div className="w-full">
        <div className="flex justify-between mb-4 flex-wrap bg-dark-40 py-2 px-2 rounded-lg items-center">
          <p className="text-lg">
            <span>10k </span>Members
          </p>
          <div className="flex p-2 rounded-lg bg-transparent flex-shrink-0 sm1:w-full min-w-[300px] outline outline-1">
            <SearchIcon />
            <input
              type="text"
              className={`bg-transparent outline-0 w-full pl-4 font-light`}
              placeholder="Type here to search..."
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-dark-40 p-2 rounded-lg">
        <ul>
          {Array(30)
            .fill(0)
            .map((e, i) => (
              <OneMemeber
                owner={i === 0}
                key={`group-${i}`}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MembersClient;
