import { OnePostComponentType } from "@/app/types/client";
import React, { FC } from "react";
import OnePostAndInterview from "./OnePostAndInterview";

const Posts: FC<{ posts: OnePostComponentType[] }> = ({ posts }) => {
  if (posts.length === 0)
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-lg font-semibold">No posts found</p>
        <p className="text-sm text-gray-500">Try searching for something else</p>
      </div>
    );
  return (
    <>
      {posts.map((post, i) => (
        <OnePostAndInterview
          {...post}
          key={`post_${i}`}
        />
      ))}
    </>
  );
};

export default Posts;
