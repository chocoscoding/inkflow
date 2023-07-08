import React, { Suspense } from "react";
interface MeetupTypes {}
const Meetups: React.FC<MeetupTypes> = ({}) => {
  console.log();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex-1 flex flex-col gap-2">
        <div className="w-full bg-slate-500 h-20"></div>
        <div className="w-full bg-slate-500 h-20"></div>
        <div className="w-full bg-slate-500 h-20"></div>
        <div className="w-full bg-slate-500 h-20"></div>
        <div className="w-full bg-slate-500 h-20"></div>
        <div className="w-full bg-slate-500 h-20"></div>
        <div className="w-full bg-slate-500 h-20"></div>
        <div className="w-full bg-slate-500 h-20"></div>
        <div className="w-full bg-slate-500 h-20"></div>
        <div className="w-full bg-slate-500 h-20"></div>
        <div className="w-full bg-slate-500 h-20"></div>
        <div className="w-full bg-slate-500 h-20"></div>
        <div className="w-full bg-slate-500 h-20"></div>
        <div className="w-full bg-slate-500 h-20"></div>
        <div className="w-full bg-slate-500 h-20"></div>
      </div>
    </Suspense>
  );
};

export default Meetups;
