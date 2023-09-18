import { OneInterviewsType } from "@/app/types/client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import UserInfo from "./UserInfo";

const Interview: FC<OneInterviewsType> = (props) => {
  const { id, createdAt, title, coverImage, revenue, businessType, platform, owner } = props;

  const VerticalLine = () => {
    return <div className="h-full w-[1.5px] mx-4 bg-secondary-50 last:hidden opacity-30"></div>;
  };
  return (
    <div className=" bg-dark-30 rounded-xl w-full p-2.5 sm1:p-1.5 flex-grow-0 mb-3 flex ba1:flex-wrap-reverse gap-3">
      <div className="rounded-md overflow-hidden ba1:w-full w-[32%] md:w-[34%]  min-w-[200px] h-52 flex-grow-0 shrink-0 object-cover md2:h-60 md2:mb-4">
        <Image
          src={coverImage || "/images/placeholder.jpg"}
          width={500}
          height={500}
          loading="eager"
          alt="post-Image"
          className="rounded-lg h-full w-auto"
        />
      </div>
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
        <Link href={`/interviews/${title}`}>
          <p className="truncate-lines-2 w-full md:text-lg md:font-semibold mb-3">{title}</p>
        </Link>
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

          <Link href={`/interviews/${title}`}>
            <button className="flex-center p-3 rounded bg-blue-default shrink-0 ba1:w-full md1:m1-2 ba1:rounded-lg">Full Details</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Interview;
