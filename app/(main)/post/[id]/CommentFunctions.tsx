"use client";
import { More, Reply } from "@/app/components/Icons";
import { Like } from "@/app/components/Icons/Icon";
import { CommentFunctionType } from "@/app/types/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const CommentFunctions: FC<CommentFunctionType> = (props) => {
  const route = useRouter();
  const { _count, userId, referenceId, showReply, setShowReply, likeStatus,replies } = props;
  const count = useRef(0);
  const [hasLiked, setHasLiked] = useState(typeof likeStatus[0]?.userId === "string");
  const [likesCount, setLikesCount] = useState(_count?.likes || 0);

  useEffect(() => {
    count.current++;
    if (count.current > 1) {
      if (hasLiked) {
        setLikesCount(likesCount + 1);
      } else {
        setLikesCount(likesCount - 1);
      }
    }
    const functionTimeout = setTimeout(async () => {
      if (count.current <= 1) return;
      try {
        await axios.post("/api/like/toggle", {
          userId,
          referenceId,
          typeOf: "Comments",
        });
        route.refresh();
      } catch (error) {
        toast.error("Something went wrong");
      }
    }, 1000);
    return () => clearTimeout(functionTimeout);
  }, [hasLiked]);

  return (
    <div className="flex items-center text-secondary-30 py-2 gap-5 justify-between">
      <div className="flex gap-6">
        <div
          className="flex gap-2 items-center"
          onClick={() => setHasLiked(!hasLiked)}>
          <Like className={`cursor-pointer ${hasLiked ? "text-red-80" : ""}`} />
          <p className="text-secondaryBg-20">{likesCount}</p>
        </div>
        <Reply className="cursor-pointer" />
        <More className="cursor-pointer" />
      </div>
      {replies.length > 0 ? (
        <p
          className="p-1 bg-dark-40 cursor-pointer rounded-md"
          onClick={() => setShowReply(!showReply)}>{`${showReply ? "Hide" : "Show"} replies`}</p>
      ) : null}
    </div>
  );
};

export default CommentFunctions;
