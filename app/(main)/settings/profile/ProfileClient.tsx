"use client";
import Avatar from "@/app/components/Avatar";
import { BackArrow, Upload } from "@/app/components/Icons";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import UsernameInput from "@/app/components/inputs/UsernameInput";
import { ProfileMiniType, ProfileMiniTypeForm } from "@/app/types/client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
const ProfileClient: FC<{ profileData: ProfileMiniType }> = ({ profileData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = profileData;
  const { refresh } = useRouter();
  const methods = useForm<ProfileMiniTypeForm>({
    defaultValues: {
      bio: profileData.bio,
      image: profileData.image,
      username: profileData.username,
      occupation: profileData.occupation,
      website: profileData.socailLink?.website,
      instagram: profileData.socailLink?.instagram,
      x: profileData.socailLink?.x,
      linkedin: profileData.socailLink?.linkedin,
    },
  });
  const { formState, getValues, setValue, handleSubmit, watch, reset } = methods;
  const { errors, defaultValues } = formState;
  const setCustomValue = (value: any) => {
    setValue("image", value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const shouldChangeUsername = () => {
    const defaultUsername = defaultValues?.username;
    const currentUsername = watch("username");
    //if the value is the same as the default
    if (defaultUsername === currentUsername) return {};
    //if there is an error
    if (errors["username"]) return {};
    return { username: currentUsername };
  };

  const submit: SubmitHandler<ProfileMiniTypeForm> = async (data, e) => {
    e?.preventDefault();
    setIsLoading(true);
    try {
      const { bio, image, username, occupation, website, instagram, linkedin, x } = data;
      const loadingToast = toast.loading("Updating info");
      const changeInfoApi = await axios.post(`/api/user/${id}/settings/userInfo`, {
        bio,
        image,
        occupation,
        socailLink: {
          website,
          x,
          instagram,
          linkedin,
        },
        ...shouldChangeUsername(),
      });
      toast.remove(loadingToast);
      if (changeInfoApi.status === 200) {
        toast.success("Info updated successfully 🎊");
        refresh();
      } else {
        throw new Error(`Something went wrong`);
      }
    } catch (e: any) {
      console.log(e);
      toast.remove();
      if (e.message.includes("400")) {
        toast.error("User not authenticated 🔒");
        return;
      }
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pl-5 w-full">
      <Link href={`/settings`}>
        <button className="p-4 mb-3 bg-dark-30 flex-center rounded-full">
          <BackArrow />
        </button>
      </Link>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="pointer w-30 h-30 rounded-full relative cursor-pointer inline-block">
            <div className="rounded-full flex-shrink-0 h-[180px] w-[180px] outline outline-4 outline-dark-30 overflow-hidden">
              <Avatar
                className="h-full w-auto aspect-square"
                src={getValues("image")}
                size={152}
              />
            </div>
            <div className="rounded-full p-3 flex-center bg-dark-30 absolute bottom-0 right-0">
              <div className="relative w-full h-full overflow-hidden">
                <div className="absolute opacity-0">
                  <ImageUpload
                    onChange={(value) => setCustomValue(value)}
                    value={getValues("image") || ""}
                  />
                </div>
                <Upload />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <UsernameInput
              id="username"
              label="Username"
              placeholder="Username"
            />
            <Input
              id="occupation"
              label="Occupation"
              placeholder="Occupation"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <TextArea
              id="bio"
              label="Bio"
              maxLength={250}
            />
          </div>
          <h2 className="font-bold my-4 text-xl">Social Link</h2>
          <div className="flex flex-wrap gap-3">
            <Input
              regexMatch={{
                pattern: {
                  value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                  message: "Use a valid link",
                },
              }}
              id="website"
              label="Website"
              placeholder="Website url"
              notRequired
            />
            <Input
              regexMatch={{
                pattern: {
                  value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                  message: "Use a valid link",
                },
              }}
              id="instagram"
              label="Instagram"
              placeholder="Instagram profile url"
              notRequired
            />
            <Input
              regexMatch={{
                pattern: {
                  value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                  message: "Use a valid link",
                },
              }}
              id="x"
              label="X"
              placeholder="X profile url"
              notRequired
            />
            <Input
              regexMatch={{
                pattern: {
                  value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                  message: "Use a valid link",
                },
              }}
              id="linkedin"
              label="LinkedIn"
              placeholder="LinkedIn profile url"
              notRequired
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
    </section>
  );
};

export default ProfileClient;
