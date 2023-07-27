"use client";
import { BackArrow, SearchIcon } from "@/app/components/Icons";
import React from "react";
import User from "../User";
import { useRouter } from "next/navigation";
const MembersClient = () => {
  const { back } = useRouter();
  return (
    <>
      <div className="flex gap-2 items-baseline mb-4">
        <span onClick={back}>
          <BackArrow className="flex-shrink-0 mr-2" />
        </span>
        <p className="w-full text-secondary-30 text-lg font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde iusto veniam cupiditate, culpa iste dolorem Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Asperiores unde iusto veniam cupiditate, culpa i
        </p>
      </div>
      <div className="full max-w-[900px] m-auto">
        <div className="flex justify-between mb-4 flex-wrap">
          <p className="text-lg">102k members</p>
          <div className="flex p-2 rounded-md bg-secondary-60 dark:bg-dark-40 text-secondary-40 flex-shrink-0 sm1:w-full">
            <SearchIcon />
            <input
              type="text"
              className={`bg-transparent outline-0 w-full pl-4 font-light`}
              placeholder="Type here to search..."
            />
          </div>
        </div>

        {Array(30)
          .fill(0)
          .map((ele, i) => (
            <User key={`user__${i}`} />
          ))}
      </div>
    </>
  );
};

export default MembersClient;
