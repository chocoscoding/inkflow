import Avatar from "@/app/components/Avatar";
import { Follow1 } from "@/app/components/Icons";
import React from "react";

const User = () => {
  return (
    <div className="flex gap-3 w-full my-1">
      <Avatar
        size={50}
        className="h-fit rounded-full"
      />
      <div className="flex justify-between w-full items-center border-b border-dark-30">
        <div className="flex flex-col">
          <p>Timileyin Oluwachocos</p>
          <p className="font-thin opacity-80 hover:underline">@{`username`}</p>
        </div>
        {/* <button className="w-[40px] h-[40px] bg-blue-10 rounded-full flex-center flex-shrink-0">
          <Follow1 className="text-blue-default" />
        </button> */}
      </div>
    </div>
  );
};

export default User;
