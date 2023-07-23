import HomeNav from "@/app/components/home/HomeNav";
import React from "react";
import Trending from "../../(home)/Trending";
import Meetups from "../../(home)/Meetups";
import Avatar from "@/app/components/Avatar";
import Ripple from "@/app/components/Ripple";
import Main from "./Main";
import Image from "next/image";
import Create from "./Create";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <main className="flex w-full p-6 xl1:p-2 max-w-[1600px] m-auto gap-4 flex-wrap">
      <div className="sticky top-[60px] w-2/12 min-w-[230px] lg1:min-w-[200px] h-fit flex flex-col gap-2 md2:hidden shrink-0 lg2:hidden">
        <section className="flex p-4 lg1:p-2 rounded-2xl flex-col justify-start items-start gap-3 dark:bg-dark-30">
          <HomeNav
            Name="New"
            mainText="Newest and Recent"
            secondaryText="Find the latest updates"
            active={true}
          />
        </section>
        <Trending />
      </div>

      <Main />

      <section className="md3a:sticky md3a:top-[60px]  w-4/12 md3a:max-w-[310px] max-w-[500px] shrink-0 lg2:order-1  md3:w-full h-fit">
        <span className="md3:hidden">
          <Create />
        </span>
        <section className="flex p-4 lg1:p-2 rounded-2xl flex-col justify-start items-start gap-1.5 dark:bg-dark-30 my-2 md3:mt-0">
          <p>Admin</p>
          
        </section>
        <div className="w-full rounded-xl bg-dark-40 p-4 h-fit min-h-[180px] md1:min-h-[152px] mt-2">
          <p className="font-semibold text-base">Active members</p>
          <p className="font-light text-sm text-secondary-40">9999999999999999999 members</p>
          <div className="mt-4 flex flex-wrap gap-2 max-h-24 overflow-hidden">
            <Avatar
              size={36}
              className="rounded-full"
            />
            <Avatar
              size={36}
              className="rounded-full"
            />
            <Avatar
              size={36}
              className="rounded-full"
            />
            <Avatar
              size={36}
              className="rounded-full"
            />
            <Avatar
              size={36}
              className="rounded-full"
            />
            <Avatar
              size={36}
              className="rounded-full"
            />
            <Avatar
              size={36}
              className="rounded-full"
            />
            <Avatar
              size={36}
              className="rounded-full"
            />
            <Avatar
              size={36}
              className="rounded-full"
            />
            <Avatar
              size={36}
              className="rounded-full"
            />
            <Avatar
              size={36}
              className="rounded-full"
            />
            <Avatar
              size={36}
              className="rounded-full"
            />
          </div>

          <Ripple containerClassName="outline outline-1 hover:outline-2 md:hover:bg-dark-20 outline-neutral-200 w-full m-auto block mt-2">
            <button className="shrink-0 h-8 rounded-full sm1:text-xs outline outline-1 hover:outline-2 md:hover:bg-dark text-gray-400 w-full select-none">
              See all
            </button>
          </Ripple>
        </div>
      </section>
    </main>
  );
};

export default page;
