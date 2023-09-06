import Avatar from "@/app/components/Avatar";
import Ripple from "@/app/components/Ripple";
import Tags from "@/app/components/Tags";
import { InterviewClientTopType } from "@/app/types/client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import ReactTimeago from "react-timeago";
import UserInfo from "./UserInfo";

const InterviewClientTop: FC<InterviewClientTopType> = (props) => {
  const { title, group, owner, coverImage, platform, createdAt, businessType, revenue } = props;

  const VerticalLine = () => {
    return <div className="h-full w-[1.5px] mx-4 bg-secondary-50 last:hidden opacity-30"></div>;
  };
  return (
    <section className=" bg-dark-30 rounded-xl w-full p-2.5 sm1:p-1.5 flex-grow-0 mb-3">
      <div className=" flex ba1:flex-wrap-reverse gap-3">
        <span className="hidden ba1:block order-1 mt-1">
          <UserInfo
            {...owner}
            createdAt={createdAt}
          />
        </span>
        <div className="flex flex-col gap-2 w-full">
          {/* userinfo */}
          <span className="block ba1:hidden">
            <UserInfo
              {...owner}
              createdAt={createdAt}
            />
          </span>
          <p className="truncate-lines-2 w-full md:text-lg md:font-semibold mb-3">{title}</p>
          <section className="flex w-full justify-between flex-wrap gap-2">
            <section className="flex gap-1">
              <div className="">
                <p className="text-base md:font-semibold">${revenue}</p>
                <p className="text-xs text-secondary-30 md:text-sm">Revenue</p>
              </div>
              <VerticalLine />
              <div className="">
                <p className="text-base md:font-semibold">{businessType}</p>
                <p className="text-xs text-secondary-30 md:text-sm">Type</p>
              </div>
              <VerticalLine />
              <div className="">
                <p className="text-base md:font-semibold">{platform}</p>
                <p className="text-xs text-secondary-30 md:text-sm">Platform</p>
              </div>
              <VerticalLine />
            </section>
          </section>
        </div>
        <div
          className={`rounded-md overflow-hidden ba1:w-full w-[32%] md:w-[34%] min-w-[200px] h-52 flex-grow-0 shrink-0 object-cover ${
            group?.id ? "md2:h-60 md2:mb-4" : ""
          }`}>
          <Image
            src={coverImage || "images/placeholder.jpg"}
            width={500}
            height={500}
            alt="post-Image"
            className="rounded-lg w-full h-auto md2:w-full md2:h-auto"
          />
        </div>
      </div>
      {group?.id ? (
        <div className="flex gap-2 px-1 py-2 rounded-lg bg-dark-40 overflow-hidden mt-3">
          <p className=" text-secondary-30 flex-shrink-0">Posted on:</p>
          <Link href={`/groups/${group?.id}`}>
            <p className="text-blue-default truncate-lines-1 flex-1 overflow-hidden">{group?.name}</p>
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default InterviewClientTop;
