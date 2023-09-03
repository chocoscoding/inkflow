import React from "react";
import MembersClient from "./MembersClient";
import getGroupMembers from "@/app/actions/getGroupMembers";

const page = async ({ params }: { params: { id: string } }) => {
  const members = await getGroupMembers(params.id);
  if (!members)
    return (
      <>
        <p>Could not get this data</p>
      </>
    );
  return <MembersClient {...members} />;
};

export default page;
