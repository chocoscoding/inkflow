"use client";
import { NewCreationFormType } from "@/app/(main)/create/CreateClient";
import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

interface InputPropsType {
  id: string;
  label: string;
  className?: string;
}
const Input: FC<InputPropsType> = ({ id, label, className }) => {
  const { register, formState } = useFormContext<any>();
  const { errors, dirtyFields } = formState;
  return (
    <div className={`flex flex-col gap-2 mb-4 w-[49%] ${className ? className : `md3:w-full min-w-[280px] max-w-[700px]`}`}>
      <label
        htmlFor="Title"
        className="font-medium text-lg">
        {label}
      </label>
      <input
        {...register(id, {
          required: true,
        })}
        id={id}
        type="text"
        className={` h-11 rounded-lg w-full bg-transparent text-secondary-30 p-2
          outline outline-1 
          outline-secondary-20
          focus:outline-2
          focus:outline-secondary-30
        ${errors[id] && "outline-1 dark:outline-red-dark-50 outline-red-dark-90"}
          ${errors[id] && "focus:outline-2 dark:outline-red-dark-50 outline-red-dark-90"}
        `}
        placeholder="Input..."
      />

      {errors[id] ? (
        <label
          htmlFor={id}
          className=" text-red-600">
          {/* {errors[id].message || "Required"} */}
        </label>
      ) : null}
    </div>
  );
};

export default Input;
