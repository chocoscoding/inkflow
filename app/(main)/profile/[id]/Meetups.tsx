"use client";
import { OneMeetupType } from "@/app/types/client";
import React, { FC, useState } from "react";
import Meetup from "../../meetups/Meetup";

const Meetups: FC<{data:OneMeetupType[] | null}> = ({data}) => {
  const [meetups, setMeetups] = useState(data);
  if (!meetups || meetups.length < 1) return <p>No content found</p>;
  return (
    <>
      {meetups.map((meetup, i) => (
        <Meetup
          {...meetup}
          key={`meetup__${i}`}
        />
      ))}
    </>
  );
};

export default Meetups;
