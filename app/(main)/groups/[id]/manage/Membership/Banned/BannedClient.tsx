"use client";
import React, { FC } from "react";
import OneMemeber from "./OneMemeber";
import { BannedClient } from "@/app/types/client";

const BannedClient: FC<{ bannedUsers: BannedClient[] }> = ({ bannedUsers }) => {
  return (
    <div className="rounded-lg ">
      <div className="w-full bg-dark-40 p-2 rounded-lg">
        <ul>
          {bannedUsers.map((bannedUser, i) => (
            <OneMemeber
              {...bannedUser.user}
              key={`bannedMember-${i}`}
              buttonLabel={`Unban`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BannedClient;
