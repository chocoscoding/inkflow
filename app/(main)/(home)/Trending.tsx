"use client";
import { TrendingTags } from "@/app/types/client";
import React, { FC } from "react";

const Trending: FC<{ data: TrendingTags }> = ({ data }) => {
  return (
    <section className="flex p-4 rounded-2xl flex-col justify-start items-start gap-3 dark:bg-dark-30">
      <p>Trending Tags</p>
      <ul className="flex flex-col gap-2">
        {data?.map((tag, index) => (
          <li
            key={`tag__${tag.name}__${index}`}
            className="text-xl text-secondary-30 cursor-pointer transition-all hover:underline">{`#${tag.name}
          `}</li>
        ))}
      </ul>
    </section>
  );
};

export default Trending;
