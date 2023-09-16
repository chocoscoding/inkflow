"use client";
import React from "react";

export const CreateAMeetup1 = () => (
  <section className="lg2a:sticky lg2a:top-[60px] rounded-xl bg-[#FF7C4D] w-4/12 lg2a:max-w-[310px] max-w-[500px]  p-4 h-fit min-h-[180px] md1:min-h-[152px] shrink-0  lg2:flex-auto lg2:order-2 lg2:w-full xl2:hidden">
    <p className="font-semibold text-lg">Host a Meetup</p>
    <p className="text-xs my-4">Find other Hipnoders in your area so you can learn, share, and work together.</p>

    <div className="flex justify-between gap-4 max-w-[300px]">
      <button className="text-red-10 bg-red-60 px-2 py-3 text-sm rounded-md flex-1">Code of Conduct</button>
      <button className="text-red-80 bg-secondaryBg-10 px-2 py-3 text-sm rounded-md flex-1">Host a meetup</button>
    </div>
  </section>
);
export const CreateAMeetup2 = () => (
  <section className="lg2a:sticky lg2a:top-[60px] rounded-xl bg-[#FF7C4D] w-full lg2a:max-w-[310px] max-w-[500px]  p-4 h-fit min-h-[180px] lg2:min-h-[152px] shrink-0  lg2:flex-auto lg2:order-2 lg2:w-full xl2a:hidden">
    <p className="font-semibold text-lg">Host a Meetup</p>
    <p className="text-xs my-4">Find other Hipnoders in your area so you can learn, share, and work together.</p>

    <div className="flex justify-between gap-4 max-w-[300px] flex-wrap ">
      <button className="text-red-10 bg-red-60 px-2 py-3 text-sm rounded-md min-w-[130px] flex-1 shrink-0 w-full">Code of Conduct</button>
      <button className="text-red-80 bg-secondaryBg-10 px-2 py-3 text-sm rounded-md min-w-[130px] flex-1 shrink-0 w-full">
        Host a meetup
      </button>
    </div>
  </section>
);
