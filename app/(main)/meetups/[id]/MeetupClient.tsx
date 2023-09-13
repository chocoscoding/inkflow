"use client";
import Ripple from "@/app/components/Ripple";
import Tags from "@/app/components/Tags";
import { MeetupClientType } from "@/app/types/client";
import Image from "next/image";
import React, { FC } from "react";

const MeetupClient: FC<MeetupClientType> = (props) => {
  const { id, userId, createdAt, coverImage, title, body, date, tags, time, group } = props;
  return (
    <div className="max-w-[950px] min-w-0 bg-dark-30 rounded-xl w-full p-2 min-h-[90vh] ">
      <section className="flex gap-3">
        <div className="w-[10%] md1:w-[70px] h-fit aspect-square rounded-md overflow-hidden object-cover shrink-0">
          <Image
            src={
              coverImage ||
              `https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`
            }
            width={200}
            height={200}
            alt="group-img"
            className="h-full w-auto"
          />
        </div>
        <div className="">
          <p className="text-lg lg1:text-base md1:!text-sm font-medium mb-2">{title}</p>
          <div className="w-full flex gap-3 lg1:gap-1.5 lg1:mb-1 overflow-x-auto scrollbar-none flex-wrap">
            {tags.map((tag, i) => (
              <Ripple
                key={`tag__${i}`}
                rippleClassName="bg-dark-10">
                <Tags
                  label={tag}
                  classname="text-xs md1:text-xss text-secondary-50 py-1.5 hover:underline cursor-pointer"
                />
              </Ripple>
            ))}
          </div>
        </div>
      </section>
      <hr className="my-3 border-secondary-30" />
      <section className="main">
        <h1 className="mb-1.5 bg-dark-40 p-2 w-fit rounded-lg">
          <span className="font-semibold text-lg ">Date:</span> <span className=" font-normal text-base text-secondary-30">{date}</span>
        </h1>
        <h1 className="mb-1.5 bg-dark-40 p-2 w-fit rounded-lg">
          <span className=" font-semibold text-lg">Time:</span> <span className=" font-normal text-base text-secondary-30">{time}</span>
        </h1>

        <p className="text-secondary-30">
          <div className="ql-snow">
            <div
              className="ql-editor mx-auto mt-6 sm:mt-2"
              dangerouslySetInnerHTML={{ __html: body }}></div>
          </div>
        </p>
      </section>
    </div>
  );
};

export default MeetupClient;
