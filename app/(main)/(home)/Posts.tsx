"use client";
import HomeNavMobile from "@/app/components/home/HomeNavMobile";
import Post from "@/app/components/home/Post";
import useHomeSection from "@/app/hooks/useHomeSection";
import { CursorPaginativeReturnType, OnePost, OnePostMain } from "@/app/types/client";
import React, { FC } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CursorPagination from "@/app/components/Pagination/CursorPagination";
import PostsLoading from "@/app/components/loading/PostsLoading";

const Posts: FC<OnePost> = ({ posts, followingPost }) => {
  const { section } = useHomeSection();

  const fetchDataNewestPosts = async (cursor: string | null) => {
    try {
      const apiCall = await axios(`/api/post/all?cursor=${cursor}`);
      return apiCall.data as CursorPaginativeReturnType<OnePostMain[]>;
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong");
      return {
        data: [],
        metaData: {
          newCursor: cursor,
          hasMore: true,
        },
      };
    }
  };
  const fetchDataFollowingUsersPosts = async (cursor: string | null) => {
    try {
      const apiCall = await axios(`/api/post/following/all?cursor=${cursor}`);
      return apiCall.data as CursorPaginativeReturnType<OnePostMain[]>;
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong");
      return {
        data: [],
        metaData: {
          newCursor: cursor,
          hasMore: true,
        },
      };
    }
  };
  return (
    <section className="min-h-screen w-7/12 flex-1 pt-1 md:overflow-hidden">
      <div className="sticky top-[50px] py-2 bg-dark-20 md2:flex hidden">
        <HomeNavMobile
          Name="New"
          mainText="Newest"
          secondaryText="Find the latest updates"
          active={true}
        />
        <HomeNavMobile
          Name="Popular"
          mainText="Popular"
          secondaryText="The best of today"
          active={false}
        />
        <HomeNavMobile
          Name="Follow"
          mainText="Following"
          secondaryText="Explore from your favourite person"
          active={false}
        />
      </div>
      {section === "New" ? (
        <CursorPagination
          initialElements={posts}
          keyname="newestPosts"
          ListComponent={Post}
          fetchData={fetchDataNewestPosts}
          loadingComponent={<PostsLoading />}
        />
      ) : null}
      {section === "Follow" ? (
        <CursorPagination
          initialElements={followingPost}
          keyname="newestPosts"
          ListComponent={Post}
          fetchData={fetchDataFollowingUsersPosts}
          loadingComponent={<PostsLoading />}
        />
      ) : null}
    </section>
  );
};

export default Posts;
