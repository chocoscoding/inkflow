import Checkbox from "@/app/components/Checkbox";
import { Arrow1, ArrowDown } from "@/app/components/Icons";
import React, { FC } from "react";
import ProfileClient from "./ProfileClient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect, usePathname } from "next/navigation";
import UserInfo from "./UserInfo";
import getOneProfile from "@/app/actions/Profile/getOneProfile";
import getProfileFollowers from "@/app/actions/Profile/getProfileFollowers";
import getProfileFollowing from "@/app/actions/Profile/getProfileFollowing";
import { FollowerType, FollowingType } from "@/app/types/client";
import getOneProfilePosts from "@/app/actions/Profile/getOneProfilePosts";
import getOneProfileInterviews from "@/app/actions/Profile/getOneProfileInterviews";
import getOneProfileMeetups from "@/app/actions/Profile/getOneProfileMeetups";
import getUserFollowingUserStatus from "@/app/actions/User/getUserFollowingUserStatus";
interface ProfilePageType {
  params: { id?: string };
}
const Page: FC<ProfilePageType> = async ({ params }) => {
  const session = await getServerSession(authOptions);

  if (session?.user.id === params.id) redirect("/profile/me");

  const profile = await getOneProfile(params.id);
  if (profile === "User not logged in") {
    return (
      <main className="appScreen p-6 xl1:p-2 max-w-[1600px] m-auto">
        <div className="w-full flex md1:flex-wrap gap-4">
          <p>Login to view your profile</p>
        </div>
      </main>
    );
  }
  if (!profile)
    return (
      <main className="appScreen p-6 xl1:p-2 max-w-[1600px] m-auto">
        <div className="w-full flex md1:flex-wrap gap-4">
          <p>No user found</p>
        </div>
      </main>
    );

  //if the profile is available
  const followersCountPromise = getProfileFollowers({ responseType: "count", profileId: params.id! }) as Promise<number>;
  const followingCountPromise = getProfileFollowing({ responseType: "count", profileId: params.id! }) as Promise<number>;
  const getUserFollowingUserStatusPromise = getUserFollowingUserStatus({ followerId: profile.id });
  const getPostsPromise = getOneProfilePosts({ profileId: params.id!, page: 1 });
  const getInterviewsPromise = getOneProfileInterviews({ profileId: params.id!, page: 1 });
  const getMeetupsPromise = getOneProfileMeetups({ profileId: params.id!, page: 1 });
  const [followersCount, followingCount, userFollowingUserStatus, Posts, Interviews, Meetups] = await Promise.all([
    followersCountPromise,
    followingCountPromise,
    getUserFollowingUserStatusPromise,
    getPostsPromise,
    getInterviewsPromise,
    getMeetupsPromise,
  ]);
  return (
    <main className="appScreen p-6 xl1:p-2 max-w-[1600px] m-auto">
      <div className="w-full flex md1:flex-wrap gap-4">
        <UserInfo
          profile={profile}
          userFollowingUserStatus={userFollowingUserStatus}
          followersCount={followersCount}
          followingCount={followingCount}
        />
        <ProfileClient
          Posts={Posts}
          Interviews={Interviews}
          Meetups={Meetups}
        />
      </div>
    </main>
  );
};

export default Page;
