"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import PostField, { GroupType } from "./PostField";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Title from "@/app/components/inputs/Title";
import Image from "next/image";
import Editor from "@/app/components/Editor";
import Tags from "@/app/components/inputs/Tags";
import InterviewOptions from "@/app/components/inputs/InterviewOptions";
import MeetupOptions from "@/app/components/inputs/MeetupOptions";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { CreateClientType, GroupCreationFormType } from "@/app/types/client";
import Link from "next/link";
import UploadCoverPhoto from "./UploadCoverPhoto";
/*(@chocoscoding) */

export type NewCreationTypes = "Post" | "Interview" | "Meetup";

const CreateClient: FC<CreateClientType> = ({ guf }) => {
  const { push } = useRouter();
  const methods = useForm<GroupCreationFormType>({
    defaultValues: {
      name: "",
      about: "",
      coverImage: "",
    },
    mode: "onSubmit",
  });
  const {
    handleSubmit,
    register,
    getValues,
    trigger,
    reset,
    formState: { errors },
    watch,
    setError,
  } = methods;
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const handleSubmit = (event: any) => {
      event.preventDefault();
      event.stopPropagation();
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  const onSubmit: SubmitHandler<GroupCreationFormType> = async (data, e) => {
    e?.preventDefault();

    await trigger();
    if (Array(errors).length > 1) return;
    const { name, about, coverImage } = data;
    try {
      toast.remove();
      setIsLoading(true);
      const loadingToast = toast.loading("Creating group");
      const createGroup = await axios.post(`/api/groups/create`, { name: name, about: about, coverImage });
      toast.remove(loadingToast);
      if (createGroup.status === 200) {
        push("/groups/" + createGroup.data.id);
        reset();
        toast.success("Group created successfully");
        return;
      }
      throw new Error(`Something went wrong`);
    } catch (e: any) {
      toast.remove();
      if (e.message.includes("400")) {
        toast.error("Group name is already in use 💔");
        return;
      }
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-md bg-secondaryBg-10 dark:bg-dark-30 p-4 w-[95vw] m-auto max-w-[1300px] min-h-[89vh] mt-2 md1:mt-4 mb-20">
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          ref={formRef}
          className="flex flex-col justify-between">
          <section>
            {getValues("coverImage") ? (
              <div className="w-full h-80 md1:max-h-[30vh] object-cover rounded-md overflow-hidden mb-4">
                <Image
                  src={getValues("coverImage")}
                  alt="coverImage"
                  className="w-full h-auto"
                  width={1300}
                  height={600}
                />
              </div>
            ) : null}
            <Title
              key={"ww"}
              id="name"
              placeholder={`Group name`}
            />
            <UploadCoverPhoto />
            <div>
              <textarea
                placeholder="Tell us what your group is about"
                {...register("about", {
                  required: true,
                })}
                className={` rounded-lg w-full bg-dark-40 text-secondary-30 text-lg font-semibold p-2
                  outline outline-0 
                  h-32 resize-none
                  mb-3
                  focus:outline-2
                  focus:outline-secondary-20
                ${errors["about"] && "outline-1 dark:outline-red-dark-50 outline-red-dark-90"}
                  ${errors["about"] && "focus:outline-2 dark:outline-red-dark-50 outline-red-dark-90"}
                `}
                maxLength={1000}
              />
              {errors["about"] ? <p className=" text-red-600 mb-2 mt-1">{errors["about"].message || "Required"}</p> : null}
            </div>
          </section>
          <div className="w-full flex gap-4">
            <button
              onClick={handleSubmit(onSubmit)}
              disabled={isLoading}
              type="submit"
              className={`bg-blue-default py-2.5 px-6 rounded-md sm:min-w-[140px] cursor-pointer disabled:bg-blue-40`}>
              Create
            </button>

            <Link href={`/groups`}>
              <button
                className={`text-secondary-30 py-2.5 px-6 rounded-md sm:min-w-[140px] hover:bg-dark-20 cursor-pointer`}
                disabled={isLoading}>
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateClient;
