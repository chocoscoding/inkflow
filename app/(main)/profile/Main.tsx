import Ripple from "@/app/components/Ripple";
import Tags from "@/app/components/Tags";
import Image from "next/image";
import React, { Suspense } from "react";
import Meetup from "../meetups/Meetup";
import SectionControl from "./SectionControl";
import Post from "@/app/components/home/Post";
import Interview from "../interviews/Interview";
import useProfileSection from "@/app/hooks/useProfileSection";
interface Profile {}
const Profile: React.FC<Profile> = ({}) => {
  const { section } = useProfileSection();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <>
        <SectionControl />

        {section === "meetups" ? <Meetup /> : null}

        {section === "posts" ? <Post /> : null}

        {section === "interviews" ? <Interview /> : null}
      </>
    </Suspense>
  );
};

export default Profile;
