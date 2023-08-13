"use client";
import Checkbox from "@/app/components/Checkbox";
import { Arrow1, FacebookOutline, InstagramOutline, Message, TwitterOutline, Web } from "@/app/components/Icons";
import React from "react";
import Profile from "./Main";
import Image from "next/image";
import Avatar from "@/app/components/Avatar";

const ProfileClient = () => {
  const CreateAMeetup = () => (
    <section className="lg2a:sticky lg2a:top-[60px] rounded-xl bg-[#FF7C4D] w-4/12 lg2a:max-w-[310px] max-w-[500px]  p-4 h-[180px] shrink-0  lg2:hidden lg2:flex-auto lg2:order-2 lg2:w-full">
      <p className="font-semibold text-lg">Host a Meetup</p>
      <p className="text-xs my-4">Find other Hipnoders in your area so you can learn, share, and work together.</p>

      <div className="flex justify-between gap-4 max-w-[300px]">
        <button className="text-red-10 bg-red-60 px-2 py-3 text-sm rounded-md flex-1">Code of Conduct</button>
        <button className="text-red-80 bg-secondaryBg-10 px-2 py-3 text-sm rounded-md flex-1">Host a meetup</button>
      </div>
    </section>
  );
  return (
    <div>
      <div className="w-full flex md1:flex-wrap gap-4">
        <section className="lg2a:sticky lg2a:top-[60px] lg2:flex-1 rounded-xl bg-dark-30 w-3/12 lg2a:max-w-[290px] min-w-[230px] max-w-none h-fit shrink-0 lg2:order-1 overflow-hidden">
          <div className="min-h-[250px] relative">
            <div className=" bg-gradient-to-r from-[#FD7240] to-[#EA942C] h-[150px]"></div>
            <div className="h-fit absolute bottom-3 flex-center w-full">
              <Avatar
                size={152}
                className="rounded-full flex-shrink-0 h-fit outline outline-4 outline-dark-30"
              />
            </div>
          </div>

          <main className="w-full flex flex-col items-center">
            <h1 className="font-semibold text-xl">Timileyinwandffff</h1>
            <p className="mt-1.5">User interface Designer</p>

            <div className="flex mt-3 gap-3">
              <button className="bg-blue-default p-2 rounded-lg min-w-[120px]">Follow</button>
              <button className="bg-blue-30 py-2 px-3 rounded-lg">
                <Message className="text-blue-default" />
              </button>
            </div>

            <div className="flex mt-4 mb-1">
              <div className="flex flex-col items-center">
                <p>47k</p>
                <p>Followers</p>
              </div>
              <div className="h-[49px] w-[2px] bg-secondary-30 mx-4"></div>
              <div className="flex flex-col items-center">
                <p>47k</p>
                <p>Following</p>
              </div>
            </div>

            <p className="text-secondary-30 w-[70%] mt-3">
              Hey there... Im AR Jakir! Im here to learn from and support the other members of this community!
            </p>

            <div className="mt-5 flex gap-3">
              <Web />
              <p className="font-bold">www.uilit.it</p>
            </div>
            <div className="mt-5 mb-5 flex text-secondary-30 gap-3">
              <TwitterOutline className="text-xl" />
              <FacebookOutline className="text-xl" />
              <InstagramOutline className="text-xl" />
            </div>
          </main>
        </section>

        <section className="w-full flex flex-col gap-2 lg2:order-3 md1:mb-[50px]">
          <Profile />
        </section>
        <CreateAMeetup />
      </div>
    </div>
  );
};

export default ProfileClient;
