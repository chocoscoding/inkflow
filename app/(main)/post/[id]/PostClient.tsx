import Image from "next/image";
import React from "react";
import CreateComment from "./CreateComment";
import Comments from "./Comments";
import CreatorInfo from "./CreatorInfo";
import PostFuntions from "../../../components/PostFuntions";

const PostClient = () => {
  return (
    <main className="flex-1">
      <section className="min-h-screen rounded-xl">
        <section>
          <div className="w-full overflow-hidden rounded-t-xl object-cover h-[300px]">
            <Image
              src={
                "https://images.unsplash.com/photo-1635006459494-c9b9665a666e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              }
              width={500}
              height={500}
              alt="post-Image"
              className="w-full h-auto"
            />
          </div>
          {/* post info */}
          <section className="md:p-4 p-2 w-full flex flex-col gap-1.5 bg-dark-30">
            <p className="text-xl font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nostrum nobis illum. Sequi beatae iste fugit voluptatibus
              illo.
            </p>
            <p className="text-secondary-30">20 Feb 2023</p>
            <div className="flex gap-2 px-1 py-2 rounded-lg bg-dark-40 overflow-hidden">
              <p className=" text-secondary-30 flex-shrink-0">Posted on:</p>
              <p className="text-blue-default truncate-lines-1 flex-1 overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos asperiores, cumque maiores delectus porro, corrupti minima
                repudiandae quas
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <p className="text-yellow-90">#webdevelopment</p>
              <p className="text-yellow-90">#Learning</p>
              <p className="text-yellow-90">#Open source</p>
              <p className="text-yellow-90">#IOT</p>
            </div>
            <hr className="w-full bg-secondary-30 opacity-10 my-2" />
            {/* main post data */}
            <div className="text-secondary-30 mb-4">
              <p className="mb-4">
                OnePay is a modern, easy-to-use Online Payment Processing Web App UI Kit template that will help you build a web app for
                your payment/marketplace platform. OnePay, a multi-payment platform to facilitate payments online.
              </p>
              <p className="mb-4">
                In this app, you can submit a request for a certain product or service online and one of our agents will contact you back
                with an offer. You can also pay merchants directly through the app. After successfully any transaction you can see details
                about your payment. History details include: -Transaction ID.
              </p>
              <p className="mb-4">
                You can also pay merchants directly through the app. After successfully any transaction you can see details about your
                payment. History details include: -Transaction ID.
              </p>
              <p className="mb-4">
                What will you get? - 200+ Beautiful Screens design - Figma, XD & Sketch Files 100% editable and scalable. Thank You For Your
                Time. What will you get? - 200+ Beautiful Screens design - Figma, XD & Sketch Files 100% editable and scalable. Thank You
                For Your Time.
              </p>
            </div>
          </section>

          <section className="bg-dark-30 md:p-4 p-2">
            <PostFuntions extraClass="hidden md1:block p-5 !bg-dark-20 mb-4 !w-full" />
            <CreateComment />
            <Comments />
          </section>
        </section>
      </section>
      <section className="mt-8">
        <CreatorInfo />
      </section>
    </main>
  );
};

export default PostClient;
