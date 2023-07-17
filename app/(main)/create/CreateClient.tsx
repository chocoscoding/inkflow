"use client";
import React from "react";
import PostField from "./PostField";
/*(@chocoscoding) */

const CreateClient = () => {
  return (
    <div className="rounded-md bg-dark-30 p-4 w-[95vw] m-auto max-w-[1300px] min-h-[89vh]">
      <input
        type="text"
        className=" h-14 rounded-lg w-full bg-dark-40 text-secondary-30 mb-4 text-xl font-semibold p-3
        outline outline-0 
        focus:outline-2
        focus:outline-secondary-20
        "
        placeholder="Title..."
      />
      
      <PostField/>
      <div className="textArea">P</div>
      <div className="tags"></div>
      <div className="w-full flex gap-4">
        <button className="bg-blue-default py-2.5 px-6 rounded-md min-w-[140px] hover:bg-blue-80 cursor-pointer">Publish</button>
        <button className="text-secondary-30 py-2.5 px-6 rounded-md min-w-[140px] hover:bg-dark-20 cursor-pointer">Cancel</button>
      </div>
    </div>
  );
};

export default CreateClient;
