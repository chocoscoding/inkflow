import React, { FC } from "react";
import OneComment from "./OneComment";
import CreateComment from "./CreateComment";
import { CommentType } from "@/app/types/client";

const Comments: FC<CommentType> = ({ comments, contentId , contentType}) => {
  return (
    <div className="mt-2">
      <CreateComment contentId={contentId} contentType={contentType} />
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
