import { DownArrow, Image as I_Image } from "@/app/components/Icons";
import React from "react";
//Author: @codingNinja-1

const PostField = () => {
  return (
    <section className="flex gap-6">
      <div className="flex items-center gap-4 p-3 bg-dark-40 rounded-md">
        <I_Image />
        <p className="text-sm">Set Cover</p>
      </div>
      <div className="flex items-center gap-2 p-3 bg-dark-40 rounded-md">
        <p className="text-sm">Select Group</p>
        <DownArrow />
      </div>
      <div className="flex items-center gap-2 p-3 bg-dark-40 rounded-md">
        <p className="text-sm text-secondary-30">
          Create-<span className="text-white">{`Post`}</span>
        </p>
        <DownArrow />
      </div>
    </section>
  );
};

export default PostField;
