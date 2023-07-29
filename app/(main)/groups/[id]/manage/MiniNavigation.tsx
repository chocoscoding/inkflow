"use client";
import React from "react";
import { usePathname } from "next/navigation";
const MiniNavigation = () => {
  const path = usePathname();

  return (
    <section className="rounded-md bg-dark-30 overflow-hidden min-w-[200px] sticky top-[100px] h-fit">
      <ul className="flex flex-col gap-4">
        <li className="flex items-center">
          <span className="h-10 w-[3px] bg-red-80 mr-5"></span>
          <p className="text-red-80">Members</p>
        </li>
        <li className="flex items-center">
          <span className="h-10 w-[3px] bg-red-80 mr-5"></span>
          <p className="text-red-80">Requests</p>
        </li>
        <li className="flex items-center">
          <span className="h-10 w-[3px] bg-red-80 mr-5"></span>
          <p className="text-red-80">Blocked</p>
        </li>
      </ul>
    </section>
  );
};

export default MiniNavigation;
