"use client";
import React, { useCallback } from "react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
const MainNavigation = () => {
  const path = usePathname();
  const params = useParams();
  const isActive = useCallback(() => {
    if (!path) return 0;
    if (path.includes(`/groups/${params!.id}/manage/Membership`)) return 1;
    if (path.includes(`/groups/${params!.id}/manage/Content`)) return 2;
  }, [params, path]);
  return (
    <div className="bg-dark-30 w-full m-auto max-w-[1600px] border-b border-secondary-30  sm:px-4 px-2 sm:pt-4 pt-2 sticky top-[50px] z-10 pb-2">
      <p className="mb-4 text-2xl">Manage group</p>
      <div className="flex gap-5">
        <Link href={`/groups/${params!.id}/manage/Membership/Members`}>
          <div className="flex flex-col relative bottom-[-3px]">
            <p className={` text-base ${isActive() === 1 ? "text-red-80" : "text-secondary-30"} mx-2`}>Membership</p>
            <span className={`mt-3 w-full h-1 ${isActive() === 1 ? "bg-red-80" : "bg-transparent"} rounded-md`}></span>
          </div>
        </Link>
        <Link href={`/groups/${params!.id}/manage/Content`}>
          <div className="flex flex-col relative bottom-[-3px]">
            <p className={` text-base ${isActive() === 2 ? "text-red-80" : "text-secondary-30"} mx-2`}>Content</p>
            <span className={`mt-3 w-full h-1 ${isActive() === 2 ? "bg-red-80" : "bg-transparent"} rounded-md`}></span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainNavigation;
