import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputType {
  inputType?: string;
  id: string;
  label: string;
  disabled?: boolean;
  required: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldValues;
  placeholder?: string;
  condition?: {}
}
const Input: React.FC<InputType> = ({ inputType = "text", label, register, id, required, disabled, placeholder, errors, condition }) => {
  return (
    <div className="w-full flex flex-col gap-3 mb-4">
      <label
        htmlFor={label}
        className="dark:text-secondaryBg-20 text-secondary-20">
        {label}
      </label>

      <div>
        {errors[id] ? (
          <label
            htmlFor={label}
            className=" text-red-600">
            {errors[id]}
          </label>
        ) : null}

        <input
          id={id}
          disabled={disabled}
          {...register(id, { required, ...condition })}
          type={inputType}
          className={`w-full rounded-lg bg-secondaryBg-60 dark:bg-dark-20 text-secondaryBg-30 h-[3rem] p-6
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
          `}
          placeholder={placeholder || `Enter your ${label}`}
        />
      </div>
    </div>
  );
};

export default Input;
