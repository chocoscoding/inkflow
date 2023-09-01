"use client";
import React, { FC } from "react";
import Create from "./Create";
import Avatar from "@/app/components/Avatar";
import { Follow1 } from "@/app/components/Icons";
import MoreButton from "./MoreButton";
import { Admininstrators, GroupInfoType, GroupMemberMini } from "@/app/types/client";
import Link from "next/link";
import { useSession } from "next-auth/react";

const GroupInfo: FC<GroupInfoType> = (props) => {
  const { admininstrators, membersCount, membersMiniList, isUserFollowingGroup } = props;
  const { data } = useSession();
  return (
    <section className="md3a:sticky md3a:top-[60px]  w-4/12 md3a:max-w-[310px] max-w-[500px] shrink-0 lg2:order-1  md3:w-full h-fit">
      <span className="md3:hidden">
        <Create />
      </span>
      <section className="flex p-4 lg1:p-2 rounded-2xl flex-col justify-start items-start gap-1.5 dark:bg-dark-30 my-2 md3:mt-0">
        <p>Admin</p>
        {admininstrators.map((ele, i) => (
          <div
            key={`admininstrators__${i}`}
            className="flex items-center gap-3 w-full">
            <Avatar
              src={ele.user.image}
              size={30}
              className="rounded-full flex-shrink-0"
            />

            <div className="flex justify-between w-full">
              <Link href={`/profile/${ele.user.id}`}>
                <p className="w-full">{ele.user.username}</p>
              </Link>
              <button className="w-[30px] h-[30px] bg-blue-10 rounded-full flex-center flex-shrink-0 self-end">
                <Follow1 className="text-blue-default" />
              </button>
            </div>
          </div>
        ))}
        {admininstrators.some((obj) => obj.user.id === `${data?.user.id}`) ? (
          <MoreButton
            newPath="/manage/Membership/Members"
            label="Manage group"
          />
        ) : null}
      </section>

      <div className={`w-full rounded-xl bg-dark-30 p-4 h-fit ${isUserFollowingGroup ? `min-h-[180px] md1:min-h-[152px]` : ``} mt-2`}>
        <p className="font-semibold text-base">Members</p>
        <p className="font-light text-sm text-secondary-40">{`${membersCount} members`}</p>
        <div className="mt-4 flex flex-wrap gap-2 max-h-24 overflow-hidden">
          {membersMiniList.map((member, index) => (
            <Avatar
              key={`memberImage_${index}`}
              src={member.user.image}
              size={36}
              className="rounded-full"
            />
          ))}
        </div>
        {isUserFollowingGroup ? (
          <MoreButton
            newPath="/members"
            label="See more"
          />
        ) : null}
      </div>
    </section>
  );
};

export default GroupInfo;
