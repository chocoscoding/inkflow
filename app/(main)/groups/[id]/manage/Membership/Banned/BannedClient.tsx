"use client";
import React from "react";
import OneMemeber from "./OneMemeber";

const BannedClient = () => {
  return (
    <div className="rounded-lg ">
      <div className="w-full bg-dark-40 p-2 rounded-lg">
        <ul>
          {Array(30)
            .fill(0)
            .map((e, i) => (
              <OneMemeber
                key={`bannedMember-${i}`}
                buttonLabel={`Unban`}
                buttonOnClick={() => {}}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default BannedClient;
