import Checkbox from "@/app/components/Checkbox";
import { Arrow1, ArrowDown } from "@/app/components/Icons";
import React from "react";
import ProfileClient from "./ProfileClient";

const Page = () => {
  return (
    <main className="appScreen p-6 xl1:p-2 max-w-[1600px] m-auto">
      <ProfileClient />
    </main>
  );
};

export default Page;
