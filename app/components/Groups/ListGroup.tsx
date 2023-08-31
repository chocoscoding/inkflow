"use client";
import Image from "next/image";
import React from "react";
import Ripple from "../Ripple";
import { More } from "../Icons";
import { GroupUserFollow } from "@/app/types/client";
import Link from "next/link";
import { useSession } from "next-auth/react";
const ListGroup: React.FC<GroupUserFollow> = ({ group }) => {
  const { id, coverImage, name, admin, _count } = group;
  const { data } = useSession();
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
          <p className="text-sm text-gray-400">
            {`${_count.members} members`}
            {admin.includes(`${data?.user.id}`) ? <span className="bg-dark-20 w-fit rounded-md p-1 ml-2">{`Owner`}</span> : ""}
          </p>
        </div>
      </div>
      <Ripple containerClassName="">
        <div className="w-10 h-10 rounded-full cursor-pointer md:hover:bg-dark-30 flex-center ">
          <More className="" />
        </div>
      </Ripple>
    </li>
  );
};

export default ListGroup;
