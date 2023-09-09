import Ripple from "@/app/components/Ripple";
import Tags from "@/app/components/Tags";
import Image from "next/image";
import React, { Suspense } from "react";
import SectionControl from "./SectionControl";
import Posts from "./Posts";
import Interviews from "./Interviews";
import Meetups from "./Meetups";
import useProfileSection from "@/app/hooks/useProfileSection";
import { ProfileClientType } from "@/app/types/client";
interface Profile {}
const tempdata = {
  id: "64dd80ffc0a3ec6db14334cf",
  title: "edls",
  tags: ["gbdrklvfd"],
  revenue: "1111",
  platform: "mobile",
  businessType: "1111",
  coverImage: "https://res.cloudinary.com/chocoscoding/image/upload/v1692238032/zd4kmzdvaiqqtitp7kqh.jpg",
  createdAt: new Date("2023-08-17T02:07:59.029Z"),
  views: 0,
  time: "10pm",
  date: "2023-08-17T02:07:59.029Z",
  userId: "64d965ec96e0bce41d66ec9b",
  body: "dsds",
  groupId: null,
  owner: {
    id: "64d965ec96e0bce41d66ec9b",
    username: "kfsffjoeijfios",
    image: null,
  },
  _count: { likes: 0, comments: 0 },
};
const Profile: React.FC<ProfileClientType> = (props) => {
  const { section } = useProfileSection();
  const { Meetups: MeetupsData, Posts: PostsData, Interviews: InterviewsData } = props;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <>
        <SectionControl />

        {section === "posts" ? <Posts data={PostsData} /> : null}

        {section === "meetups" ? <Meetups data={MeetupsData} /> : null}

        {section === "interviews" ? <Interviews data={InterviewsData} /> : null}
      </>
    </Suspense>
  );
};

export default Profile;
