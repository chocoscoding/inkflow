import CreatePost from "@/app/components/home/CreatePost";
import HomeNavMobile from "@/app/components/home/HomeNavMobile";
import Post from "@/app/components/home/Post";
import React from "react";

const Posts = () => {
  return (
    <section className="min-h-screen w-7/12 flex-1 pt-1 md:overflow-hidden">
      <div className="sticky top-[50px] py-2 bg-dark-20 md2:flex hidden">
        <HomeNavMobile
          Name="New"
          mainText="Newest"
          secondaryText="Find the latest updates"
          active={true}
        />
        <HomeNavMobile
          Name="Popular"
          mainText="Popular"
          secondaryText="The best of today"
          active={false}
        />
        <HomeNavMobile
          Name="Follow"
          mainText="Following"
          secondaryText="Explore from your favourite person"
          active={false}
        />
      </div>
      {Array(30)
        .fill(0)
        .map((ele, i) => (
          <Post key={`posts${i}`} />
        ))}
    </section>
  );
};

export default Posts;
