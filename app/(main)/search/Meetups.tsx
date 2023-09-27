import { OneMeetupType } from "@/app/types/client";
import React, { FC } from "react";
import Meetup from "../meetups/Meetup";

const Meetups: FC<{ meetups: OneMeetupType[] }> = ({ meetups }) => {
  if (meetups.length === 0)
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-lg font-semibold">No meetups found</p>
        <p className="text-sm text-gray-500">Try searching for something else</p>
      </div>
    );

  return (
    <>
      {meetups.map((meetup, i) => (
        <Meetup
          {...meetup}
          key={`meetup_${i}`}
        />
      ))}
    </>
  );
};

export default Meetups;
