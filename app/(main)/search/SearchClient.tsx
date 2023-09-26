"use client";
import useSearchSection from "@/app/hooks/useSearchSection";
import { useSearchParams } from "next/navigation";
import React, { FC } from "react";
import PaginationButton from "./PaginationButton";
import Groups from "./Groups";
import { GroupUserFollow, OneInterviewsType, OnePostComponentType } from "@/app/types/client";
import Posts from "./Posts";
import Interviews from "./Interviews";

const SearchClient: FC<{ groups: GroupUserFollow["group"][], posts: OnePostComponentType[], interviews: OneInterviewsType[] }> = (props) => {
  const { groups,posts,interviews } = props;
  const searchParams = useSearchParams();
  const { section, on_group, on_interview, on_meetup, on_posts } = useSearchSection();
  return (
    <div className="w-full max-w-[1000px]">
      <h5>{`Your search result for: ${searchParams?.get("query")}`}</h5>

      <div className="flex mt-3 w-full flex-wrap gap-4">
        <PaginationButton
          label="Posts"
          highlight={section === "Posts"}
          onClick={on_posts}
        />
        <PaginationButton
          label="Interviews"
          highlight={section === "Interviews"}
          onClick={on_interview}
        />
        <PaginationButton
          label="Meetups"
          highlight={section === "Meetups"}
          onClick={on_meetup}
        />
        <PaginationButton
          label="Groups"
          highlight={section === "Groups"}
          onClick={on_group}
        />
      </div>

      <div className="full mt-3 rounded-md overflow-hidden">
        {section === "Posts" ? <Posts posts={posts}/> : null}
        {section === "Interviews" ? <Interviews interviews={interviews}/> : null}
        {section === "Meetups" ? <p>Meetups</p> : null}
        {section === "Groups" ? <Groups groups={groups} /> : null}
      </div>
    </div>
  );
};

export default SearchClient;
