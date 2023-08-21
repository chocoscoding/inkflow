import Ripple from "@/app/components/Ripple";
import Tags from "@/app/components/Tags";
import Image from "next/image";
import React, { Suspense } from "react";
import Meetup from "../../meetups/Meetup";
import SectionControl from "./SectionControl";
import Post from "@/app/components/home/Post";
import Interview from "../../interviews/Interview";
import useProfileSection from "@/app/hooks/useProfileSection";
interface Profile {}
const tempdata = {
  id: "64dd80ffc0a3ec6db14334cf",
  title: "edls",
  tags: ["gbdrklvfd"],
  coverImage: "https://res.cloudinary.com/chocoscoding/image/upload/v1692238032/zd4kmzdvaiqqtitp7kqh.jpg",
  createdAt: new Date("2023-08-17T02:07:59.029Z"),
  views: 0,
  owner: {
    id: "64d965ec96e0bce41d66ec9b",
    username: "kfsffjoeijfios",
    image: null,
  },
  _count: { likes: 0, comments: 0 },
};
const Profile: React.FC<Profile> = ({}) => {
  const { section } = useProfileSection();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <>
        <SectionControl />

        {section === "meetups" ? <Meetup /> : null}

        {section === "posts" ? <Post {...tempdata} /> : null}

        {section === "interviews" ? <Interview /> : null}
      </>
    </Suspense>
  );
};

export default Profile;
