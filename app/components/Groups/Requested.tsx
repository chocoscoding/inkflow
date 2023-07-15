import React from "react";
import Image from "next/image";
import Ripple from "../Ripple";
import { More } from "../Icons";
interface RequestedProps {}
const Requested: React.FC<RequestedProps> = ({}) => {
  return (
    <li className="flex justify-between items-center mb-4">
      <div className="flex flex-1 mr-3 sm:mr-4 gap-2 sm:gap-4">
        <div className="w-[70px] sm:w-[60px] h-[70px] sm:h-[60px]  rounded overflow-hidden object-cover shrink-0">
          <Image
            src={`https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`}
            width={100}
            height={100}
            alt="group-img"
            className="h-full w-auto"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="sm:font-medium text-base lg:text-lg md:truncate-lines-2 truncate-lines-4">
            The association of software developers who know how beautiful life is post Open AI era life is post Open AI era
          </p>
          <p className="text-sm text-gray-400">12,345 members</p>
        </div>
      </div>
      <Ripple containerClassName="outline outline-1 hover:outline-2 md:hover:bg-dark-20 px-2 outline-neutral-200 self-start">
        <button className="shrink-0 h-8 rounded-full sm1:text-xs">Withdraw</button>
      </Ripple>
    </li>
  );
};

export default Requested;
