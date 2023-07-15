import React from "react";
import GroupClient from "./GroupClient";
import Image from "next/image";
import RecommendedGroups from "@/app/components/Groups/RecommendedGroups";

const page = () => {
  return (
    <main className="appScreen p-6 xl1:p-2">
      <div className="w-full flex lg2:flex-wrap gap-4">
        <GroupClient />
        <section className="lg2a:sticky lg2a:top-[60px] rounded-xl bg-dark-30 w-4/12 lg2a:max-w-[330px] max-w-[500px]  p-4 h-fit shrink-0  lg2:flex-auto lg2:w-full  md1:mb-[10px]">
          <p>Groups you might be interested in</p>
          <ul className="">
            {Array(1)
              .fill(0)
              .map((e, i) => (
                <RecommendedGroups key={`recommendedGroups-${i}`} />
              ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default page;
