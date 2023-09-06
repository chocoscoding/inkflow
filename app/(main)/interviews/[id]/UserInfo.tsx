"use client";
import React, { FC } from "react";
import ReactTimeago from "react-timeago";
import Avatar from "@/app/components/Avatar";

const UserInfo: FC<{ image?: string | null; username?: string | null; createdAt: Date | string }> = ({ createdAt, username, image }) => (
  <section className="flex gap-4 p-1">
    <div className="rounded-md overflow-hidden w-[42px] h-[42px] object-cover">
      <Avatar
        src={image}
        size={40}
        className="m-0 rounded-full"
      />
    </div>
    <div className="">
      <p className="text-base md:font-semibold">{username}</p>
      <p className="text-xs text-secondary-30 md:text-sm">
        <ReactTimeago date={createdAt} />
      </p>
    </div>
  </section>
);
export default UserInfo;
