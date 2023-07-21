import { NewCreationFormType } from "@/app/(main)/create/CreateClient";
import React from "react";
import { useFormContext } from "react-hook-form";

const Tags = () => {
  const { register, formState } = useFormContext<NewCreationFormType>();
  const { errors, dirtyFields } = formState;
  const id = "tags";
  return (
    <div className="flex flex-col gap-3 mb-4">
      <input
        {...register(id, {
          required: true,
          pattern: {
            value: /^(?!\s*$).+/,
            message: "Title name should contain only characters.",
          },
        })}
        id={id}
        type="text"
        className={` h-14 rounded-lg w-full text-secondary-30 text-xl font-semibold p-3
          outline outline-1
          focus:outline-2
          focus:outline-secondary-20
          ${errors[id] && "outline-1 dark:outline-red-dark-50 outline-red-dark-90"}
          ${errors[id] && "focus:outline-2 dark:outline-red-dark-50 outline-red-dark-90"}
        `}
        placeholder="Title..."
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
