"use client";
import useLightMode from "@/app/hooks/useLightMode";
import React from "react";

const DataFields = () => {
  const { lightMode } = useLightMode();
  const bg = lightMode ? "bg-secondaryBg-10" : "bg-dark-30";
  return (
    <section className={`flex-1 h-full md2:w-full shrink-0 overflow-x-hidden overflow-y-auto ${bg} p-8`}>
      <div className="f">sss</div>
    </section>
  );
};

export default DataFields;
