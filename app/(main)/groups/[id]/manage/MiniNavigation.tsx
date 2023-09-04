"use client";
import React, { useCallback } from "react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
const MiniNavigation = () => {
  const path = usePathname();
  const params = useParams();

  const isActive = useCallback(() => {
    const pathLists = path?.split("/");
    if (!pathLists) return;
    if (pathLists[4] === "Membership" && pathLists[5] === "Members") return 1;
    if (pathLists[4] === "Membership" && pathLists[5] === "Requests") return 2;
    if (pathLists[4] === "Membership" && pathLists[5] === "Banned") return 3;
  }, [path]);

  if (path?.includes(`/groups/${params!.id}/manage/Membership`))
    return (
      <section className="rounded-md text-se bg-dark-30 overflow-hidden min-w-[200px] md2a:sticky md2a:top-[180px] h-fit md2:w-full flex-shrink-0">
        <ul className="flex flex-col gap-4">
          <Link href={"Members"}>
            <li className="flex items-center">
              <span className={`h-10 w-[3px] ${isActive() === 1 ? "bg-red-80" : "bg-transparent"} mr-5`}></span>
              <p className={isActive() === 1 ? "text-red-80" : "text-secondaryBg-20"}>Members</p>
            </li>
          </Link>
          <Link href={"Requests"}>
            <li className="flex items-center">
              <span className={`h-10 w-[3px] ${isActive() === 2 ? "bg-red-80" : "bg-transparent"} mr-5`}></span>
              <p className={isActive() === 2 ? "text-red-80" : "text-secondaryBg-20"}>Requests</p>
            </li>
          </Link>
          <Link href={"Banned"}>
            <li className="flex items-center">
              <span className={`h-10 w-[3px] ${isActive() === 3 ? "bg-red-80" : "bg-transparent"} mr-5`}></span>
              <p className={isActive() === 3 ? "text-red-80" : "text-secondaryBg-20"}>Banned</p>
            </li>
          </Link>
        </ul>
      </section>
    );

  return null;
};

export default MiniNavigation;
