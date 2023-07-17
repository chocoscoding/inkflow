import { DownArrow, Image as I_Image } from "@/app/components/Icons";
import CreateTypeModal from "@/app/components/modals/Create/CreationType";
import CreationType from "@/app/components/modals/Create/CreationType";
import Groups from "@/app/components/modals/Create/Groups";
import React, { useState } from "react";
//Author: @codingNinja-1
export type GroupType = {
  id: string;
  name: string;
  image: string;
};

const PostField = () => {
  const [openType, setOpenType] = useState(false);
  const [openGroups, setOpenGroups] = useState(false);
  const [postType, setPostType] = useState<"Post" | "Interview" | "Meetup">("Post");
  const [postGroup, setPostGroup] = useState<GroupType | null>(null);

  return (
    <section className="flex gap-6 flex-wrap md1:gap-3">
      <div className="flex items-center gap-4 p-3 bg-dark-40 rounded-md ">
        <I_Image />
        <p className="text-sm">Set Cover</p>
      </div>
      <div
        className="flex items-center gap-2 p-3 bg-dark-40 rounded-md max-w-[300px]"
        onClick={() => setOpenGroups(true)}>
        <p className="text-sm w-full truncate-lines-1">{postGroup ? postGroup.name : "Select Group"}</p>
        <DownArrow className="shrink-0" />
      </div>
      <div
        className="flex items-center gap-2 p-3 bg-dark-40 rounded-md cursor-pointer"
        onClick={() => setOpenType(true)}>
        <p className="text-sm text-secondary-30">
          Create-<span className="text-white">{postType}</span>
        </p>
        <DownArrow />
      </div>
      <Groups
        open={openGroups}
        setOpen={setOpenGroups}
        group={postGroup}
        setGroup={setPostGroup}
      />
      <CreationType
        open={openType}
        setOpen={setOpenType}
        postType={postType}
        setPostType={setPostType}
      />
    </section>
  );
};

export default PostField;
