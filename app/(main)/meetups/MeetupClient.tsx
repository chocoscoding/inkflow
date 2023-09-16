"use client";
import Checkbox from "@/app/components/Checkbox";
import { Arrow1 } from "@/app/components/Icons";
import React, { FC } from "react";
import Image from "next/image";
import { CursorPaginativeReturnType, OneMeetupType } from "@/app/types/client";
import Categories from "./Categories";
import { CreateAMeetup } from "./CreateAMeetup";
import toast from "react-hot-toast";
import axios from "axios";
import CursorPagination from "@/app/components/Pagination/CursorPagination";
import Meetup from "./Meetup";
import MeetupsLoading from "@/app/components/loading/MeetupsLoading";

const MeetupClient: FC<CursorPaginativeReturnType<OneMeetupType[]>> = (meetups) => {
  const fetchData = async (cursor: string | null) => {
    try {
      const apiCall = await axios(`/api/interview/all?cursor=${cursor}`);
      return apiCall.data as CursorPaginativeReturnType<OneMeetupType[]>;
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
        <Categories />

        <section className="w-full flex flex-col gap-2 lg2:order-3 md1:mb-[50px]">
          <CursorPagination
            initialElements={meetups}
            keyname="meetups"
            ListComponent={Meetup}
            fetchData={fetchData}
            loadingComponent={<MeetupsLoading />}
          />{" "}
        </section>
        <CreateAMeetup />
      </div>
    </div>
  );
};

export default MeetupClient;
