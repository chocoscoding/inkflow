import MiniMeetup from "@/app/components/home/MiniMeetup";
import { OneMiniMeetup } from "@/app/types/client";
import React, { FC } from "react";

const Meetups: FC<OneMiniMeetup[]> = (meetups) => {
  return (
    <section className="flex p-4 sm:p-2 rounded-2xl flex-col justify-start items-start gap-4 dark:bg-dark-30">
      {Object.values(meetups).map((meetup, i) => (
        <MiniMeetup
          key={`meetup_${i}`}
          {...meetup}
        />
      ))}
    </section>
  );
};

export default Meetups;
