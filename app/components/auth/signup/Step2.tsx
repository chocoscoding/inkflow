import React, { Dispatch, SetStateAction, useCallback } from "react";
import Input from "../Input";
import Select from "../Select";
import { UseFormRegister, FieldValues, UseFormTrigger, useFormContext } from "react-hook-form";
import { getFormattedDate, validateNotEmpty } from "@/app/libs/helper";
import { FormType } from "@/app/(authentication)/auth/signup/DataFields";
import { ArrowDown, BackArrow } from "../../Icons";
import useSignupSteps from "@/app/hooks/useSignupSteps";

const Step2 = () => {
  const {
    register,
    formState: { errors, dirtyFields },
    trigger,
    watch,
  } = useFormContext<FormType>();
  const { one, two } = useSignupSteps();

  const password = React.useRef({});
  password.current = watch("password", "");
  const isComplete = useCallback(() => {
    //get if the values have been inputed
    const { email, password, confirmPassword } = dirtyFields;
    return email && password && confirmPassword;
  }, [dirtyFields]);
  const isValid = () => {
    const keysToCheck: any[] = ["email", "password", "confirmPassword"];
    trigger(keysToCheck);
    const containsError = keysToCheck.some((key) => Object.keys(errors).includes(key));
    if (containsError) return;
    two();
  };

  return (
    <>
      <div
        className={`w-[50px] h-[50px] rounded-full cursor-pointer bg-dark-40 flex justify-center items-center mt-10 mb-6`}
        onClick={() => one()}>
        <BackArrow className="text-secondary-40 scale-125" />
      </div>
      <Input
        id="email"
        label="Email"
        inputType="email"
        register={register}
        errors={errors}
        placeholder="example@email.com"
        required={{
          required: "What's your email?",
          validate: (value: string) => validateNotEmpty(value, "What's your email"),
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
      />
      <Input
        id="password"
        label="Password"
        inputType="password"
        register={register}
        errors={errors}
        required={{
          required: "Password required?",
          minLength: {
            message: "Please pick password longer than 8 characters",
            value: 8,
          },
          validate: (value: string) => validateNotEmpty(value, "Password required"),
        }}
      />

      <Input
        id="confirmPassword"
        label="Confirm Password"
        register={register}
        inputType="password"
        placeholder="Confirm your password"
        errors={errors}
        required={{
          required: "Password required",
          validate: {
            notEmpty: (value: string) => validateNotEmpty(value, "This field is required"),
            matchPassword: (value: string) => value === password.current || "The passwords do not match",
          },
        }}
      />

      <button
        type="button"
        className={`w-full h-[50px]  ${isComplete() ? "bg-red-80" : "bg-red-60"} rounded-lg cursor-pointer`}
        onClick={isValid}>
        SUBMIT
      </button>
    </>
  );
};

export default Step2;
