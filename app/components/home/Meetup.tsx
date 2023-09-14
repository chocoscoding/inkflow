"use client";
import React from "react";
import Tags from "../Tags";
import { OneMiniMeetup } from "@/app/types/client";
import { formatDateForMeetups } from "@/app/libs/helper";
import Link from "next/link";

const Meetup: React.FC<OneMiniMeetup> = (props) => {
  const { id, title, date, tags } = props;
  return (
    <div
      className={`w-full min-h-[70px] rounded-lg cursor-pointer dark:active:hover:bg-dark-30 active:hover:brightness-90 gap-3 flex p-[3px] transition-all select-none`}>
      <div className="rounded-md flex flex-col items-center h-[4.3rem] lg1:h-[3.5rem] px-2 shadow-md dark:shadow-dark-10">
        <p className="">{formatDateForMeetups(date).month}</p>
        <p className="text-blue-80 font-extrabold text-2xl lg1:text-xl">{formatDateForMeetups(date).day}</p>
      </div>
      <div className="flex-1 overflow-hidden">
        <Link href={`/meetups/${title}`}>
          <p className="truncate font-semibold text-sm">{title}</p>
        </Link>
        <p className=" text-xs text-secondary-30">WORLDWIDE</p>
        <div className="flex mt-2 gap-2 overflow-x-auto scrollbar-none">
          {tags.map((tag, i) => (
            <Tags
              key={`tags__${id}__${i}`}
              label={tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meetup;
