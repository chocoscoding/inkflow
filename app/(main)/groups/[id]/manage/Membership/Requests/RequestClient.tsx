"use client";
import React, { FC } from "react";
import OneMemeberGeneral from "../../OneMemberGeneral";
import OneMemeber from "./OneMemeber";
import { Admininstrators as RequestClientType } from "@/app/types/client";

const RequestClient: FC<{ userRequests: RequestClientType }> = ({ userRequests }) => {
  console.log(userRequests);

  return (
    <div className="rounded-lg ">
      <div className="w-full bg-dark-40 p-2 rounded-lg">
        <ul>
          {userRequests.map((user, i) => (
            <OneMemeber
              key={`group-${i}`}
              {...user.user}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RequestClient;
