"use client";
import useProfileSection from "@/app/hooks/useProfileSection";
import React from "react";

const SectionControl = () => {
  const { section, posts, meetups, interviews } = useProfileSection();
  return (
    <div className="flex gap-7 p-2 bg-dark-30 rounded-xl overflow-x-auto scrollbar-none">
      <button
        onClick={posts}
        className={`py-2.5 px-4 ${section === "posts" ? "bg-red-80" : ""} rounded-full cursor-pointer`}>
        Posts
      </button>
      <button
        onClick={meetups}
        className={`py-2.5 px-4 ${section === "meetups" ? "bg-red-80" : ""} rounded-full cursor-pointer`}>
        Meetups
      </button>
      <button
        onClick={interviews}
        className={`py-2.5 px-4 ${section === "interviews" ? "bg-red-80" : ""} rounded-full cursor-pointer`}>
        Interviews
      </button>
    </div>
  );
};

export default SectionControl;
