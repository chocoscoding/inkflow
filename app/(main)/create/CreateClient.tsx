"use client";
import React, { useEffect, useRef } from "react";
import PostField, { GroupType } from "./PostField";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Title from "@/app/components/modals/Create/Title";
import Image from "next/image";
import Editor from "@/app/components/Editor";
import Tags from "@/app/components/modals/Create/Tags";
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
    if (getValues("content").length < 1) return setError("content", { message: "Post can't be empty" });
  };
  const onSubmit: SubmitHandler<NewCreationFormType> = async (data, e) => {
    e?.preventDefault();
    console.log(methods.formState.isValid);
  };

  return (
    <div className="rounded-md bg-secondaryBg-10 dark:bg-dark-30 p-4 w-[95vw] m-auto max-w-[1300px] min-h-[89vh]">
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

            <PostField />
            <div>
              <Editor
                className={`my-4 dark:border-secondary-40 border-gray-500 rounded-md text-gray-800 dark:text-white lg:text-xl text-lg
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
            <button className="text-secondary-30 py-2.5 px-6 rounded-md sm:min-w-[140px] hover:bg-dark-20 cursor-pointer">Cancel</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateClient;
