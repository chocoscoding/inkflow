"use client";
import { NewCreationFormType } from "@/app/(main)/create/CreateClient";
import React, { ChangeEvent, FC, TextareaHTMLAttributes, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";

interface TextAreaPropsType {
  id: string;
  label: string;
  className?: string;
  maxLength?: number;
}
const TextArea: FC<TextAreaPropsType> = ({ id, label, className, maxLength }) => {
  const { register, formState } = useFormContext<any>();
  const { errors, dirtyFields } = formState;

  return (
    <div className={`flex flex-col gap-2 mb-4 w-[49%] ${className ? className : `md3:w-full min-w-[280px] max-w-[700px]`}`}>
      <label
        htmlFor="label"
        className="font-medium text-lg">
        {label}
      </label>
      <textarea
        {...register(id, {
          required: true,
          ...(maxLength ? { maxLength: { value: maxLength, message: id + " is too long" } } : {}),
        })}
        id={id}
        className={` resize-none overflow-y-auto max-h-32 h-32 rounded-lg w-full bg-transparent text-secondary-30 p-2
          outline outline-1 
          outline-secondary-20
          focus:outline-2
          focus:outline-secondary-30
        ${errors[id] && "outline-1 dark:outline-red-dark-50 outline-red-dark-90"}
          ${errors[id] && "focus:outline-2 dark:outline-red-dark-50 outline-red-dark-90"}
        `}
        placeholder={label}
      />

      {errors[id] ? (
        <label
          htmlFor={id}
          className=" text-red-600">
          {`${errors[id]?.message || "Required"}`}
        </label>
      ) : null}
    </div>
  );
};

export default TextArea;
