"use client";
import useSearchSection from "@/app/hooks/useSearchSection";
import React from "react";

const SearchClient = () => {
  const { section, on_group, on_interview, on_meetup, on_posts } = useSearchSection();
  return (
    <div className="w-full max-w-[1000px] border">
      <h5>Your search result for: abc</h5>

      <div className="flex mt-3 w-full flex-wrap gap-4">
        <button
          className={`outline outline-2 outline-secondary-20 ${
            section === "Posts" ? "bg-secondary-20" : ""
          } w-fit px-3 py-1.5 rounded-full`}
          onClick={on_posts}>
          Posts
        </button>
        <button
          className={`outline outline-2 outline-secondary-20 ${
            section === "Interviews" ? "bg-secondary-20" : ""
          } w-fit px-3 py-1.5 rounded-full`}
          onClick={on_interview}>
          Interviews
        </button>
        <button
          className={`outline outline-2 outline-secondary-20 ${
            section === "Meetups" ? "bg-secondary-20" : ""
          } w-fit px-3 py-1.5 rounded-full`}
          onClick={on_meetup}>
          Meetups
        </button>
        <button
          className={`outline outline-2 outline-secondary-20 ${
            section === "Groups" ? "bg-secondary-20" : ""
          } w-fit px-3 py-1.5 rounded-full`}
          onClick={on_group}>
          Groups
        </button>
      </div>

      <div className="full border mt-3">
        {section === "Posts" ? <p>Posts</p> : null}
        {section === "Interviews" ? <p>Interviews</p> : null}
        {section === "Meetups" ? <p>Meetups</p> : null}
        {section === "Groups" ? <p>Groups</p> : null}
      </div>
    </div>
  );
};

export default SearchClient;
