import Avatar from "@/app/components/Avatar";
import { More, Reply } from "@/app/components/Icons";
import { Like } from "@/app/components/Icons/Icon";
import React from "react";
import OneComment from "./OneComment";

const Comments = () => {
  return (
    <div className="mt-2">
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
    </div>
  );
};

export default Comments;
