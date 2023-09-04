import React from "react";
import BannedClient from "./BannedClient";
import getGroupBannedUsers from "@/app/actions/Group/getGroupBannedUsers";

const page = async ({ params }: { params: { id: string } }) => {
  const bannedUsers = await getGroupBannedUsers(params.id);
  if (!bannedUsers)
    return (
      <div className="rounded-lg ">
        <div className="w-full bg-dark-40 p-2 rounded-lg">
          <p>{`Can't find this data`}</p>
        </div>
      </div>
    );
  return <BannedClient bannedUsers={bannedUsers}/>;
};

export default page;
