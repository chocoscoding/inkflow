import Ripple from "@/app/components/Ripple";
import Tags from "@/app/components/Tags";
import Image from "next/image";
import React, { Suspense } from "react";
import Meetup from "./Meetup";
interface MeetupTypes {}
const Meetups: React.FC<MeetupTypes> = ({}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Meetup/>
    </Suspense>
  );
};

export default Meetups;
