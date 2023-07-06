import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="bg-dark-30 h-56 w-full mb-4 rounded-xl flex p-4">
      <Image
        src={
          "https://images.unsplash.com/photo-1635006459494-c9b9665a666e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
        }
        width={200}
        height={320}
        alt="post-Image"
        className="rounded-lg"
      />
      <div className=""></div>
    </div>
  );
};

export default Post;
