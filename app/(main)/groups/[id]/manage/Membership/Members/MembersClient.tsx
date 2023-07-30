import { SearchIcon } from "@/app/components/Icons";
import React from "react";

const MembersClient = () => {
  return (
    <div className="rounded-md border">
      <div className="w-full border">
        <p>
          Members . <span>1 Person</span>
        </p>

        <div className="flex justify-between mb-4 flex-wrap">
          <p className="text-lg">102k members</p>
          <div className="flex p-2 rounded-md bg-secondary-60 dark:bg-dark-40 text-secondary-40 flex-shrink-0 sm1:w-full">
            <SearchIcon />
            <input
              type="text"
              className={`bg-transparent outline-0 w-full pl-4 font-light`}
              placeholder="Type here to search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersClient;
