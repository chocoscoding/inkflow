"use client";
import Checkbox from "@/app/components/Checkbox";
import { Arrow1, FacebookOutline, InstagramOutline, Message, TwitterOutline, Web } from "@/app/components/Icons";
import React, { FC } from "react";
import Profile from "./Main";
import Image from "next/image";
import Avatar from "@/app/components/Avatar";
import { ProfileClientType } from "@/app/types/client";
import { CreateAMeetup } from "./CreateAMeetup";

const ProfileClient: FC<ProfileClientType> = (props) => {
  return (
    <>
      <section className="w-full flex flex-col gap-2 lg2:order-3 md1:mb-[50px]">
        <Profile {...props} />
      </section>
      <CreateAMeetup />
    </>
  );
};

export default ProfileClient;
