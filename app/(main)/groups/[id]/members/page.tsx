import { BackArrow } from "@/app/components/Icons";
import React from "react";
import MembersClient from "./MembersClient";
import getGroupMembers from "@/app/actions/Group/getGroupMembers";

const page = async ({ params }: { params: { id: string } }) => {
  const GroupMembersData = await getGroupMembers(params.id);
  if (!GroupMembersData)
    return (
      <main className="appScreen w-full p-6 xl1:p-2 m-auto">
        <p>No group found</p>
      </main>
    );
  return (
    <main className="appScreen w-full p-6 xl1:p-2 m-auto">
      <MembersClient data={GroupMembersData} />
    </main>
  );
};

export default page;
