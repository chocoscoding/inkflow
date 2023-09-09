"use client";
import Avatar from "@/app/components/Avatar";
import { BackArrow, Upload } from "@/app/components/Icons";
import Input from "@/app/components/inputs/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
const ProfileClient = () => {
  const methods = useForm<{}>({ defaultValues: {} });

  return (
    <section className="pl-5 w-full">
      <Link href={`/settings`}>
        <button className="p-4 mb-3 bg-dark-30 flex-center rounded-full">
          <BackArrow />
        </button>
      </Link>
      <FormProvider {...methods}>
        <div className="pointer w-30 h-30 rounded-full relative hover:opacity-80 cursor-pointer inline-block">
          <Avatar
            size={152}
            className="rounded-full flex-shrink-0 h-fit outline outline-4 outline-dark-30"
          />
          <div className="rounded-full p-3 flex-center bg-dark-30 absolute bottom-0 right-0">
            <Upload />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Input
            id="username"
            label="Username"
          />
          <Input
            id="dob"
            label="Date of birth"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <Input
            id="occupation"
            label="Occupation"
          />
        </div>

        <h2 className="font-bold my-4 text-xl">Social Link</h2>
        <div className="flex flex-wrap gap-3">
          <Input
            id="website"
            label="website"
          />
          <Input
            id="instagram"
            label="Username"
          />
          <Input
            id="x"
            label="X"
          />
          <Input
            id="linkedin"
            label="Username"
          />
        </div>

        <div className="flex justify-end gap-4 mr-3 items-center">
          <button className="bg-blue-default rounded-lg py-2.5 px-4 cursor-pointer">Submit</button>
        </div>
      </FormProvider>
    </section>
  );
};

export default ProfileClient;
