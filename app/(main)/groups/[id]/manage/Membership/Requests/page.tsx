import React from "react";
import RequestClient from "./RequestClient";
import getGroupJoinRequests from "@/app/actions/getGroupJoinRequests";

const page = async ({ params }: { params: { id: string } }) => {
  const groupRequests = await getGroupJoinRequests(params.id);
  return <RequestClient />;
};

export default page;
