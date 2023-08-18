"use client";
import Image from "next/image";
import React, { FC } from "react";
import CreateComment from "./CreateComment";
import Comments from "./Comments";
import CreatorInfo from "./CreatorInfo";
import PostFuntions from "../../../components/PostFuntions";
import { PostClientType } from "@/app/types/client";
import TimeAgo from "react-timeago";
import Link from "next/link";
const PostClient: FC<PostClientType> = ({ postData, currentUser }) => {
  const { id, userId, tags, coverImage, createdAt, title, body, views, group, comments, _count } = postData;
  // const { id } = currentUser;
  // console.log(id);

  return (
    <main className="flex-1">
      <section className="min-h-screen rounded-xl">
        <section>
          <div className="w-full overflow-hidden rounded-t-xl object-cover h-[300px]">
            <Image
              src={coverImage || "/image/placeholder.png"}
              width={500}
              height={500}
              alt="post-Image"
              className="w-full h-auto"
            />
          </div>
          {/* post info */}
          <section className="md:p-4 p-2 w-full flex flex-col gap-1.5 bg-dark-30">
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-secondary-30">
              <TimeAgo date={createdAt} />
            </p>
            {group ? (
              <div className="flex gap-2 px-1 py-2 rounded-lg bg-dark-40 overflow-hidden">
                <p className=" text-secondary-30 flex-shrink-0">Posted on:</p>
                <Link href={`/groups/${group.id}`}>
                  <p className="text-blue-default truncate-lines-1 flex-1 overflow-hidden">{group.name}</p>
                </Link>
              </div>
            ) : null}
            <div className="flex gap-3 flex-wrap">
              {tags.map((tag, i) => (
                <p
                  key={`tag__${i}`}
                  className="text-yellow-90">{`#${tag}`}</p>
              ))}
            </div>
            <hr className="w-full bg-secondary-30 opacity-10 my-2" />
            {/* main post data */}
            <div className="text-secondary-30 mb-4">
              <div className="ql-snow">
                <div
                  className="ql-editor mx-auto mt-6 sm:mt-16"
                  dangerouslySetInnerHTML={{ __html: body }}></div>
              </div>
            </div>
          </section>

          <section className="bg-dark-30 md:p-4 p-2">
            <PostFuntions extraClass="hidden md1:block p-5 !bg-dark-20 mb-4 !w-full" />
            <CreateComment />
            <Comments />
          </section>
        </section>
      </section>
      <section className="mt-8">
        <CreatorInfo />
      </section>
    </main>
  );
};

export default PostClient;
