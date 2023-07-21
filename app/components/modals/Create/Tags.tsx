"use client";
import { NewCreationFormType } from "@/app/(main)/create/CreateClient";
import React, {memo} from "react";
import { useFormContext } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";

const Tags = () => {
  const { register, formState, setValue, setError, watch } = useFormContext<NewCreationFormType>();
  const { errors } = formState;
  const id = "tags";
  const tags = React.useRef<string[]>([]);
  tags.current = watch("tags");
  const setTags = (newTags: string[]) => {
    if (tags.current.length > 4) {
      return setValue("tags", newTags.slice(0, 4));
    }
    return;
  };
  return (
    <div className="flex flex-col gap-3 mb-4">
      <TagsInput
        {...register("tags")}
        value={tags.current}
        beforeAddValidate={(tag: string, existingTags: string[]) => existingTags.length < 4}
        onChange={(tags) => setTags(tags)}
        classNames={{ tag: "!bg-dark-40", input: "bg-transparent" }}
        name="fruits"
        placeHolder="Enter a 4 tags max"
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

export default memo(Tags);
