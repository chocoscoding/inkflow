"use client";
import Checkbox from "@/app/components/Checkbox";
import { Arrow1 } from "@/app/components/Icons";
import React from "react";
import Meetups from "./Meetups";
import Image from "next/image";

const MeetupClient = () => {
  const CreateAMeetup = () => (
    <section className="sticky top-[60px] rounded-xl bg-[#FF7C4D] w-4/12 max-w-[310px] p-4 h-[180px] shrink-0">
      <p className="font-semibold text-lg">Host a Meetup</p>
      <p className="text-xs my-4">Find other Hipnoders in your area so you can learn, share, and work together.</p>

      <div className="flex justify-between">
        <button className="text-red-10 bg-red-60 px-2 py-3 text-sm rounded-md">Code of Conduct</button>
        <button className="text-red-80 bg-secondaryBg-10 px-2 py-3 text-sm rounded-md">Host a meetup</button>
      </div>
    </section>
  );
  return (
    <div>
      <div className="w-full flex md1:flex-wrap gap-4">
        <section className="sticky top-[60px] rounded-xl bg-dark-30 w-3/12 max-w-[300px] p-4 h-fit shrink-0">
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">Categories</p>
            <Arrow1 className=" rotate-90 scale-75" />
          </div>
          <main className="mt-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p>Categories</p>
              <Checkbox />
            </div>
            <div className="flex justify-between items-center">
              <p>Categories</p>
              <Checkbox />
            </div>
            <div className="flex justify-between items-center">
              <p>Categories</p>
              <Checkbox />
            </div>
            <div className="flex justify-between items-center">
              <p>Categories</p>
              <Checkbox />
            </div>
            <div className="flex justify-between items-center">
              <p>Categories</p>
              <Checkbox />
            </div>
            <div className="flex justify-between items-center">
              <p>Categories</p>
              <Checkbox />
            </div>
            <div className="flex justify-between items-center">
              <p>Categories</p>
              <Checkbox />
            </div>
            <div className="flex justify-between items-center">
              <p>Categories</p>
              <Checkbox />
            </div>
          </main>
        </section>
        {/* <section className=" ">
        </section> */}
        <div className="w-full border flex flex-col gap-2">
          <Meetups />
        </div>
        <section className="sticky top-[60px] rounded-xl bg-[#FF7C4D] w-4/12 max-w-[310px] p-4 h-[180px] shrink-0">
          <p className="font-semibold text-lg">Host a Meetup</p>
          <p className="text-xs my-4">Find other Hipnoders in your area so you can learn, share, and work together.</p>

          <div className="flex justify-between">
            <button className="text-red-10 bg-red-60 px-2 py-3 text-sm rounded-md">Code of Conduct</button>
            <button className="text-red-80 bg-secondaryBg-10 px-2 py-3 text-sm rounded-md">Host a meetup</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MeetupClient;
