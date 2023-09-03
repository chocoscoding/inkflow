"use client";
import { BackArrow, SearchIcon } from "@/app/components/Icons";
import React, { FC } from "react";
import User from "../User";
import { useRouter } from "next/navigation";
import { GroupMembers } from "@/app/types/client";
const MembersClient: FC<{ data: GroupMembers }> = ({ data }) => {
  const { back } = useRouter();
  const { name:groupName, _count, } = data.groupInfo!;
  return (
    <>
      <div className="flex gap-2 items-baseline mb-4">
        <span onClick={back}>
          <BackArrow className="flex-shrink-0 mr-2 cursor-pointer" />
        </span>
        <p className="w-full text-secondary-30 text-lg font-bold">{groupName}</p>
      </div>
      <div className="full max-w-[900px] m-auto">
        <div className="flex justify-between mb-4 flex-wrap">
          <p className="text-lg">{`${_count.members} members`}</p>
          <div className="flex p-2 rounded-md bg-secondary-60 dark:bg-dark-40 text-secondary-40 flex-shrink-0 sm1:w-full">
            <SearchIcon />
            <input
              type="text"
              className={`bg-transparent outline-0 w-full pl-4 font-light`}
              placeholder="Type here to search..."
            />
          </div>
        </div>

        {data.users.map((user, i) => (
          <User {...user} key={`user__${i}`} />
        ))}
      </div>
    </>
  );
};

export default MembersClient;
