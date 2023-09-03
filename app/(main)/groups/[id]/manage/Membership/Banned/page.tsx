import React from "react";
import BannedClient from "./BannedClient";
import getGroupBannedUsers from "@/app/actions/getGroupBannedUsers";

const page = async ({ params }: { params: { id: string } }) => {
  const bannedUsers = await getGroupBannedUsers(params.id);
  return <BannedClient />;
};

export default page;
