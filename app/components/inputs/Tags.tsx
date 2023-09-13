"use client";
import { NewCreationFormType } from "@/app/(main)/create/CreateClient";
import React, { memo } from "react";
import { useFormContext } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";

const Tags = () => {
  const { register, formState, setValue, getValues, watch } = useFormContext<NewCreationFormType>();
  const { errors } = formState;
  const id = "tags";
  const tags = React.useRef<string[]>([]);
  tags.current = watch("tags");

  return (
    <div className="flex flex-col gap-3 mb-1">
      <TagsInput
        {...register("tags")}
        value={tags.current}
        beforeAddValidate={(tag: string, existingTags: string[]) => existingTags.length < 4}
        onChange={(tags) => setValue("tags", tags)}
        classNames={{ tag: "!bg-dark-40", input: `bg-transparent ${getValues("tags").length !== 4 ? "" : "!w-0"}` }}
        name="fruits"
        placeHolder={getValues("tags").length !== 4 ? "Enter a 4 tags max" : undefined}
      />
      <p className="flex relative top-[-10px] justify-end">{`${tags.current.length}/4`}</p>
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

export default memo(Tags);
