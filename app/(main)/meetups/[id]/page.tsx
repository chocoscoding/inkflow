import getCurrentUser from "@/app/actions/getCurrentUser";
import getOneMeetup from "@/app/actions/getOneMeetup";
import Ripple from "@/app/components/Ripple";
import Tags from "@/app/components/Tags";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import React from "react";
import MeetupClient from "./MeetupClient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ContentControl from "@/app/components/ContentControl";
import CreatorInfo from "../../post/[id]/CreatorInfo";

interface PostPageType {
  params: {
    id: string;
  };
}
export async function generateMetadata({ params }: PostPageType, parent: ResolvingMetadata): Promise<Metadata> {
  const meetup = await getOneMeetup(params);
  if (!meetup)
    return {
      title: "No meetup found",
      description: `Couldn't find the meetup you're trying to get`,
    };
  return {
    title: meetup.title,
    description: `${meetup.body.substring(0, 40)}...`,
  };
}
const page = async ({ params }: PostPageType) => {
  const currentUserPromise = getServerSession(authOptions);
  const meetupPromise = getOneMeetup(params);

  const [currentUser, meetup] = await Promise.all([currentUserPromise, meetupPromise]);
  if (!meetup)
    return (
      <div className="appScreen flex py-2 px-4 max-w-[1600px] m-auto gap-3 flex-wrap">
        <h1>No meetup found</h1>
      </div>
    );
  return (
    <main className="appScreen pt-2 flex max-w-[1500px] m-auto flex-wrap gap-6 px-1 border border-white">
      <MeetupClient {...meetup} />
      <section className="">
        {currentUser?.user.id === meetup.userId ? (
          <ContentControl
            contentId={meetup.id}
            contentType="meetup"
          />
        ) : (
          <CreatorInfo {...meetup.owner} />
        )}
      </section>
    </main>
  );
};

export default page;
