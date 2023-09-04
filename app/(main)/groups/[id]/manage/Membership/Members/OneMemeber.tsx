"use client";
import { More } from "@/app/components/Icons";
import Ripple from "@/app/components/Ripple";
import Image from "next/image";
import React from "react";
import { Menu } from "@headlessui/react";
import Dropdown from "@/app/components/Dropdown";
import { ListGroupProps } from "@/app/types/client";
import Link from "next/link";

const OneMemeber: React.FC<ListGroupProps> = ({ admin, id, username, image }) => {
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
          {admin ? (
            <p className="text-sm text-gray-400">
              <span className="bg-dark-20 w-fit rounded-md p-1 ml-2">Admin</span>
            </p>
          ) : null}
        </div>
      </div>

      {/* list and dropdown  */}
      {admin ? null : (
        <Dropdown
          key={`dropdown_Members_${id}`}
          keyName={`dropdown_Members_${id}`}
          triggerButton={
            <div className="w-10 h-10 rounded-full cursor-pointer lg:hover:bg-dark-30 flex-center ">
              <More className="" />
            </div>
          }
          elementLists={[{ label: "Ban", onClick: () => {} }]}
        />
      )}
    </li>
  );
};

export default OneMemeber;
