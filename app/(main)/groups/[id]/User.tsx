"use client";
import Avatar from "@/app/components/Avatar";
import { Follow1 } from "@/app/components/Icons";
import { GroupMember } from "@/app/types/client";
import Link from "next/link";
import React, { FC } from "react";

const User: FC<GroupMember> = ({ user }) => {
  const { firstname, lastname, id, image, username } = user;
  return (
    <div className="flex gap-3 w-full my-1">
      <Avatar
        src={image}
        size={50}
        className="h-fit rounded-full"
      />
      <div className="flex justify-between w-full items-center border-b border-dark-30">
        <div className="flex flex-col">
          <p>{`${firstname} ${lastname}`}</p>
          <Link href={`/profile/${id}`}>
            <p className="font-thin opacity-80 hover:underline">{`@${username}`}</p>
          </Link>
        </div>
        {/* <button className="w-[40px] h-[40px] bg-blue-10 rounded-full flex-center flex-shrink-0">
          <Follow1 className="text-blue-default" />
        </button> */}
      </div>
    </div>
  );
};

export default User;
