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
import { useRouter } from "next/navigation";
import { CreateClientType, EditClientType, NewCreationFormType } from "@/app/types/client";
import toast from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
/*(@chocoscoding) */

const EditClient: FC<EditClientType> = ({ guf, data, contentType }) => {
  const { title, body, coverImage, tags, userId, id, group, revenue, businessType, platform, date, time } = data;
  const passedInterviewInfo = () => {
    if (businessType || platform || revenue) {
      return {
        businessType: businessType,
        platform: platform,
        revenue: revenue,
      };
    }
    return null;
  };
  const passedMeetupInfo = () => {
    if (date || time) {
      return {
        date: date! as Date,
        time: time!,
      };
    }
    return null;
  };
  const methods = useForm<NewCreationFormType>({
    defaultValues: {
      title,
      content: body,
      tags,
      group,
      coverImage: coverImage!,
      creationType: contentType,
      interviewInfo: passedInterviewInfo(),
      meetupInfo: passedMeetupInfo(),
    },
  });
  const { back, refresh } = useRouter();
  const {
    handleSubmit,
    register,
    getValues,
    trigger,
    formState: { errors },
    watch,
    setError,
  } = methods;
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const newContentType = contentType.toLocaleLowerCase();

  const isValid = (e: any) => {
    if (getValues("content").length < 1) return setError("content", { message: "Post content can't be empty" });
  };
  const onSubmit: SubmitHandler<NewCreationFormType> = async (data, e) => {
    e?.preventDefault();

    await trigger();
    if (getValues("content").length < 1) return setError("content", { message: "Post content can't be empty" });
    if (Array(errors).length > 1) return;
    const { creationType, coverImage, title, group, interviewInfo, tags, content, meetupInfo } = data;
    setIsLoading(true);
    const loadingToast = toast.loading(`Updating ${contentType}...`);
    if (creationType === "Post") {
      try {
        const createContent = await axios.post(`/api/${newContentType}/${id}/edit`, {
          tags,
          coverImage,
          title,
          body: content,
          groupId: group?.id,
        });
        toast.remove(loadingToast);
        if (createContent.status === 200) {
          refresh();
          toast.success(`${contentType} updated successfully 🎊`);
          // push(`/post/${title}`);
        } else {
          throw new Error(`Something went wrong`);
        }
      } catch (e: any) {
        toast.remove();
        if (e.message.includes("400")) {
          toast.error("Title is already in use 💔");
          return;
        }
        if (e.message.includes("403")) {
          toast.error("User not authenticated 🔒");
          return;
        }
        toast.error("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
    if (creationType === "Meetup") {
      try {
        const createContent = await axios.post(`/api/${newContentType}/${id}/edit`, {
          date: meetupInfo?.date,
          time: meetupInfo?.time,
          coverImage,
          title,
          tags,
          body: content,
          groupId: group?.id,
        });
        toast.remove(loadingToast);
        if (createContent.status === 200) {
          refresh();
          toast.success(`${contentType} updated successfully 🎊`);
          // push(`/meetups/${title}`);
        } else {
          throw new Error(`Something went wrong`);
        }
      } catch (e: any) {
        toast.remove();
        if (e.message.includes("400")) {
          toast.error("Title is already in use 💔");
          return;
        }
        if (e.message.includes("403")) {
          toast.error("User not authenticated 🔒");
          return;
        }
        toast.error("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
    if (creationType === "Interview") {
      try {
        const createContent = await axios.post(`/api/${newContentType}/${id}/edit`, {
          businessType: interviewInfo?.businessType,
          platform: interviewInfo?.platform,
          revenue: interviewInfo?.revenue,
          coverImage,
          title,
          tags,
          body: content,
          groupId: group?.id,
        });
        toast.remove(loadingToast);
        if (createContent.status === 200) {
          toast.success(`${contentType} updated successfully 🎊`);
          // push(`/interviews/${title}`);
        } else {
          throw new Error(`Something went wrong`);
        }
      } catch (e: any) {
        toast.remove();
        if (e.message.includes("400")) {
          refresh();
          toast.error("Title is already in use 💔");
          return;
        }
        if (e.message.includes("403")) {
          toast.error("User not authenticated 🔒");
          return;
        }
        toast.error("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
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
                  src={getValues("coverImage") || ""}
                  alt="coverImage"
                  className="w-full h-auto"
                  width={1300}
                  height={600}
                />
              </div>
            ) : null}
            <Title id="title" />

            <PostField
              guf={guf}
              editing
            />

            {watch("creationType") === "Interview" ? <InterviewOptions /> : null}
            {watch("creationType") === "Meetup" ? <MeetupOptions oldDate={date?.toString()} /> : null}
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
              Update
            </button>
            <Link href={`/${newContentType}${newContentType !== "post" && "s"}/${title}`}>
              <button
                className="text-secondary-30 py-2.5 px-6 rounded-md sm:min-w-[140px] hover:bg-dark-20 cursor-pointer"
                type="button">
                {`Go back to ${newContentType}`}
              </button>
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default EditClient;
