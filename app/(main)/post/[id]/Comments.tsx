import Avatar from "@/app/components/Avatar";
import { More, Reply } from "@/app/components/Icons";
import { Like } from "@/app/components/Icons/Icon";
import React, { FC } from "react";
import OneComment from "./OneComment";
import CreateComment from "./CreateComment";
import { CommentType } from "@/app/types/client";

const Comments: FC<CommentType> = ({ comments, postId }) => {

  return (
    <div className="mt-2">
      <CreateComment postId={postId}/>
      {!comments
        ? null
        : comments.map((comment, i) => (
            <OneComment
              {...comment}
              key={`comment__${comment.id}`}
            />
          ))}
    </div>
  );
};

export default Comments;
