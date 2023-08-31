"use client";
import React from "react";
import Image from "next/image";
import Ripple from "../Ripple";
import { More } from "../Icons";
import { GroupRequests } from "@/app/types/client";
import Link from "next/link";
const Requested: React.FC<GroupRequests> = ({ group }) => {
  const { id, coverImage, name, _count } = group;
  return (
    <li className="flex justify-between items-center mb-4">
      <div className="flex flex-1 mr-3 sm:mr-4 gap-2 sm:gap-4">
        <div className="w-[70px] sm:w-[60px] h-[70px] sm:h-[60px]  rounded overflow-hidden object-cover shrink-0">
          <Image
            src={coverImage || `/images/placeholder.jpg`}
            width={400}
            priority
            height={400}
            alt="group-img"
            className="w-full h-auto aspect-square"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <Link href={`/groups/${id}`}>
            <p className="sm:font-medium text-base lg:text-lg md:truncate-lines-2 truncate-lines-4">{name}</p>
          </Link>
          <p className="text-sm text-gray-400">{`${_count.members} members`}</p>
        </div>
      </div>
      <Ripple containerClassName="outline outline-1 hover:outline-2 md:hover:bg-dark-20 px-2 outline-neutral-200 self-start">
        <button className="shrink-0 h-8 rounded-full sm1:text-xs">Withdraw</button>
      </Ripple>
    </li>
  );
};

export default Requested;
