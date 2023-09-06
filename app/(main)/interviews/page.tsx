import React, { FC } from "react";
import InterviewClient from "./InterviewClient";
import { GroupPageType } from "@/app/types/client";
import getInterviews from "@/app/actions/getInterviews";

const page: FC<GroupPageType> = async ({ params }) => {
  const interviews = await getInterviews();

  return (
    <main className="appScreen p-6 xl1:p-2 max-w-[1600px] m-auto">
      <InterviewClient {...interviews} />
    </main>
  );
};

export default page;
