import React from "react";
import GroupClient from "./GroupClient";

const page = () => {
  return (
    <main className="appScreen p-6 xl1:p-2">
      <div className="w-full flex lg2:flex-wrap gap-4">
        <GroupClient />
        <section className="lg2a:sticky lg2a:top-[60px] rounded-xl bg-[#FF7C4D] w-4/12 lg2a:max-w-[310px] max-w-[500px]  p-4 h-[180px] shrink-0  lg2:flex-auto lg2:w-full  md1:mb-[10px]"></section>
      </div>
    </main>
  );
};

export default page;
