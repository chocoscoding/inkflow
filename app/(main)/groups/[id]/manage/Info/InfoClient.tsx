"use client";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Input from "@/app/components/inputs/Input";
import { GroupInfoType } from "@/app/types/client";
import Image from "next/image";
import React, { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
interface InfoClientType {
  name: string;
  coverImage: string | null;
  admin: string[];
}
const InfoClient: FC<InfoClientType> = ({ name, coverImage, admin }) => {
  const methods = useForm<{
    coverImage: string | null;
    groupName: string;
  }>({
    defaultValues: {
      coverImage,
      groupName: name,
    },
  });

  const { formState, getValues, setValue } = methods;
  const [openImageUpload, setOpenImageUpload] = useState(false);
  const setCustomValue = (value: any) => {
    setValue("coverImage", value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  return (
    <div className="rounded-lg ">
      <div className="w-full">
        <div className="flex justify-between mb-4 flex-wrap bg-dark-40 py-2 px-2 rounded-lg items-center max-w-[500px]">
          <FormProvider {...methods}>
            <form
              action=""
              className="w-full">
              <div className="w-full h-60 md1:max-h-[30vh] object-contain rounded-md overflow-hidden mb-4 relative">
                <ImageUpload
                  onChange={(value) => setCustomValue(value)}
                  value={getValues("coverImage") || ""}
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <Input
                  id="groupName"
                  label="Group Name"
                  className="w-full"
                />
              </div>

              <div className="flex justify-end gap-4 mr-3 items-center">
                <button
                  disabled={!formState.isDirty}
                  className="bg-blue-default disabled:bg-blue-30 disabled:cursor-not-allowed rounded-lg py-2.5 px-4 cursor-pointer">
                  Change
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default InfoClient;
