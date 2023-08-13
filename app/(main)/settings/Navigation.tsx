"use client";
import { LockOutline, ProfileOutline } from "@/app/components/Icons";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const Navigation = () => {
  const path = usePathname();
  const isDefaultPath = () => {
    if (path === "/settings") return true;
    return false;
  };
  return (
    <section
      className={`max-w-[700px] min-w-[260px] w-full flex-shrink h-full mx-auto my-0 ${
        isDefaultPath() ? "m-x-auto" : "!max-w-[300px] md1:hidden"
      }`}>
      <ul className="w-full">
        <Link href={"/settings/profile"}>
          <li className="border-b border-secondary-30 h-14 flex items-center gap-3 px-2">
            <ProfileOutline />
            <p>Edit Profile</p>
          </li>
        </Link>
        <Link href={"/settings/security"}>
          <li className="border-b border-secondary-30 h-14 flex items-center gap-3 px-2">
            <LockOutline />
            <p>Password and Security</p>
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default Navigation;
