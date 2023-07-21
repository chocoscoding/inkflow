"use client";
import { NewCreationFormType } from "@/app/(main)/create/CreateClient";
import React from "react";
import { useFormContext } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";

const Tags = () => {
  const { register, formState, setValue, setError, watch } = useFormContext<NewCreationFormType>();
  const { errors, dirtyFields } = formState;
  const id = "tags";

  const setTags = (tags: string[]) => {
    console.log(tags);

    if (tags.length <= 4) {
      setValue("tags", tags);
    }
  };
  const TagInputStyle = `
  rounded-lg w-full bg-red-80 text-secondary-30 font-semibold
    outline outline-1
    focus:outline-2
    focus:outline-secondary-20
    ${errors[id] && "outline-1 dark:outline-red-dark-50 outline-red-dark-90"}
    ${errors[id] && "focus:outline-2 dark:outline-red-dark-50 outline-red-dark-90"}
  `;
  return (
    <div className="flex flex-col gap-3 mb-4">
      <TagsInput
        {...register("tags")}
        value={watch("tags")}
        onChange={setTags}
        classNames={{ tag: TagInputStyle, input: TagInputStyle }}
        name="fruits"
        placeHolder="enter fruits"
      />

      {errors[id] ? (
        <label
          htmlFor={id}
          className=" text-red-600">
          {errors[id].message || "Required"}
        </label>
      ) : null}
    </div>
  );
};

export default Tags;
