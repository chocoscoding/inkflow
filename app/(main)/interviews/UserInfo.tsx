"use client";
import React, { FC } from "react";
import ReactTimeago from "react-timeago";
import Avatar from "@/app/components/Avatar";
import Link from "next/link";

const UserInfo: FC<{ image?: string | null; username?: string | null; createdAt: Date | string; id?: string | null }> = ({
  createdAt,
  username,
  image,
  id,
}) => (
  <section className="flex gap-4 p-1">
    <div className="rounded-md overflow-hidden w-[42px] h-[42px] object-cover">
      <Avatar
        src={image}
        size={40}
        className="m-0 rounded-full"
      />
    </div>
    <div className="">
      <Link href={`/profile/${id}`}>
        <p className="text-base md:font-semibold">{username}</p>
      </Link>
      <p className="text-xs text-secondary-30 md:text-sm">
        <ReactTimeago date={createdAt} />
      </p>
    </div>
  </section>
);
export default UserInfo;
