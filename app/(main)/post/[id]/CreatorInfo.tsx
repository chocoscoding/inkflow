"use client";
import React, { FC } from "react";
import Avatar from "@/app/components/Avatar";
import { CreatorInfoType } from "@/app/types/client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { AuthFunction } from "@/app/libs/AuthFunction";
const CreatorInfo: FC<CreatorInfoType> = (props) => {
  const { id, username, image, posts = [], occupation } = props as CreatorInfoType;
  const { status } = useSession();
  return (
    <section className="lg3a:w-10 w-full flex-shrink-0 min-w-[305px] h-fit lg3a:sticky lg3a:top-[55px]">
      <div className="flex flex-col items-center bg-dark-30 rounded-xl">
        <Avatar
          size={80}
          src={image}
          className="rounded-full my-4"
        />
        <Link href={`/profile/${username}`}>
          <p className=" text-xl mb-1 hover:underline">{username}</p>
        </Link>
        <p className=" text-base font-light text-secondary-30">{occupation}</p>

        <button
          className="bg-blue-default p-2 w-10/12 rounded-lg my-3"
          onClick={() => AuthFunction(() => {}, status)}>
          Follow
        </button>
      </div>
      <div className="mt-4 bg-dark-30 rounded-xl p-3">
        <p className="b-3">{`More posts from ${username}`}</p>
        <div className="">
          {posts.map((post, i) => (
            <div
              className="first:mt-3 border-t first:border-secondary-30 border-dark-40 py-3 "
              key={`morePost__${i}`}>
              <Link href={`/post/${post.title}`}>
                <p className="text-sm truncate-lines-1">{post.title}</p>
                <p className="text-sm truncate-lines-1 text-secondary-30">
                  {post.tags.map((tag, i) => (
                    <span key={post.id + "tags" + i}>{`# ${tag} `}</span>
                  ))}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorInfo;
