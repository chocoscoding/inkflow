"use client";
import { Message, Settings } from "@/app/components/Icons";
import { FollowActionType } from "@/app/types/client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const FollowAction: FC<FollowActionType> = ({ userId, id, userFollowingProfileUser }) => {
  const route = useRouter();
  const [followStatus, setFollowStatus] = useState(!!userFollowingProfileUser);
  const count = useRef(0);
  const lastFollowStatus = useRef(!!userFollowingProfileUser);
  //check if user is logged in before trigering update
  const setFollow = (followType: "follow" | "unfollow") => {
    if (!userId) {
      toast.dismiss();
      toast.error("Login to follow user 🔒");
      return;
    }
    setFollowStatus((prev) => !prev);
  };
  //call api but use setimeout to funnel fast re occuring to one call
  useEffect(() => {
    count.current++;
    if (count.current <= 1) return;
    const timeout = setTimeout(async () => {
      try {
        if (followStatus === lastFollowStatus.current) return;
        //api call to follow and unfollow profile user
        const apiCall = await axios.post(`/api/user/${id}/following`, {
          callType: followStatus ? "create" : "delete",
        });
        lastFollowStatus.current = followStatus;
        route.refresh();
      } catch (error) {
        toast.error("Something went wrong");
      }
    }, 800);
    return () => clearTimeout(timeout);
  }, [followStatus]);

  if (userId === id)
    return (
      <Link href={`/settings`}>
        <button className="flex items-center gap-2 bg-blue-default p-2 rounded-lg min-w-[120px]">
          <span>Go to Account Settings</span> <Settings />
        </button>
      </Link>
    );
  if (followStatus) {
    return (
      <>
        <button
          className="bg-blue-default p-2 rounded-lg min-w-[120px]"
          onClick={() => setFollow("unfollow")}>
          Unfollow
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className="bg-blue-default p-2 rounded-lg min-w-[120px]"
        onClick={() => setFollow("follow")}>
        Follow
      </button>
    </>
  );
};

export default FollowAction;
