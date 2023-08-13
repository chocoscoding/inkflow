"use client";
import Avatar from "@/app/components/Avatar";
import Input from "@/app/components/inputs/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BackArrow, Upload } from "@/app/components/Icons";

const SecurityClient = () => {
  const methods = useForm<{}>({ defaultValues: {} });

  return (
    <section className="pl-5 w-full">
      <Link href={`/settings`}>
        <button className="p-4 mb-3 bg-dark-30 flex-center rounded-full">
          <BackArrow />
        </button>
      </Link>

      <FormProvider {...methods}>
        <h2 className="font-bold my-4 text-xl">Change password</h2>

        <div className="flex flex-wrap gap-3">
          <Input
            id="oldPass"
            label="Old Password"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <Input
            id="newPass"
            label="New Password"
          />
          <Input
            id="confirmNew"
            label="Confirm new password"
          />
        </div>

        <div className="flex justify-end gap-4 mr-3 items-center">
          <button className="bg-blue-default rounded-lg py-2.5 px-4 cursor-pointer">Change</button>
        </div>
      </FormProvider>
    </section>
  );
};

export default SecurityClient;
