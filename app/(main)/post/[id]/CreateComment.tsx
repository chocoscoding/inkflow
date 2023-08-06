"use client";
import Avatar from "@/app/components/Avatar";
import { Send } from "@/app/components/Icons";
import React from "react";

const CreateComment = () => {
  return (
    <div className="flex gap-3 p-1 h-fit">
      <Avatar
        size={42}
        className="rounded-full flex-shrink-0 h-fit"
      />
      <div className="flex rounded-xl gap-3 outline outline-1 outline-secondary-30 w-full items-center min-h-[auto] transition-all p-2">
        <textarea
          rows={1}
          maxLength={1200}
          className="w-full placeholder-shown:h-fit h-[90px] bg-transparent outline-0 px-2 overflow-y-hidden resize-none"
          placeholder="Write a new comment here... 🫲"
        />
        <Send className="flex-shrink-0" />
      </div>
    </div>
  );
};

export default CreateComment;
