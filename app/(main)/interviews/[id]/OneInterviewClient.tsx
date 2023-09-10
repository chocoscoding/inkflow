import Image from "next/image";
import React, { FC } from "react";
import PostFuntions from "../../../components/PostFuntions";
import InterviewClientTop from "./InterviewClientTop";
import { InterviewClientType } from "@/app/types/client";
import Comments from "../../post/[id]/Comments";

const OneInterviewClient: FC<InterviewClientType> = ({ InterviewData, comments, likeStatus }) => {
  const { id, userId, coverImage, createdAt, title, body, views, group, _count, owner } = InterviewData;
  return (
    <main className="flex-1 max-w-[1000px]">
      <section className="min-h-screen rounded-xl">
        <section>
          <InterviewClientTop {...InterviewData} />
          {/* post info */}
          <section className="md:p-4 p-2 w-full flex flex-col gap-1.5 bg-dark-30 rounded-t-lg">
            {/* main post data */}
            <div className="text-secondary-30 mb-4">
              <div className="ql-snow">
                <div
                  className="ql-editor mx-auto mt-6 sm:mt-2"
                  dangerouslySetInnerHTML={{ __html: body }}></div>
              </div>
            </div>
          </section>

          <section className="bg-dark-30 md:p-4 p-2 rounded-b-lg">
            <PostFuntions
            functionType="Interviews"
              extraClass="hidden md1:block p-5 !bg-dark-20 mb-4 !w-full"
              referenceId={id}
              likeStatus={likeStatus}
              _count={_count}
            />
            <Comments
              comments={comments}
              contentId={id}
              contentType="Post"
            />
          </section>
        </section>
      </section>
    </main>
  );
};

export default OneInterviewClient;
