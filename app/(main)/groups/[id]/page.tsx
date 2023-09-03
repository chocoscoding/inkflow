import HomeNav from "@/app/components/home/HomeNav";
import React from "react";
import Trending from "../../(home)/Trending";
import Meetups from "../../(home)/Meetups";
import Avatar from "@/app/components/Avatar";
import Ripple from "@/app/components/Ripple";
import Main from "./Main";
import Image from "next/image";
import Create from "./Create";
import { Follow, Follow1 } from "@/app/components/Icons";
import { redirect } from "next/navigation";
import Link from "next/link";
import MoreButton from "./MoreButton";
import getOneGroup from "@/app/actions/getOneGroup";
import { Metadata, ResolvingMetadata } from "next";
import GroupInfo from "./GroupInfo";
import getUserIsFollowingGroup from "@/app/actions/getUserIsFollowingGroup";
import getTrendingTagsInGroup from "@/app/actions/getTrendingTagsInGroup";
import getGroupPosts from "@/app/actions/getGroupPost";

interface GroupPageType {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: GroupPageType, parent: ResolvingMetadata): Promise<Metadata> {
  const group = await getOneGroup(params);
  if (!group)
    return {
      title: "Group not found",
    };
  return {
    title: group.name + " - Inkflow",
  };
}

const page = async ({ params }: GroupPageType) => {
  const [group, isUserFollowingGroup, trendingTags, groupPosts] = await Promise.all([
    getOneGroup(params),
    getUserIsFollowingGroup(),
    getTrendingTagsInGroup(params.id),
    getGroupPosts(params.id),
  ]);
  if (!group)
    return (
      <div>
        <p>Group not found</p>
      </div>
    );
  return (
    <main className="flex w-full p-6 xl1:p-2 max-w-[1600px] m-auto gap-4 flex-wrap">
      <div className="sticky top-[60px] w-2/12 min-w-[230px] lg1:min-w-[200px] h-fit flex flex-col gap-2 md2:hidden shrink-0 lg2:hidden">
        <Trending data={trendingTags} />
      </div>

      <Main {...group} Posts={groupPosts} />

      <GroupInfo
        admininstrators={group.admininstrators}
        membersCount={group._count.members}
        membersMiniList={group.members}
        isUserFollowingGroup={isUserFollowingGroup}
      />
    </main>
  );
};

export default page;
