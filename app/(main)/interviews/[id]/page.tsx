import React from "react";
import PostFuntions from "../../../components/PostFuntions";
import CreatorInfo from "../../../components/ContentControl";
import OneInterviewClient from "./OneInterviewClient";

const page = () => {
  const dataTemp = {
    referenceId: "64e1fb2d2e4b51bab1ec5f19",
    likeStatus: { id: "64d965ec96e0bce41d66ec9b" },
    replies: [],
    userId: "64d965ec96e0bce41d66ec9b",
    _count: { likes: 1, comments: 1 },
    extraClass: "md1:hidden sticky top-[55px]",
  };
  return (
    <div className="appScreen flex py-2 px-4 max-w-[1600px] m-auto gap-3 flex-wrap">
      <PostFuntions {...dataTemp} />
      <OneInterviewClient />
      <CreatorInfo
        editLink={`/Interview/${1}edit/`}
        contentType="Interview"
        contentId={"1"}
      />
    </div>
  );
};

export default page;
