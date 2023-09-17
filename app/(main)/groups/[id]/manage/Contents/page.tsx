import React, { FC } from "react";
import ContentsClient from "./ContentsClient";
import { GroupPageType } from "@/app/types/client";
import getGroupPosts from "@/app/actions/Group/getGroupPost";
import getGroupPostCount from "@/app/actions/Group/getGroupPostCount";

const page: FC<GroupPageType> = async ({ params }) => {
  const postsPromise = getGroupPosts(params.id);
  const postsCountPromise = getGroupPostCount(params.id);
  const [posts, postsCount] = await Promise.all([postsPromise, postsCountPromise]);
  return (
    <ContentsClient
      groupPosts={posts}
      postsCount={postsCount}	
      id={params.id}
    />
  );
};

export default page;
