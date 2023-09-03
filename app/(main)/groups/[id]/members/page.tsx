import { BackArrow } from "@/app/components/Icons";
import React from "react";
import MembersClient from "./MembersClient";
import getGroupParticipants from "@/app/actions/getGroupParticipants";

const page = async ({ params }: { params: { id: string } }) => {
  const GroupMembersData = await getGroupParticipants(params.id);
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
