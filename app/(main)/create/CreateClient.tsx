"use client";
import React, { useRef } from "react";
import PostField, { GroupType } from "./PostField";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Title from "@/app/components/modals/Create/Title";
import Image from "next/image";
import Editor from "@/app/components/Editor";
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
    revenue: number;
    revenueDuration: "mo" | "yr";
    sector: "string";
    website: "string";
  } | null;
}

const CreateClient = () => {
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
    mode: "onChange",
  });
  const formRef = useRef<HTMLFormElement | null>(null);
  const onSubmit: SubmitHandler<NewCreationFormType> = async (data, e) => {
    console.log("ddd");
  };
  return (
    <div className="rounded-md bg-dark-30 p-4 w-[95vw] m-auto max-w-[1300px] min-h-[89vh]">
      <FormProvider {...methods}>
        <form
          ref={formRef}
          onSubmit={methods.handleSubmit(onSubmit)}>
          {methods.getValues("coverImage") ? (
            <div className="w-full h-80 md1:max-h-[30vh] object-cover rounded-md overflow-hidden mb-4">
              <Image
                src={methods.getValues("coverImage")}
                alt="coverImage"
                className="w-full h-auto"
                width={1300}
                height={600}
              />
            </div>
          ) : null}
          <Title />

          <PostField />
          <Editor
            className="my-4 border-secondary-40 rounded-md text-white"
            placeholder={"Write something or insert a star ★"}
          />
          <div className="tags"></div>
          <div className="w-full flex gap-4">
            <button
              type="submit"
              className="bg-blue-default py-2.5 px-6 rounded-md sm:min-w-[140px] hover:bg-blue-80 cursor-pointer">
              Publish
            </button>
            <button className="text-secondary-30 py-2.5 px-6 rounded-md sm:min-w-[140px] hover:bg-dark-20 cursor-pointer">Cancel</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateClient;
