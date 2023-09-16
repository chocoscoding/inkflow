import Checkbox from "@/app/components/Checkbox";
import { Arrow1, ArrowDown } from "@/app/components/Icons";
import React, { FC } from "react";
import MeetupClient from "./MeetupClient";
import { GroupPageType } from "@/app/types/client";
import getMeetups from "@/app/actions/getMeetups";

const Page: FC<GroupPageType> = async ({ params }) => {
  const meetups = await getMeetups();
  return (
    <main className="appScreen p-6 xl1:p-2 max-w-[1600px] m-auto">
      <MeetupClient {...meetups} />
    </main>
  );
};

export default Page;
