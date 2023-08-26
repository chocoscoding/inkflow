"use client";
import React, { FC, useEffect, useRef } from "react";
import PostField, { GroupType } from "./PostField";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Title from "@/app/components/inputs/Title";
import Image from "next/image";
import Editor from "@/app/components/Editor";
import Tags from "@/app/components/inputs/Tags";
import InterviewOptions from "@/app/components/inputs/InterviewOptions";
import MeetupOptions from "@/app/components/inputs/MeetupOptions";
import { useRouter } from "next/navigation";
import { CreateClientType } from "@/app/types/client";
/*(@chocoscoding) */
export type NewCreationTypes = "Post" | "Interview" | "Meetup";
export interface NewCreationFormType {
  title: string;
  content: string;
  tags: string[];
  group: GroupType | null;
  coverImage: string;
  creationType: NewCreationTypes;
  interviewInfo: {
    revenue: string;
    businessType: string;
    platform: string;
  } | null;
  meetupInfo: {
    location: string;
    date: Date;
    time: string;
  } | null;
}

const EditClient: FC<CreateClientType> = ({ guf }) => {
  const methods = useForm<NewCreationFormType>({
    defaultValues: {
      title: "",
      content: "",
      tags: [],
      group: null,
      coverImage: "",
      creationType: "Post",
      interviewInfo: null,
    },
  });
  const { back } = useRouter();
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
    watch,
    setError,
  } = methods;
  const formRef = useRef<HTMLFormElement | null>(null);

  const isValid = (e: any) => {
    if (getValues("content").length < 1) return setError("content", { message: "Post content can't be empty" });
  };
  const onSubmit: SubmitHandler<NewCreationFormType> = async (data, e) => {
    e?.preventDefault();
    console.log(methods.formState.isValid);
  };

  return (
    <div className="rounded-md bg-secondaryBg-10 dark:bg-dark-30 p-4 w-[95vw] m-auto max-w-[1300px] min-h-[89vh] mt-2 md1:mt-4 mb-20">
      <FormProvider {...methods}>
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
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
            <Title />

            <PostField guf={guf}/>

            {watch("creationType") === "Interview" ? <InterviewOptions /> : null}
            {watch("creationType") === "Meetup" ? <MeetupOptions /> : null}
            <div>
              <Editor
                className={`my-4 dark:border-[#ccc] rounded-md text-gray-800 dark:text-white lg:text-xl text-lg
                ${errors["content"] && "border-1 dark:border-red-dark-50 border-red-dark-90"}
                ${errors["content"] && "focus:border-2 dark:border-red-dark-50 outline-red-dark-90"}
                ${errors["content"] && "mt-4 mb-1.5"}
                `}
                placeholder={"Write something here..."}
              />
              {methods.formState.errors["content"] ? (
                <p className=" text-red-600 mb-2 mt-1">{methods.formState.errors["content"].message || "Required"}</p>
              ) : null}
            </div>
            <div className="tags">
              <Tags />
            </div>
          </section>
          <div className="w-full flex gap-4">
            <button
              onClick={isValid}
              type="submit"
              className="bg-blue-default py-2.5 px-6 rounded-md sm:min-w-[140px] hover:bg-blue-80 cursor-pointer">
              Publish
            </button>
            <button
              className="text-secondary-30 py-2.5 px-6 rounded-md sm:min-w-[140px] hover:bg-dark-20 cursor-pointer"
              onClick={back}
              type="button">
              Cancel
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default EditClient;
