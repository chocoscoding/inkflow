"use client";
import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

const Title: FC<{ id: "title" | "name"; placeholder?: string }> = ({ id, placeholder }) => {
  const { register, formState } = useFormContext<{ title: string; name: string }>();
  const { errors, dirtyFields } = formState;
  return (
    <div className="flex flex-col gap-2 mb-4">
      <input
        {...register(id, {
          required: true,
          pattern: {
            value: /^(?!\s*$).+/,
            message: "Title name should contain only normal characters.",
          },
        })}
        id={id}
        type="text"
        className={` h-12 rounded-lg w-full bg-dark-40 text-secondary-30 text-lg font-semibold p-2
          outline outline-0 
          focus:outline-2
          focus:outline-secondary-20
        ${errors[id] && "outline-1 dark:outline-red-dark-50 outline-red-dark-90"}
          ${errors[id] && "focus:outline-2 dark:outline-red-dark-50 outline-red-dark-90"}
        `}
        placeholder={placeholder || id}
      />

      {errors[id] ? (
        <label
          htmlFor={id}
          className=" text-red-600">
          {errors[id]?.message || "Required"}
        </label>
      ) : null}
    </div>
  );
};

export default Title;
