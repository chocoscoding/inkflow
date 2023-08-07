import React from "react";
import Avatar from "@/app/components/Avatar";
import { Edit, Trash } from "@/app/components/Icons";

const ContentControl = () => {
  return (
    <section className="lg3a:w-10 w-full flex-shrink-0 min-w-[305px] h-fit lg3a:sticky lg3a:top-[55px]">
      <ul className="flex flex-col bg-dark-30 rounded-xl p-2">
        <li className="flex px-2 py-3 hover:bg-dark-40 cursor-pointer rounded-lg gap-3">
          <Edit /> <p>Edit Post</p>
        </li>
        <li className="flex px-2 py-3 hover:bg-dark-40 cursor-pointer rounded-lg gap-3 text-red-80">
          <Trash /> <p>Delete Post</p>
        </li>
      </ul>
    </section>
  );
};

export default ContentControl;
