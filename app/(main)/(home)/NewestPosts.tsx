"use client";
import Post from "@/app/components/home/Post";
import { OnePostMain } from "@/app/types/client";
import React, { FC } from "react";

const NewestPosts: FC<OnePostMain[]> = (posts) => {
  return (
    <>
      {Object.values(posts).map((ele, i) => (
        <Post
          key={`posts${i}`}
          {...ele}
        />
      ))}
    </>
  );
};

export default NewestPosts;
