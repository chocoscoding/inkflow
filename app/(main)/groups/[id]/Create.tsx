import React from "react";

const Create = () => {
  return (
    <div className="w-full rounded-xl bg-[#FF7C4D] p-4 h-fit min-h-[180px] md1:min-h-[152px]">
      <p className="font-semibold text-lg">Add a post here</p>
      <p className="text-xs my-4">Create a post for other users on this group to see and interact with.</p>

      <div className="flex flex-wrap justify-between gap-4 md:max-w-[300px]">
        <button className="text-red-10 bg-red-60 px-2 py-3 text-sm rounded-md flex-1 sm1:min-w-[200px] flex-shrink-0">
          Code of Conduct
        </button>
        <button className="text-red-80 bg-secondaryBg-10 px-2 py-3 text-sm rounded-md flex-1 sm1:min-w-[200px] flex-shrink-0">
          Create Post
        </button>
      </div>
    </div>
  );
};

export default Create;
