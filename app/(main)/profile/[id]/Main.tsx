"use client";
import React, { Suspense } from "react";
import SectionControl from "./SectionControl";
import Post from "@/app/components/home/Post";
import Interview from "../../interviews/Interview";
import useProfileSection from "@/app/hooks/useProfileSection";
import { OneInterviewsType, OneMeetupType, OnePostMain, PagePaginativeReturnType, ProfileClientType } from "@/app/types/client";
import axios from "axios";
import toast from "react-hot-toast";
import PagePagination from "@/app/components/Pagination/PagePagination";
import Meetup from "@/app/(main)/meetups/Meetup";
import PostsLoading from "@/app/components/loading/PostsLoading";
import MeetupsLoading from "@/app/components/loading/MeetupsLoading";
import InterviewsLoading from "@/app/components/loading/InterviewsLoading";
import { useParams } from "next/navigation";

const Profile: React.FC<ProfileClientType> = (props) => {
  const { section } = useProfileSection();
  const { Meetups: MeetupsData, Posts: PostsData, Interviews: InterviewsData } = props;
  const params = useParams();

  const fetchDataPost = async (page: number) => {
    try {
      const apiCall = await axios(`/api/user/${params?.id}/posts?page=${page}`);
      return apiCall.data as PagePaginativeReturnType<OnePostMain[]>;
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong");
      return {
        data: [],
        page,
      };
    }
  };
  const fetchDataInterview = async (page: number) => {
    try {
      const apiCall = await axios(`/api/user/${params?.id}/interviews?page=${page}`);
      return apiCall.data as PagePaginativeReturnType<OneInterviewsType[]>;
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong");
      return {
        data: [],
        page,
      };
    }
  };
  const fetchDataMeetup = async (page: number) => {
    try {
      const apiCall = await axios(`/api/user/${params?.id}/meetups?page=${page}`);
      return apiCall.data as PagePaginativeReturnType<OneMeetupType[]>;
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong");
      return {
        data: [],
        page,
      };
    }
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <>
        <SectionControl />

        {section === "posts" ? (
          <PagePagination
            initialElements={PostsData}
            keyname="posts"
            ListComponent={Post}
            fetchData={fetchDataPost}
            loadingComponent={<PostsLoading />}
          />
        ) : null}

        {section === "meetups" ? (
          <PagePagination
            initialElements={MeetupsData}
            keyname="meetups"
            ListComponent={Meetup}
            fetchData={fetchDataMeetup}
            loadingComponent={<MeetupsLoading />}
          />
        ) : null}

        {section === "interviews" ? (
          <PagePagination
            initialElements={InterviewsData}
            keyname="interviews"
            ListComponent={Interview}
            fetchData={fetchDataInterview}
            loadingComponent={<InterviewsLoading />}
          />
        ) : null}
      </>
    </Suspense>
  );
};

export default Profile;
