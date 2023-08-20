"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { Comment, Report, Share } from "@/app/components/Icons";
import { Like } from "@/app/components/Icons/Icon";
import { PostFunctionsType } from "../types/client";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthFunction } from "../libs/AuthFunction";
import { useSession } from "next-auth/react";

const PostFuntions: FC<PostFunctionsType> = (props) => {
  const count = useRef(0);
  const { extraClass, referenceId, userId, likeStatus, _count } = props;
  const [hasLiked, setHasLiked] = useState(typeof likeStatus?.id === "string");
  const [likesCount, setLikesCount] = useState(_count?.likes || 0);
  const { status } = useSession();
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
          typeOf: "Post",
        });
      } catch (error) {
        toast.error("Something went wrong");
      }
    }, 1000);
    return () => clearTimeout(functionTimeout);
  }, [hasLiked]);

  return (
    <section className={`md:w-10 w-full flex-shrink-0 min-w-[220px] bg-dark-30 rounded-xl h-fit p-2 ${extraClass}`}>
      <ul className="md1:flex md1:items-center gap-5 flex-wrap ba1:justify-evenly">
        <li className="flex ba1:flex-col gap-4 md1:gap-1.5 md:mb-3 items-center cursor-pointer md1:text-xs">
          <span
            className={`p-1.5 rounded-lg ${hasLiked ? "bg-red-20" : "bg-dark-40"}`}
            onClick={() => AuthFunction(()=>setHasLiked(!hasLiked), status)}>
            <Like className={hasLiked ? "text-red-80" : "text-secondary-30"} />
          </span>

          <span className="ba1:hidden">{`${likesCount} Likes`}</span>
        </li>
        <li className="flex ba1:flex-col gap-4 md1:gap-1.5 md:mb-3 items-center  md1:text-xs">
          <span className="p-1.5 bg-dark-40 rounded-lg ">
            <Comment className="text-secondary-30" />
          </span>
          <span className="ba1:hidden">{`${_count?.comments} Comments`}</span>
        </li>
        <li className="flex ba1:flex-col gap-4 md1:gap-1.5 md:mb-3 items-center md1:text-xs">
          <span className="p-1.5 bg-dark-40 rounded-lg ">
            <Share className="text-secondary-30" />
          </span>
          Share
        </li>
        <li className="flex ba1:flex-col gap-4 md1:gap-1.5 md:mb-3 items-center md1:text-xs">
          <span className="p-1.5 bg-dark-40 rounded-lg ">
            <Report className="text-secondary-30" />
          </span>
          Report
        </li>
      </ul>
    </section>
  );
};

export default PostFuntions;
