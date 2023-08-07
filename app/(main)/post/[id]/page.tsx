import Avatar from "@/app/components/Avatar";
import { Comment, Report, Share } from "@/app/components/Icons";
import { Like } from "@/app/components/Icons/Icon";
import React from "react";
import PostFuntions from "./PostFuntions";
import CreatorInfo from "./CreatorInfo";
import PostClient from "./PostClient";

const page = () => {
  return (
    <div className="appScreen flex py-2 px-4 max-w-[1600px] m-auto gap-3 flex-wrap">
      <PostFuntions extraClass="md1:hidden sticky top-[55px]" />
      <PostClient />
      <span className="lg3:hidden">
        <CreatorInfo />
      </span>
    </div>
  );
};

export default page;
