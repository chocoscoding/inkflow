import React from "react";
import { ArrowDown, Message, Notification } from "../Icons";
import useLightMode from "@/app/hooks/useLightMode";
import Image from "next/image";
import Avatar from "../Avatar";
import UserMenu from "./UserMenu";
import Link from "next/link";

const style = {
  container: `flex xl:gap-6 lg:gap-4 md:gap-3 gap-2 md2:gap-1 items-center flex-shrink-0`,
  button: `cursor-pointer p-2 rounded-md xl1:scale-75 md2:scale-100 sm:bg-secondary-60 dark:sm:bg-dark-40 sm:hover:bg-secondaryBg-20 dark:sm:hover:bg-dark-20`,
  icon: `text-secondary-40 dark:text-secondary-60`,
};
const RNavigation = () => {
  return (
    <div className={style.container}>
      <Link
        href={`#`}
        className={style.button}>
        <Message className={style.icon} />
      </Link>
      <Link
        href={`#`}
        className={style.button}>
        <Notification className={style.icon} />
      </Link>
      <UserMenu />
    </div>
  );
};

export default RNavigation;
