import React from "react";
import { ArrowDown, Message, Notification } from "../Icons";
import useLightMode from "@/app/hooks/useLightMode";
import Image from "next/image";
import Avatar from "../Avatar";
import UserMenu from "./UserMenu";
import Link from "next/link";

const RNavigation = () => {
  const lightMode = useLightMode();
  return (
    <div className="flex xl:gap-6 lg:gap-4 md:gap-3 gap-2 items-center flex-shrink-0">
      <Link
        href={`#`}
        className="cursor-pointer bg-dark-40 p-2 rounded-md hover:bg-dark-20 xl1:scale-75">
        <Message className={`text-secondary-60`} />
      </Link>
      <Link
        href={`#`}
        className="cursor-pointer bg-dark-40 p-2 rounded-md hover:bg-dark-20 xl1:scale-75">
        <Notification className={`text-secondary-60`} />
      </Link>
      <UserMenu />
    </div>
  );
};

export default RNavigation;
