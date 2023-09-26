import { GroupUserFollow } from "@/app/types/client";
import React, { FC } from "react";
import OneGroup from "./OneGroup";

const Groups: FC<{ groups: GroupUserFollow["group"][] }> = ({ groups }) => {
  if (groups.length === 0)
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-lg font-semibold">No groups found</p>
        <p className="text-sm text-gray-500">Try searching for something else</p>
      </div>
    );
  return (
    <>
      {groups.map((group, i) => (
        <OneGroup
          group={group}
          key={`group_${i}`}
        />
      ))}
    </>
  );
};

export default Groups;
