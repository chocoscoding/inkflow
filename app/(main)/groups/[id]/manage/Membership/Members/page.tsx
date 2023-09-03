import React from "react";
import MembersClient from "./MembersClient";
import getGroupMembers from "@/app/actions/getGroupMembers";

const page = async ({ params }: { params: { id: string } }) => {
  const members = await getGroupMembers(params.id);
  return <MembersClient />;
};

export default page;
