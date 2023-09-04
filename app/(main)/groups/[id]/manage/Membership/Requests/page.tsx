import React from "react";
import RequestClient from "./RequestClient";
import getGroupJoinRequests from "@/app/actions/Group/getGroupJoinRequests";

const page = async ({ params }: { params: { id: string } }) => {
  const groupRequests = await getGroupJoinRequests(params.id);
  console.log(groupRequests);

  if (!groupRequests)
    return (
      <>
        <p>No request yet</p>
      </>
    );
  return <RequestClient userRequests={groupRequests} />;
};

export default page;
