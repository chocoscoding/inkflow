"use client";
import { More } from "@/app/components/Icons";
import Ripple from "@/app/components/Ripple";
import Image from "next/image";
import React from "react";
import { Menu } from "@headlessui/react";
import Dropdown from "@/app/components/Dropdown";
import { OneMember_BannedUser } from "@/app/types/client";
import Link from "next/link";

const OneMemeber: React.FC<OneMember_BannedUser> = (props) => {
  const { buttonOnClick, buttonLabel, id, image, username } = props;
  return (
    <li className="flex justify-between items-center mb-4 border-b border-secondary-20 pb-2">
      <div className="flex flex-1 mr-3 sm:mr-4 gap-2 sm:gap-4">
        <div className="w-[50px] h-[50px]  rounded-full overflow-hidden object-cover shrink-0">
          <Image
            src={image || `/images/placeholder.jpg`}
            width={50}
            height={50}
            alt="group-img"
            className="h-full w-auto"
          />
        </div>

        <div className="flex w-full gap-1 items-center">
          <Link href={`/profile/${id}`}>
            <p className="sm:font-medium text-base lg:text-lg md:truncate-lines-2 truncate-lines-4">{`@${username}`}</p>
          </Link>
        </div>
      </div>
      <Ripple containerClassName="outline outline-slate-400 outline-1 hover:outline-2 outline-neutral-200 w-fit m-auto block my-2">
        <button
          onClick={buttonOnClick}
          className=" bg- shrink-0 h-8 rounded-full sm1:text-xs  md:hover:bg-dark text-gray-400 w-full select-none px-4 ">
          {buttonLabel}
        </button>
      </Ripple>
    </li>
  );
};

export default OneMemeber;
