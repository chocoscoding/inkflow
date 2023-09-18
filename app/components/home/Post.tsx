"use client";
import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import { Like } from "../Icons/Icon";
import Tags from "../Tags";
import Avatar from "../Avatar";
import Link from "next/link";
import { OnePostComponentType } from "@/app/types/client";
import TimeAgo from "react-timeago";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const likesFormatter = (likes?: any[]) => {
  if (!likes) return false;
  return likes.length > 0;
};
const Post: FC<OnePostComponentType> = (props) => {
  const [count, setCount] = useState(0);
  const { likes, id, owner, _count, title, tags, coverImage, createdAt, views, showLikes = true } = props;
  const [hasLiked, setHasLiked] = useState<boolean>(likesFormatter(likes));
  const { status, data } = useSession();
  const { refresh } = useRouter();
  const likePost = () => {
    toast.dismiss();
    if (status === "loading") return;
    if (status === "unauthenticated") {
      toast.error("Login to like post", { duration: 2500 });
      return;
    }
    setHasLiked(!hasLiked);
    return;
  };
  useEffect(() => {
    setCount(count + 1);
    if (count < 1) return;

    const functionTimeout = setTimeout(async () => {
      try {
        const toggleLike = await axios.post("/api/like/toggle", {
          userId: data?.user.id,
          referenceId: id,
          typeOf: "Post",
        });
        if (toggleLike.status === 200) {
          refresh();
        }
      } catch (error) {
        toast.dismiss();
        toast.error("Something went wrong");
      }
    }, 1000);
    return () => clearTimeout(functionTimeout);
  }, [hasLiked]);

  return (
    <div className="bg-dark-30 lg:h-56 h-fit w-full mb-4 rounded-xl flex p-4 md1:p-2 sm1:p-3 md:gap-4 gap-2 sm1:overflow-hidden sm1:flex-col">
      <div className="rounded-lg overflow-hidden  xl:w-[200px]  md:w-[150px] sm:w-[130px] sm1:w-full sm1:h-60 w-1/5 shrink-0 object-fill">
        <Image
          src={coverImage || `/images/placeholder.jpg`}
          priority
          width={700}
          height={800}
          alt="post-Image"
          className="rounded-lg w-full h-auto aspect-square"
        />
      </div>
      <div className="flex flex-col justify-between w-full">
        {/* top */}
        <section className="w-full">
          <div className="flex gap-10 lg2:gap-3 w-full">
            <Link
              href={`/post/${title}`}
              className="w-full">
              <p className="xl:text-xl lg:text-base text-sm font-semibold truncate-lines-2 hover:underline cursor-pointer">{title}</p>
            </Link>
            <div className="h-fit p-1.5 bg-dark-40 rounded-full cursor-pointer hidden sm:block">
              {showLikes ? (
                <span onClick={likePost}>
                  <Like className={hasLiked ? `text-red-80` : `text-secondary-50`} />
                </span>
              ) : null}
            </div>
            <Avatar className="rounded-full h-fit block sm:hidden" />
          </div>
          {/* tags */}
          <div className="w-full flex gap-3 lg1:gap-1.5 mt-5 lg1:mt-4 lg1:mb-1 overflow-x-auto scrollbar-none flex-wrap">
            {tags.map((tag, i) => (
              <Tags
                key={`tag_${id}__${i}`}
                label={tag}
                classname="text-xss xl:text-xs text-secondary-50 py-1.5 sm1:p-1 hover:underline cursor-pointer"
              />
            ))}
          </div>
        </section>
        {/* user and post info */}
        <section className="flex justify-between items-center lg1:flex-col lg1:items-start lg1:gap-2 flex-wrap gap-4">
          {/* user */}
          <div className="sm:flex hidden gap-1">
            <Link
              href={`/profile/${owner.id}`}
              className="cursor-pointer">
              <Avatar
                src={owner.image}
                className="rounded-full"
              />
            </Link>
            <div className="flex flex-col justify-between ">
              <Link
                href={`/profile/${owner.id}`}
                className="cursor-pointer">
                <p className="text-sm text-secondary-60">
                  {owner.username} <span className="inline-flex align-middle w-1 h-1 rounded-full bg-secondary-50"></span>
                </p>
              </Link>
              <p className="text-xss text-secondary-50">
                <TimeAgo date={createdAt} />
              </p>
            </div>
          </div>
          {/* post info */}
          <div className="flex text-xs md1:text-xss gap-4 text-secondary-50 sm1:mt-3 sm1:text-xss">
            <p className="flex gap-1 ">
              {views} <span>Views</span>
            </p>
            <p className="flex gap-1">
              {_count.likes} <span>Likes</span>
            </p>
            <p className="flex gap-1">
              {_count.comments} <span>Comments</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Post;
