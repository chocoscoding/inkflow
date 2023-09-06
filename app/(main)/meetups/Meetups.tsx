import Ripple from "@/app/components/Ripple";
import Tags from "@/app/components/Tags";
import Image from "next/image";
import React, { FC, Suspense } from "react";
import Meetup from "./Meetup";
import { OneMeetupType } from "@/app/types/client";

const Meetups: FC<OneMeetupType[]> = (meetups) => {
  return (
    <>
      {Object.values(meetups).map((meetup, i) => (
        <Meetup
          key={`meetup_${i}`}
          {...meetup}
        />
      ))}
    </>
  );
};

export default Meetups;
