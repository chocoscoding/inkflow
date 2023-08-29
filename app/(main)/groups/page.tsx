import React from "react";
import GroupClient from "./GroupClient";
import Image from "next/image";
import RecommendedGroups from "@/app/components/Groups/RecommendedGroups";
import getGroupsUserFollow from "@/app/actions/getGroupsUserFollow";
import getOneGroup from "@/app/actions/getOneGroup";
import { Metadata, ResolvingMetadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import getUserGroupRequests from "@/app/actions/getUserGroupRequests";
interface GroupPageType {
  params: {
    id: string;
  };
}

const page = async ({ params }: GroupPageType) => {
  const session = await getServerSession(authOptions);
  if (!session?.user.id)
    return (
      <main className="appScreen p-6 xl1:p-2 max-w-[1600px] m-auto">
        <p>You must be logged in to continue</p>
      </main>
    );
  const groupsFollowingReq = getGroupsUserFollow();
  const groupsRequestsReq = getUserGroupRequests();
  const [groupsFollowing, groupsRequests] = await Promise.all([groupsFollowingReq, groupsRequestsReq]);
  return (
    <main className="appScreen p-6 xl1:p-2 max-w-[1600px] m-auto">
      <div className="w-full flex lg2:flex-wrap gap-4">
        <GroupClient
          guf={groupsFollowing}
          groupRequests={groupsRequests}
        />
        <section className="lg2a:sticky lg2a:top-[60px] rounded-xl bg-dark-30 w-4/12 lg2a:max-w-[330px] p-4 h-fit shrink-0  lg2:flex-auto lg2:w-full  md1:mb-[10px]">
          <p>Groups you might be interested in</p>
          <ul className="">
            {Array(1)
              .fill(0)
              .map((e, i) => (
                <RecommendedGroups key={`recommendedGroups-${i}`} />
              ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default page;
