"use client";
import { FormType } from "@/app/(authentication)/auth/signup/DataFields";
import { getFormattedDate } from "@/app/libs/helper";
import React, { useCallback, useState } from "react";
import { UseFormRegister, FieldValues, UseFormClearErrors } from "react-hook-form";

interface InputType {
  inputType?: string;
  id: keyof FormType;
  label: string;
  disabled?: boolean;
  required: any;
  register: UseFormRegister<FormType>;
  errors: FieldValues;
  placeholder?: string;
  condition?: {};
}
const Input: React.FC<InputType> = ({ inputType = "text", label, register, id, required, disabled, placeholder, errors, condition }) => {
  const [showPassword, setShowPassword] = useState(false);

  const type = useCallback(() => {
    if (inputType !== "password") return inputType;
    if (showPassword) return "text";
    return "password";
  }, [inputType, showPassword]);
  return (
    <div className="w-full flex flex-col gap-3 mb-4">
      <div className="w-full flex justify-between">
        <label
          htmlFor={label}
          className="dark:text-secondaryBg-20 text-dark-10">
          {label}
        </label>

        {inputType === "password" ? (
          <p
            className="dark:text-secondary-30 text-secondary-10"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "hide" : "show"}
          </p>
        ) : null}
      </div>

      <div>
        <input
          max={inputType === "date" ? getFormattedDate() : undefined}
          id={id}
          disabled={disabled}
          {...register(id, { ...required, ...condition })}
          type={type()}
          className={`w-full rounded-lg bg-secondary-60 dark:bg-dark-20 dark:text-secondaryBg-20 text-dark-10 h-[3rem] p-6 outline 
          ${errors[id] && "outline-1 dark:outline-red-dark-50 outline-red-dark-90"}
          ${errors[id] && "focus:outline-2 dark:outline-red-dark-50 outline-red-dark-90"}
          ${!errors[id] && "outline-0"}
          ${!errors[id] && "focus:outline-1 outline-secondaryBg-10"}
          `}
          placeholder={placeholder || `Enter your ${label}`}
        />
        {errors[id] ? (
          <label
            htmlFor={label}
            className=" text-red-600">
            {errors[id].message || "Required"}
          </label>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
