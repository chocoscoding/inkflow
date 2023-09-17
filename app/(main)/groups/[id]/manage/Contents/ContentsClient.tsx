"use client";
import { More, SearchIcon } from "@/app/components/Icons";
import Ripple from "@/app/components/Ripple";
import Image from "next/image";
import React, { FC } from "react";
import OneMemeber from "../Membership/Members/OneMemeber";
import OnePost from "./OnePost";
import { CursorPaginativeReturnType, OnePostMain } from "@/app/types/client";
import CursorPagination from "@/app/components/Pagination/CursorPagination";
import PostsLoading from "@/app/components/loading/PostsLoading";
import axios from "axios";
import toast from "react-hot-toast";
import PostsMiniLoading from "@/app/components/loading/PostsMiniLoading";

const ContentsClient: FC<{ id: string; postsCount: number | null; groupPosts: CursorPaginativeReturnType<OnePostMain[]> }> = ({
  groupPosts,
  id,
  postsCount,
}) => {
  const fetchData = async (cursor: string | null) => {
    try {
      const apiCall = await axios(`/api/group/${id}/posts?cursor=${cursor}`);
      return apiCall.data as CursorPaginativeReturnType<OnePostMain[]>;
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong");
      return {
        data: [],
        metaData: null,
      };
    }
  };

  if (groupPosts.data.length < 1)
    return (
      <div className="rounded-lg ">
        <div className="w-full">
          <div className="flex justify-between mb-4 flex-wrap bg-dark-40 py-2 px-2 rounded-lg items-center">
            <p>No Post yet</p>
          </div>
        </div>
      </div>
    );
  return (
    <div className="rounded-lg ">
      <div className="w-full">
        <div className="flex justify-between mb-4 flex-wrap bg-dark-40 py-2 px-2 rounded-lg items-center">
          <p className="text-lg sm1:mb-4">
            <span>{postsCount || 0} </span>Posts
          </p>
          <div className="flex p-2 rounded-lg bg-transparent flex-shrink-0 sm1:w-full min-w-[300px] outline outline-1">
            <SearchIcon />
            <input
              type="text"
              className={`bg-transparent outline-0 w-full pl-4 font-light`}
              placeholder="Search post by title..."
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-dark-40 p-2 rounded-lg">
        <ul>
          <CursorPagination
            initialElements={groupPosts}
            keyname="groupPosts"
            ListComponent={OnePost}
            fetchData={fetchData}
            loadingComponent={<PostsMiniLoading />}
          />
        </ul>
      </div>
    </div>
  );
};

export default ContentsClient;
