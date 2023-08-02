"use client";
import { More } from "@/app/components/Icons";
import Ripple from "@/app/components/Ripple";
import Image from "next/image";
import React from "react";
import { Menu } from "@headlessui/react";
import Dropdown from "@/app/components/Dropdown";
interface ListGroupProps {
  keyName: string;
}

const OneMemeber: React.FC<ListGroupProps> = ({ keyName }) => {
  return (
    <li className="flex justify-between items-center mb-4 border-b border-secondary-20 pb-2">
      <div className="flex flex-1 mr-3 sm:mr-4 gap-2 sm:gap-4">
        <div className="w-[50px] h-[50px]  rounded-full overflow-hidden object-cover shrink-0">
          <Image
            src={`https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`}
            width={50}
            height={50}
            alt="group-img"
            className="h-full w-auto"
          />
        </div>

        <div className="flex w-full gap-1 items-center">
          <p className="sm:font-medium text-base lg:text-lg md:truncate-lines-2 truncate-lines-4">@timileyinwandfff</p>
          
        </div>
      </div>

      {/* list and dropdown  */}
      <Dropdown
        key={`dropdown_Members_${keyName}`}
        keyName={`dropdown_Members_${keyName}`}
        triggerButton={
          <div className="w-10 h-10 rounded-full cursor-pointer lg:hover:bg-dark-30 flex-center ">
            <More className="" />
          </div>
        }
        elementLists={[
          { label: "Accept", onClick: () => {} },
          { label: "Reject", onClick: () => {} },
        ]}
      />
    </li>
  );
};

export default OneMemeber;
