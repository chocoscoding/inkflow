import Avatar from "@/app/components/Avatar";
import { OnePostComponentType } from "@/app/types/client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import ReactTimeago from "react-timeago";

const OnePostAndInterview: FC<any> = ({ id, coverImage, createdAt, owner, title }) => {
  return (
    <li className="flex justify-between items-center mb-4 border-b border-secondary-20 pb-2">
      <div className="flex flex-1 mr-3 sm:mr-4 gap-2 sm:gap-4">
        <div className="sm:w-[130px] sm:h-[130px] w-[65px] h-[65px] rounded-md overflow-hidden object-cover shrink-0">
          <Image
            src={coverImage || `/images/placeholder.jpg`}
            width={130}
            height={130}
            alt="group-img"
            className="h-full w-auto"
          />
        </div>

        <div className="flex flex-col justify-between w-full gap-1">
          <Link href={`/post/${title}`}>
            <p className="xl:text-xl lg:text-lg text-sm truncate-lines-3 hover:underline cursor-pointer">{title}</p>
          </Link>
          <section className="flex justify-between items-center lg1:flex-col lg1:items-start lg1:gap-1 flex-wrap gap-4 sm1:scale-90">
            {/* user */}
            <div className="flex  gap-1">
              <Avatar
                src={owner.image}
                className="rounded-full"
              />
              <div className="flex flex-col justify-between ">
                <Link href={`/profile/${owner.id}`}>
                  <p className="text-sm text-secondary-60">
                    {owner.username} <span className="inline-flex align-middle w-1 h-1 rounded-full bg-secondary-50"></span>
                  </p>
                </Link>
                <p className="text-xss text-secondary-50">
                  <ReactTimeago date={createdAt} />
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </li>
  );
};

export default OnePostAndInterview;
