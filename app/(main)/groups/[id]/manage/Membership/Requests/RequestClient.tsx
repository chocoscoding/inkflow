"use client";
import React from "react";
import OneMemeberGeneral from "../../OneMemberGeneral";
import OneMemeber from "./OneMemeber";

const RequestClient = () => {
    return (
        <div className="rounded-lg ">
          <div className="w-full bg-dark-40 p-2 rounded-lg">
            <ul>
              {Array(30)
                .fill(0)
                .map((e, i) => (
                  <OneMemeber
                    key={`group-${i}`}
                    keyName={`group-${i}`}
                  />
                ))}
            </ul>
          </div>
        </div>
      );
};

export default RequestClient;
