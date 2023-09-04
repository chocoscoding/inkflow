import { More, SearchIcon } from "@/app/components/Icons";
import Ripple from "@/app/components/Ripple";
import Image from "next/image";
import React, { FC } from "react";
import OneMemeber from "../Membership/Members/OneMemeber";
import OnePost from "./OnePost";
import { OnePostMain } from "@/app/types/client";

const ContentsClient: FC<{ groupPosts: OnePostMain[] }> = ({ groupPosts }) => {
  if (groupPosts.length < 1)
    return (
      <div className="rounded-lg ">
        <div className="w-full">
          <div className="flex justify-between mb-4 flex-wrap bg-dark-40 py-2 px-2 rounded-lg items-center">
            <p>No Post yet</p>
          </div>
        </div>
      </div>
    );
  return (
    <div className="rounded-lg ">
      <div className="w-full">
        <div className="flex justify-between mb-4 flex-wrap bg-dark-40 py-2 px-2 rounded-lg items-center">
          <p className="text-lg sm1:mb-4">
            <span>10k </span>Posts
          </p>
          <div className="flex p-2 rounded-lg bg-transparent flex-shrink-0 sm1:w-full min-w-[300px] outline outline-1">
            <SearchIcon />
            <input
              type="text"
              className={`bg-transparent outline-0 w-full pl-4 font-light`}
              placeholder="Search post by title..."
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-dark-40 p-2 rounded-lg">
        <ul>
          {groupPosts.map((post, i) => (
            <OnePost
              key={`group-${i}`}
              {...post}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentsClient;
