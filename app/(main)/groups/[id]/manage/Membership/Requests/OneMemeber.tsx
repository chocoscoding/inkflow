"use client";
import { More } from "@/app/components/Icons";
import Ripple from "@/app/components/Ripple";
import Image from "next/image";
import React from "react";
import Dropdown from "@/app/components/Dropdown";
import { MiniUser } from "@/app/types/client";
import Link from "next/link";

const OneMemeber: React.FC<MiniUser> = ({ username, id, image }) => {
  return (
    <li className="flex justify-between items-center mb-4 border-b border-secondary-20 pb-2">
      <div className="flex flex-1 mr-3 sm:mr-4 gap-2 sm:gap-4">
        <div className="w-[50px] h-[50px]  rounded-full overflow-hidden object-cover shrink-0">
          <Image
            src={image || `/images/placeholder.jpg`}
            width={50}
            height={50}
            alt="group-img"
            className="h-full w-auto aspect-square"
          />
        </div>

        <div className="flex w-full gap-1 items-center">
          <Link href={`/profile/${id}`}>
            <p className="sm:font-medium text-base lg:text-lg md:truncate-lines-2 truncate-lines-4">{`@${username}`}</p>
          </Link>
        </div>
      </div>

      {/* list and dropdown  */}
      <Dropdown
        key={`dropdown_Members_${id}`}
        keyName={`dropdown_Members_${id}`}
        triggerButton={
          <div className="w-10 h-10 rounded-full cursor-pointer lg:hover:bg-dark-30 flex-center ">
            <More className="" />
          </div>
        }
        elementLists={[
          { label: "Accept", onClick: () => {} },
          { label: "Reject", onClick: () => {} },
          { label: "Ban", onClick: () => {} },
        ]}
      />
    </li>
  );
};

export default OneMemeber;
