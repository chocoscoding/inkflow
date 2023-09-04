import React, { FC } from "react";
import ContentsClient from "./ContentsClient";
import { GroupPageType } from "@/app/types/client";
import getGroupPosts from "@/app/actions/Group/getGroupPost";

const page:FC<GroupPageType> = async ({params}) => {
  const posts = await getGroupPosts(params.id)
  return <ContentsClient groupPosts={posts}/>;
};

export default page;
