"use client";
import Input from "@/app/components/inputs/Input";
import Image from "next/image";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const InfoClient = () => {
  const methods = useForm<{}>({ defaultValues: {} });

  return (
    <div className="rounded-lg ">
      <div className="w-full">
        <div className="flex justify-between mb-4 flex-wrap bg-dark-40 py-2 px-2 rounded-lg items-center max-w-[600px]">
          <FormProvider {...methods}>
            <form
              action=""
              className="w-full">
              <div className="w-full h-60 md1:max-h-[30vh] object-contain rounded-md overflow-hidden mb-4 relative">
                <Image
                  src={"/images/placeholder.jpg"}
                  alt="coverImage"
                  className="h-auto w-full"
                  width={1000}
                  height={200}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000032] opacity-0 hover:opacity-100 flex-center cursor-pointer z-10 text-white text-lg">
                  Click to upload another image
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Input
                  id="groupName"
                  label="Group Name"
                  className="w-full"
                />
              </div>

              <div className="flex justify-end gap-4 mr-3 items-center">
                <button className="bg-blue-default rounded-lg py-2.5 px-4 cursor-pointer">Change</button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default InfoClient;
