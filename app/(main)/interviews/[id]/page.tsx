import React from "react";
import PostFuntions from "../../../components/PostFuntions";
import ContentControl from "../../../components/ContentControl";
import OneInterviewClient from "./OneInterviewClient";
import { Metadata, ResolvingMetadata } from "next";
import getOneInterview from "@/app/actions/getOneInterview";
import getComments from "@/app/actions/getComments";
import getHasUserLiked from "@/app/actions/getHasUserLiked";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import CreatorInfo from "../../post/[id]/CreatorInfo";
interface InterviewPageType {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: InterviewPageType): Promise<Metadata> {
  const interview = await getOneInterview(params, { title: true });

  if (!interview)
    return {
      title: "No interview found",
      description: `Couldn't find the interview you're trying to get`,
    };
  return {
    title: "Interview - " + interview.title,
  };
}
const page = async ({ params }: InterviewPageType) => {
  const interview = await getOneInterview({ id: params.id });

  const userPromise = getServerSession(authOptions);
  const commentsPromise = getComments({ id: interview?.id, contentType: "Interview" });
  const postLikeStatus = getHasUserLiked({ id: interview?.id });

  if (!interview)
    return (
      <div className="appScreen flex py-2 px-4 max-w-[1600px] m-auto gap-3 flex-wrap">
        <h1>No interview found</h1>
      </div>
    );
  const [comments, likeStatus, userSession] = await Promise.all([commentsPromise, postLikeStatus, userPromise]);

  return (
    <div className="appScreen flex py-2 px-4 max-w-[1600px] m-auto gap-3 flex-wrap">
      <PostFuntions
        extraClass="md1:hidden sticky top-[55px]"
        referenceId={interview.id}
        likeStatus={likeStatus}
        _count={interview._count}
      />
      <OneInterviewClient
        comments={comments}
        InterviewData={interview}
        likeStatus={likeStatus}
      />

      {userSession?.user.id === interview.owner.id ? (
        <ContentControl
          contentType="interview"
          contentId={"1"}
        />
      ) : (
        <CreatorInfo {...interview.owner} />
      )}
    </div>
  );
};

export default page;
