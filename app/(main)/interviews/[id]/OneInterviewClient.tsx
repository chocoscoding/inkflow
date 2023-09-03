import Image from "next/image";
import React from "react";
import CreateComment from "./CreateComment";
import Comments from "./Comments";
import PostFuntions from "../../../components/PostFuntions";
import InterviewClientTop from "./InterviewClientTop";

const OneInterviewClient = () => {
  const dataTemp = {
    referenceId: "64e1fb2d2e4b51bab1ec5f19",
    likeStatus: { id: "64d965ec96e0bce41d66ec9b" },
    replies: [],
    userId: "64d965ec96e0bce41d66ec9b",
    _count: { likes: 1, comments: 1 },
    extraClass: "hidden md1:block p-5 !bg-dark-20 mb-4 !w-full",
  };
  return (
    <main className="flex-1 max-w-[1000px]">
      <section className="min-h-screen rounded-xl">
        <section>
          <InterviewClientTop />
          {/* post info */}
          <section className="md:p-4 p-2 w-full flex flex-col gap-1.5 bg-dark-30 rounded-t-lg">
            {/* main post data */}
            <div className="text-secondary-30 mb-4">
              <p className="mb-4">
                Hey there, my name is Valentin and I am the founder of Thankbox - a really simple to use online group card and cash
                collection service. I think of it as a digital way for lots of lovely people to celebrate one lucky person.
              </p>
              <p className="mb-4">
                Im originally from Bulgaria and am currently based in lovely Edinburgh in Scotland. I came to Scotland to study computer
                games programming in 2010. After I graduated I even ended up working in gaming for almost 2 years - mostly doing mobile
                games.
              </p>
              <p className="mb-4">
                I then gradually transitioned into regular apps as there was an increasing need for that skillset at the time. I even made
                my own one in 2015, called Bargain Bytes - a simple app to track when stores like Steam have discounts on games. It actually
                ended up getting a decent amount of users and still has about a thousand actives, even though I no longer support it. It was
                my first experience of building something on my own and promoting it.
              </p>
              <p className="mb-4">
                I then tried my hand at doing a social network app, called Curated. I spent two years on it and learned all the hard lessons
                one needs to learn when doing their first startup. The main ones being building before validating and not having a clear
                monetisation or user acquisition strategy. It was an expensive lesson that made me realize there was a lot more to learn. So
                when I decided to work on Thankbox I tried to apply all the lessons I would learned.
              </p>
            </div>
          </section>

          <section className="bg-dark-30 md:p-4 p-2 rounded-b-lg">
            <PostFuntions {...dataTemp} />
            <CreateComment />
            <Comments />
          </section>
        </section>
      </section>
    </main>
  );
};

export default OneInterviewClient;
