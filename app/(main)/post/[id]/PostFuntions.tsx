import React from "react";
import { Comment, Report, Share } from "@/app/components/Icons";
import { Like } from "@/app/components/Icons/Icon";

const PostFuntions = () => {
  return (
    <section className="w-10 flex-shrink-0 min-w-[220px] bg-dark-30 rounded-xl h-fit sticky top-[55px] p-2">
      <ul>
        <li className="flex gap-4 mb-3 items-center cursor-pointer">
          <span className="p-1.5 bg-red-20 rounded-lg">
            <Like className=" text-red-80" />
          </span>
          30,303 Likes
        </li>
        <li className="flex gap-4 mb-3 items-center cursor-pointer">
          <span className="p-1.5 bg-dark-40 rounded-lg">
            <Comment className="text-secondary-30" />
          </span>
          1020 Comments
        </li>
        <li className="flex gap-4 mb-3 items-center">
          <span className="p-1.5 bg-dark-40 rounded-lg">
            <Share className="text-secondary-30" />
          </span>
          Share
        </li>
        <li className="flex gap-4 mb-3 items-center">
          <span className="p-1.5 bg-dark-40 rounded-lg">
            <Report className="text-secondary-30" />
          </span>
          Report
        </li>
      </ul>
    </section>
  );
};

export default PostFuntions;
