import Checkbox from "@/app/components/Checkbox";
import { Arrow1 } from "@/app/components/Icons";
import React from "react";

const Categories = () => {
  return (
    <div className="rounded-xl bg-dark-30 p-4">
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
    </div>
  );
};

export default Categories;
