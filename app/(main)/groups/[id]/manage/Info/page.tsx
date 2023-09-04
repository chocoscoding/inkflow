import React, { FC } from "react";
import InfoClient from "./InfoClient";
import { GroupPageType } from "@/app/types/client";
import getOneGroupOptional from "@/app/actions/Group/getOneGroupOptional";

const page: FC<GroupPageType> = async ({ params }) => {
  const groupInfo = await getOneGroupOptional(params, { name: true, coverImage: true, admin: true });
  if (!groupInfo)
    return (
      <div className="rounded-lg ">
        <div className="w-full">
          <div className="flex justify-between mb-4 flex-wrap bg-dark-40 py-2 px-2 rounded-lg items-center max-w-[600px]">
            <p>No group info found</p>
          </div>
        </div>
      </div>
    );
  return <InfoClient {...groupInfo} />;
};

export default page;
