import Avatar from "@/app/components/Avatar";
import Ripple from "@/app/components/Ripple";
import Tags from "@/app/components/Tags";
import Image from "next/image";
import React from "react";

const InterviewClientTop = () => {
  const UserInfo = () => (
    <section className="flex gap-4 p-1">
      <div className="rounded-md overflow-hidden w-[42px] h-[42px] object-cover">
        <Avatar
          size={40}
          className="m-0 rounded-full"
        />
      </div>
      <div className="">
        <p className="text-base md:font-semibold">Wes Burke</p>
        <p className="text-xs text-secondary-30 md:text-sm">14 Feburary</p>
      </div>
    </section>
  );
  const VerticalLine = () => {
    return <div className="h-full w-[1.5px] mx-4 bg-secondary-50 last:hidden opacity-30"></div>;
  };
  return (
    <section className=" bg-dark-30 rounded-xl w-full p-2.5 sm1:p-1.5 flex-grow-0 mb-3">
      <div className=" flex ba1:flex-wrap-reverse gap-3">
        <span className="hidden ba1:block order-1 mt-1">
          <UserInfo />
        </span>
        <div className="flex flex-col gap-2 w-full">
          {/* userinfo */}
          <span className="block ba1:hidden">
            <UserInfo />
          </span>
          <p className="truncate-lines-2 w-full md:text-lg md:font-semibold mb-3">
            UIHUT - Crunchbase Company Profile & Funding UIHUT - Crunchbase Company Profile & Funding
          </p>
          <section className="flex w-full justify-between flex-wrap gap-2">
            <section className="flex gap-1">
              <div className="">
                <p className="text-base md:font-semibold">$23k/mo</p>
                <p className="text-xs text-secondary-30 md:text-sm">Revenue</p>
              </div>
              <VerticalLine />
              <div className="">
                <p className="text-base md:font-semibold">16</p>
                <p className="text-xs text-secondary-30 md:text-sm">Updates</p>
              </div>
              <VerticalLine />
              <div className="">
                <p className="text-base md:font-semibold">$23k/mo</p>
                <p className="text-xs text-secondary-30 md:text-sm">Website</p>
              </div>
              <VerticalLine />
            </section>
          </section>
        </div>
        <div className="rounded-md overflow-hidden ba1:w-full w-[32%] md:w-[34%]  min-w-[200px] h-52 flex-grow-0 shrink-0 object-cover md2:h-60 md2:mb-4">
          <Image
            src={
              "https://images.unsplash.com/photo-1635006459494-c9b9665a666e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            }
            width={500}
            height={500}
            alt="post-Image"
            className="rounded-lg w-full h-auto md2:w-full md2:h-auto"
          />
        </div>
      </div>
      <div className="flex gap-2 px-1 py-2 rounded-lg bg-dark-40 overflow-hidden mt-3">
        <p className=" text-secondary-30 flex-shrink-0">Posted on:</p>
        <p className="text-blue-default truncate-lines-1 flex-1 overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos asperiores, cumque maiores delectus porro, corrupti minima
          repudiandae quas
        </p>
      </div>
    </section>
  );
};

export default InterviewClientTop;
