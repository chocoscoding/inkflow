import Post from "@/app/components/home/Post";
import { OnePostMain } from "@/app/types/client";
import React, { FC, useState } from "react";

const Posts: FC<{ data: OnePostMain[] | null }> = ({data}) => {
  const [posts, setPosts] = useState(data);
  if (!posts || posts.length < 1) return <p>No content found</p>;
  return (
    <>
      {posts.map((post, i) => (
        <Post
          {...post}
          key={`post__${i}`}
        />
      ))}
    </>
  );
};

export default Posts;
