import { GroupUserFollow } from "@/app/types/client";
import React, { FC } from "react";
import OneGroup from "./OneGroup";

const Groups: FC<{ groups: GroupUserFollow["group"][] }> = ({ groups }) => {
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
