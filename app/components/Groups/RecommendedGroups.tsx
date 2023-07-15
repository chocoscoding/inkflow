import Image from "next/image";
import React from "react";

const RecommendedGroups = () => {
  return (
    <li className=" border-b border-gray-600 py-4 last:border-none">
      <div className="flex flex-1 gap-2">
        <div className="w-[50px] xl:w-[60px] h-[50px] xl:h-[60px] rounded-md overflow-hidden object-cover shrink-0">
          <Image
            src={`https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`}
            width={100}
            height={100}
            alt="group-img"
            className="h-full w-auto"
          />
        </div>
        <div className="flex flex-col w-full">
          <p className="text-base truncate-lines-4">React Developers - ReactJS & React Native Professional Development Mastermind</p>
          <p className="text-sm text-gray-400 my-1">12,345 members</p>
          <button className="shrink-0 outline outline-2 p-1 outline-neutral-200 rounded-full w-[70px]  mt-2">Join</button>
        </div>
      </div>
    </li>
  );
};

export default RecommendedGroups;
