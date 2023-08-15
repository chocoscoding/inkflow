"use client";
import { More } from "@/app/components/Icons";
import Ripple from "@/app/components/Ripple";
import Image from "next/image";
import React from "react";
import { Menu } from "@headlessui/react";
import Dropdown from "@/app/components/Dropdown";
interface ListGroupProps {
  buttonLabel: string;
  buttonOnClick: () => void;
}

const OneMemeber: React.FC<ListGroupProps> = ({ buttonOnClick, buttonLabel }) => {
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
