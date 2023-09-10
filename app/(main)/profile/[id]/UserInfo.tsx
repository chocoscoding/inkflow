"use client";
import React, { FC } from "react";
import Checkbox from "@/app/components/Checkbox";
import { Arrow1, FacebookOutline, InstagramOutline, LinkedinOutline, Message, Settings, TwitterOutline, Web } from "@/app/components/Icons";
import Avatar from "@/app/components/Avatar";
import { UserInfoClient } from "@/app/types/client";
import Link from "next/link";
import ReactTimeago from "react-timeago";
import { useSession } from "next-auth/react";
import FollowAction from "./FollowAction";
import useFollowersCount from "@/app/hooks/useFollowersCount";

const UserInfo: FC<UserInfoClient> = (props) => {
  //destructure from props
  const { profile, followersCount, followersList, followingCount, followingList, userFollowingUserStatus } = props;
  const { bio, id, image, createdAt, username, occupation,socailLink } = profile;
  
  const { data } = useSession();
  return (
    <section className="lg2a:sticky lg2a:top-[60px] lg2:flex-1 rounded-xl bg-dark-30 w-3/12 lg2a:max-w-[290px] min-w-[230px] max-w-none h-fit shrink-0 lg2:order-1 overflow-hidden">
      <div className="min-h-[250px] relative">
        <div className=" bg-gradient-to-r from-[#FD7240] to-[#EA942C] h-[150px]"></div>
        <div className="h-fit absolute bottom-3 flex-center w-full">
          <Avatar
            src={image}
            size={152}
            className="rounded-full flex-shrink-0 h-fit outline outline-4 outline-dark-30"
          />
        </div>
      </div>

      <main className="w-full flex flex-col items-center">
        <h1 className="font-semibold text-xl">{username}</h1>
        {occupation ? <p className="mt-1.5">{occupation}</p> : null}

        <div className="flex mt-3 gap-3">
          <FollowAction
            userFollowingProfileUser={userFollowingUserStatus}
            id={id}
            userId={data?.user.id}
          />
        </div>

        <div className="flex mt-4 mb-1">
          <div className="flex flex-col items-center">
            <p>{followersCount}</p>
            <p>Followers</p>
          </div>
          <div className="h-[49px] w-[2px] bg-secondary-30 mx-4"></div>
          <div className="flex flex-col items-center">
            <p>{followingCount}</p>
            <p>Following</p>
          </div>
        </div>

        <p className="text-secondary-30 w-[70%] mt-3">
          {bio || `Hey there... Im ${username}.I'm cooking something awesome for you all, I'll update my bio soon 😉`}
        </p>

        <Link
          target="_blank"
          href={socailLink?.x || `https://x.com/inkflow`}>
          <div className="mt-5 flex gap-3">
            <Web />
            <p className="font-bold">{socailLink?.website}</p>
          </div>
        </Link>
        <div className="mt-5 mb-5 flex text-secondary-30 gap-3">
          {socailLink?.x ? (
            <Link
              target="_blank"
              href={socailLink.x || `https://x.com/inkflow`}>
              <TwitterOutline className="text-xl" />
            </Link>
          ) : null}
          {socailLink?.linkedin ? (
            <Link
              target="_blank"
              href={socailLink?.linkedin}>
              <LinkedinOutline className="text-xl" />
            </Link>
          ) : null}
          {socailLink?.instagram ? (
            <Link
              target="_blank"
              href={socailLink?.instagram || `https://instagram.com/inkflow`}>
              <InstagramOutline className="text-xl" />
            </Link>
          ) : null}
        </div>
        <div className="flex gap-3 mb-2">
          <p className="font-thin">
            Joined <ReactTimeago date={createdAt} />
          </p>
        </div>
      </main>
    </section>
  );
};

export default UserInfo;
