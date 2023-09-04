"use client";
import Avatar from "@/app/components/Avatar";
import { ArrowDown, New, New1, Popular } from "@/app/components/Icons";
import CreatePost from "@/app/components/home/CreatePost";
import HomeNavMobile from "@/app/components/home/HomeNavMobile";
import Post from "@/app/components/home/Post";
import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import Create from "./Create";
import LeaveGroup from "@/app/components/modals/LeaveGroup";
import { OneGroupType } from "@/app/types/client";

const Main: FC<OneGroupType> = (props) => {
  const { id, name, about, coverImage, admininstrators, Posts, isUserFollowingGroup } = props;
  const aboutRef = useRef<HTMLParagraphElement | null>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [leaveModal, setLeaveModal] = useState(false);

  useEffect(() => {
    const checkOverflow = (scrollW?: number, clientW?: number) => {
      if (!scrollW || !clientW) return;
      if (scrollW < clientW) {
        setIsOverflowing(true);
        return;
      }
      setIsOverflowing(false);
    };
    const handleResize = () => {
      checkOverflow(aboutRef.current?.offsetHeight, aboutRef.current?.scrollHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="min-h-screen lg1a:w-7/12 flex-1 pt-1 md:overflow-hidden shrink-0 md:mb-4 lg2:order-2 md3:!order-1">
      <div className="bg-dark-30 p-2 rounded-lg mb-4">
        <section className={`rounded-lg overflow-hidden  w-full h-56 shrink-0 object-cover`}>
          <Image
            src={coverImage || `/images/placeholder.jpg`}
            priority
            width={600}
            height={600}
            alt="post-Image"
            className="rounded-lg w-full h-auto"
          />
        </section>
        <section className="flex flex-wrap justify-between mt-4">
          <div className="gap-1 flex-1 flex md1:min-w-full">
            <div className="flex flex-col">
              <p className="text-lg font-semibold md1:font-medium text-secondary-60">{name}</p>
              <p className="text-sm font-thin text-secondary-50">
                Created by <span className="font-medium">{admininstrators[0].user.username}</span>
              </p>
            </div>
          </div>
          {isUserFollowingGroup ? (
            <button
              className="rounded-md bg-dark-40 outline outline-1 outline-secondary-40 h-fit py-2 px-4 flex-shrink-0 md:ml-2 cursor-pointer md3:self-end md1:mt-4 md1:w-6/12 md1:ml-[65px]"
              onClick={() => setLeaveModal(true)}>
              Leave
            </button>
          ) : (
            <button
              className="rounded-md bg-dark-40 outline outline-1 outline-secondary-40 h-fit py-2 px-4 flex-shrink-0 md:ml-2 cursor-pointer md3:self-end md1:mt-4 md1:w-6/12 md1:ml-[65px]"
              onClick={() => {}}>
              Join
            </button>
          )}
        </section>
        <section className="mt-4 border-t-[1px] border-secondary-20 pt-2">
          <p className="text-lg font-medium md2:hidden">About</p>
          <p
            className={`text-secondary-50 ${showMore ? "" : "truncate-lines-3"}`}
            ref={aboutRef}>
            {about}
          </p>
          {isOverflowing || showMore ? (
            <span onClick={() => setShowMore(!showMore)}>
              {<ArrowDown className={`w-full text-right mt-3 mb-2 cursor-pointer text-secondary-30 ${showMore ? "rotate-180" : ""}`} />}
            </span>
          ) : null}
        </section>
      </div>
      {/* create */}
      <span className="md3a:hidden block my-4">
        <Create />
      </span>
      {/* info */}
      <div className="flex bg-dark-30 rounded-md p-2 justify-between items-center mb-4">
        <p>Explore</p>
        <section className="flex gap-2">
          <button className="flex p-2 rounded-md cursor-pointer gap-2 sm:gap-4 bg-dark-40 items-center sm1:scale-90">
            <New1 className="text-secondaryBg-20" />
            <p>New</p>
          </button>
          <button className="flex p-2 rounded-md cursor-pointer gap-2 bg-dark-40 items-center sm1:scale-90">
            <Popular className="text-secondaryBg-20" />
            <p>Popular</p>
          </button>
        </section>
      </div>
      {Posts.map((ele, i) => (
        <Post
          key={`posts${i}`}
          {...ele}
        />
      ))}

      <LeaveGroup
        open={leaveModal}
        setOpen={setLeaveModal}
      />
    </section>
  );
};

export default Main;
