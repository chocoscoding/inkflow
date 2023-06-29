import React, { MutableRefObject, useCallback } from "react";
import Input from "../Input";
import { useFormContext } from "react-hook-form";
import { validateNotEmpty } from "@/app/libs/helper";
import { FormType } from "@/app/(authentication)/auth/signup/DataFields";
import { BackArrow } from "../../Icons";
import useSignupSteps from "@/app/hooks/useSignupSteps";
interface Step2Type {
  formRef: MutableRefObject<HTMLFormElement | null>;
  isLoading: boolean;
}
const Step2: React.FC<Step2Type> = ({ formRef, isLoading }) => {
  const {
    register,
    formState: { errors, dirtyFields },
    trigger,
    watch,
  } = useFormContext<FormType>();
  const { one } = useSignupSteps();
  const password = React.useRef({});
  password.current = watch("password", "");

  const isComplete = useCallback(() => {
    //get if the values have been inputed
    const { email, password, confirmPassword } = dirtyFields;
    return email && password && confirmPassword;
  }, [dirtyFields]);
  const isValid = (e: any) => {
    const keysToCheck: any[] = ["email", "password", "confirmPassword"];
    trigger(keysToCheck);
    const containsError = keysToCheck.some((key) => Object.keys(errors).includes(key));
    if (containsError) return e.preventDefault();
    return;
  };

  return (
    <>
      <div
        className={`w-[50px] h-[50px] rounded-full cursor-pointer dark:bg-dark-40 bg-secondary-60 flex justify-center items-center sm:mt-10 mt-8 mb-6`}
        onClick={() => one()}>
        <BackArrow className="text-secondary-40 scale-125" />
      </div>
      <Input
        id="email"
        label="Email"
        register={register}
        inputType="email"
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
          required: "This field is required",
          validate: {
            notEmpty: (value: string) => validateNotEmpty(value, "This field is required"),
            matchPassword: (value: string) => value === password.current || "The passwords do not match",
          },
        }}
      />

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full h-[50px]  ${isComplete() ? "bg-red-default" : "bg-red-60"} disabled:bg-red-60 rounded-lg cursor-pointer`}
        onClick={(e) => isValid(e)}>
        SUBMIT
      </button>
    </>
  );
};

export default Step2;
