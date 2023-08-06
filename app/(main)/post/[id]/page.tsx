import Avatar from "@/app/components/Avatar";
import { Comment, Report, Share } from "@/app/components/Icons";
import { Like } from "@/app/components/Icons/Icon";
import React from "react";
import PostFuntions from "./PostFuntions";
import CreatorInfo from "./CreatorInfo";
import PostClient from "./PostClient";

const page = () => {
  return (
    <div className="appScreen flex p-2 max-w-[1600px] m-auto gap-3">
      <PostFuntions />
      <PostClient/>
      <CreatorInfo/>
    </div>
  );
};

export default page;
