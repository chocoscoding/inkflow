"use client";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Input from "@/app/components/inputs/Input";
import { GroupInfoType } from "@/app/types/client";
import axios from "axios";
import Image from "next/image";
import React, { FC, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
interface InfoClientType {
  name: string;
  coverImage: string | null;
  admin: string[];
}
interface InfoClientFormType {
  coverImage: string | null;
  groupName: string;
}
const InfoClient: FC<InfoClientType> = ({ name, coverImage, admin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { refresh } = useRouter();
  const methods = useForm<InfoClientFormType>({
    defaultValues: {
      coverImage,
      groupName: name,
    },
  });
  const { formState, getValues, setValue, handleSubmit } = methods;
  const setCustomValue = (value: any) => {
    setValue("coverImage", value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const submit: SubmitHandler<InfoClientFormType> = async (data, e) => {
    e?.preventDefault();
    setIsLoading(false);
    try {
      const { coverImage, groupName } = data;
      const loadingToast = toast.loading("Changing group info");
      const changeInfoApi = await axios.post(`/api/group/${params?.id}/manage/Info`, { name: groupName, coverImage });
      toast.remove(loadingToast);
      if (changeInfoApi.status === 200) {
        toast.success("Group info updated successfully 🎊");
        refresh();
      } else {
        throw new Error(`Something went wrong`);
      }
    } catch (e: any) {
      toast.remove();
      if (e.message.includes("400")) {
        toast.error("User not authenticated");
        return;
      }
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="rounded-lg ">
      <div className="w-full">
        <div className="flex justify-between mb-4 flex-wrap bg-dark-40 py-2 px-2 rounded-lg items-center max-w-[500px]">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(submit)}
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
                  type="submit"
                  disabled={!formState.isDirty || isLoading}
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
