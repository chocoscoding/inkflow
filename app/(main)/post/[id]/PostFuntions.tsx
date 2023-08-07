import React, { FC } from "react";
import { Comment, Report, Share } from "@/app/components/Icons";
import { Like } from "@/app/components/Icons/Icon";
interface PostFunctionsProps {
  extraClass: string;
}
const PostFuntions: FC<PostFunctionsProps> = ({ extraClass }) => {
  return (
    <section className={`md:w-10 w-full flex-shrink-0 min-w-[220px] bg-dark-30 rounded-xl h-fit p-2 ${extraClass}`}>
      <ul className="md1:flex md1:items-center gap-5 flex-wrap ba1:justify-evenly">
        <li className="flex ba1:flex-col gap-4 md1:gap-1.5 md:mb-3 items-center cursor-pointer md1:text-xs">
          <span className="p-1.5 bg-red-20 rounded-lg ">
            <Like className=" text-red-80" />
          </span>
          30,303 <span className="ba1:hidden">Likes</span>
        </li>
        <li className="flex ba1:flex-col gap-4 md1:gap-1.5 md:mb-3 items-center cursor-pointer md1:text-xs">
          <span className="p-1.5 bg-dark-40 rounded-lg ">
            <Comment className="text-secondary-30" />
          </span>
          1020 <span className="ba1:hidden">Comments</span>
        </li>
        <li className="flex ba1:flex-col gap-4 md1:gap-1.5 md:mb-3 items-center md1:text-xs">
          <span className="p-1.5 bg-dark-40 rounded-lg ">
            <Share className="text-secondary-30" />
          </span>
          Share
        </li>
        <li className="flex ba1:flex-col gap-4 md1:gap-1.5 md:mb-3 items-center md1:text-xs">
          <span className="p-1.5 bg-dark-40 rounded-lg ">
            <Report className="text-secondary-30" />
          </span>
          Report
        </li>
      </ul>
    </section>
  );
};

export default PostFuntions;
