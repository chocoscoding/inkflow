import { BackArrow } from "@/app/components/Icons";
import React from "react";
import MembersClient from "./MembersClient";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className="appScreen w-full p-6 xl1:p-2 m-auto">
      <MembersClient />
    </main>
  );
};

export default page;
