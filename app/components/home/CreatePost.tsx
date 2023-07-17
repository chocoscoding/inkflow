"use client";
import { useState } from "react";
import Avatar from "../Avatar";

const CreatePost = () => {
  const [postText, setPostText] = useState<string>("");
  return (
    <section className="bg-dark-30 w-full inline-flex h-16 mb-2 rounded-md gap-2 p-2.5 md1:p-2 items-center">
      <div className="flex-shrink-0 sm1:scale-90">
        <Avatar
          size={40}
          className="rounded-full "
        />
      </div>
      <input
        className="w-full h-full  rounded-md bg-dark-40 text-secondary-40 p-2"
        type="text"
        name="postText"
        id=""
        placeholder="Let’s share what going on your mind..."
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <button className="flex-shrink-0 w-fit px-2 h-full bg-red-80 rounded-md sm1:text-sm">Create Post</button>
    </section>
  );
};

export default CreatePost;
