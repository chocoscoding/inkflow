import { SearchIcon } from "@/app/components/Icons";
import React from "react";

const MembersClient = () => {
  return (
    <div className="rounded-md ">
      <div className="w-full">
        <div className="flex justify-between mb-4 flex-wrap bg-dark-40 py-2 px-1 rounded-t-md">
          <p className="text-lg">
            <span>10k </span>Members
          </p>
          <div className="flex p-2 rounded-md bg-transparent flex-shrink-0 sm1:w-full min-w-[300px] outline outline-1">
            <SearchIcon />
            <input
              type="text"
              className={`bg-transparent outline-0 w-full pl-4 font-light`}
              placeholder="Type here to search..."
            />
          </div>
        </div>
      </div>
      <div className="w-full">oijioj</div>
    </div>
  );
};

export default MembersClient;
