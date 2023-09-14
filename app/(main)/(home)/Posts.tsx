"use client";
import HomeNavMobile from "@/app/components/home/HomeNavMobile";
import Post from "@/app/components/home/Post";
import useHomeSection from "@/app/hooks/useHomeSection";
import { OnePost } from "@/app/types/client";
import React, { FC } from "react";
import FollowingPosts from "./FollowingPosts";
import NewestPosts from "./NewestPosts";

const Posts: FC<OnePost> = ({ posts, followingPost }) => {
  const { section } = useHomeSection();
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
      {section === "New" ? <NewestPosts {...posts} /> : null}
      {section === "Follow" ? <FollowingPosts {...followingPost} /> : null}
    </section>
  );
};

export default Posts;
