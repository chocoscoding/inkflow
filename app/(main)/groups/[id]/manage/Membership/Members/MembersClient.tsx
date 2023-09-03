import { More, SearchIcon } from "@/app/components/Icons";
import Ripple from "@/app/components/Ripple";
import Image from "next/image";
import React, { FC } from "react";
import OneMemeber from "./OneMemeber";
import {GroupMembers as MemberClientType } from "@/app/types/client";

const MembersClient: FC<MemberClientType> = ({ users, groupInfo }) => {
  const { id, _count, name, admin } = groupInfo!;
  return (
    <div className="rounded-lg ">
      <div className="w-full">
        <div className="flex justify-between mb-4 flex-wrap bg-dark-40 py-2 px-2 rounded-lg items-center">
          <p className="text-lg">
            <span>{_count.members || 0} </span>Members
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
        {!users ? (
          <p>No data found</p>
        ) : (
          <ul>
            {users.map((user, i) => (
              <OneMemeber
                {...user.user}
                admin={admin.includes(user.user.id)}
                key={`group-${i}`}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MembersClient;
