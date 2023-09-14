"use client";
import Checkbox from "@/app/components/Checkbox";
import { Arrow1 } from "@/app/components/Icons";
import React from "react";

const Categories = () => {
  return (
    <section className="lg2a:sticky lg2a:top-[60px] lg2:flex-1 rounded-xl bg-dark-30 w-3/12 lg2a:max-w-[300px] min-w-[230px] max-w-none p-4 h-fit shrink-0 lg2:order-1">
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium">Categories</p>
        <Arrow1 className=" rotate-[270deg] scale-75" />
      </div>
      {/* <main className="mt-4 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p>Categories</p>
          <Checkbox />
        </div>
      </main> */}
    </section>
  );
};

export default Categories;
