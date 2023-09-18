import React, { FC } from "react";
import { URLSearchParams } from "url";
import SearchClient from "./SearchClient";
import searchPosts from "@/app/actions/search/Posts";
import searchInterviews from "@/app/actions/search/Interviews";
import searchGroups from "@/app/actions/search/Groups";

const page = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  if (!searchParams.query)
    return (
      <div className="appScreen flex py-2 px-4 max-w-[1600px] m-auto gap-3 flex-wrap">
        <p>Use the search bar to look for something</p>
      </div>
    );

  const [search, interviews, groups] = await Promise.all([
    searchPosts(searchParams.query!),
    searchInterviews(searchParams.query!),
    searchGroups(searchParams.query!),
  ]);
  console.log(search);
  console.log(interviews);
  console.log(groups);

  return (
    <div className="appScreen flex justify-center py-2 px-4 max-w-[1600px] m-auto gap-3 flex-wrap">
      <SearchClient />
    </div>
  );
};

export default page;
