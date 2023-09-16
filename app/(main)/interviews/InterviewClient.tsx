"use client";
import Checkbox from "@/app/components/Checkbox";
import { Arrow1 } from "@/app/components/Icons";
import React, { FC } from "react";
import { CursorPaginativeReturnType, OneInterviewsType } from "@/app/types/client";
import Interview from "./Interview";
import Categories from "./Categories";
import CursorPagination from "@/app/components/Pagination/CursorPagination";
import axios from "axios";
import toast from "react-hot-toast";
import InterviewsLoading from "@/app/components/loading/InterviewsLoading";
import { CreateAMeetup2, CreateAMeetup1 } from "./CreateAMeetup2";

const InterviewClient: FC<CursorPaginativeReturnType<OneInterviewsType[]>> = (interviews) => {
  const fetchData = async (cursor: string | null) => {
    try {
      const apiCall = await axios(`/api/interview/all?cursor=${cursor}`);
      return apiCall.data as CursorPaginativeReturnType<OneInterviewsType[]>;
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong");
      return {
        data: [],
        metaData: null,
      };
    }
  };
  return (
    <div>
      <div className="w-full flex lg2:flex-wrap gap-4">
        <section className=" overflow-hidden lg2a:sticky lg2a:top-[60px] lg2:flex-1  w-3/12 lg2a:max-w-[300px] min-w-[230px] max-w-none h-fit shrink-0 lg2:order-1 flex flex-col gap-2">
          <Categories />
          <CreateAMeetup2 />
        </section>

        <section className="w-full flex flex-col gap-2 lg2:order-3 md1:mb-[50px]">
          <CursorPagination
            initialElements={interviews}
            keyname="interviews"
            ListComponent={Interview}
            fetchData={fetchData}
            loadingComponent={<InterviewsLoading />}
          />
        </section>
        <CreateAMeetup1 />
      </div>
    </div>
  );
};

export default InterviewClient;
