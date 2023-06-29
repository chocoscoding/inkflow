"use client";
import OrLine from "@/app/components/auth/OrLine";
import SocialAuth from "@/app/components/auth/SocialAuth";
import MobileScreenHeading from "@/app/components/auth/signup/MobileScreenHeading";
import useLightMode from "@/app/hooks/useLightMode";
import useSignupSteps from "@/app/hooks/useSignupSteps";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { FieldValues, useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Input from "@/app/components/auth/Input";
import { validateNotEmpty } from "@/app/libs/helper";

export interface FormType {
  firstname: string;
  lastname: string;
  dob: string;
  country: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const DataFields = () => {
  const { lightMode } = useLightMode();
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    trigger,
    watch,
  } = useForm<FormType>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const { one } = useSignupSteps();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isComplete = useCallback(() => {
    //get if the values have been inputed
    const { email, password } = dirtyFields;
    return email && password;
  }, [dirtyFields]);
  const isValid = (e: any) => {
    const keysToCheck: any[] = ["email", "password"];
    trigger(keysToCheck);
    const containsError = keysToCheck.some((key) => Object.keys(errors).includes(key));
    if (containsError) return e.preventDefault();
    return;
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data, e) => {
    e?.preventDefault();
  };

  return (
    <section
      className={`flex-1 h-full md2:w-full shrink-0 overflow-x-hidden overflow-y-auto bg-secondaryBg-10 dark:bg-dark-30 p-8 flex flex-col items-center lg:justify-center`}>
      <MobileScreenHeading />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`w-full sm:w-10/12 lg:w-8/12 sm:my-9`}>
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
            validate: (value: string) => validateNotEmpty(value, "Password required"),
          }}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full h-[50px]  ${isComplete() ? "bg-red-default" : "bg-red-60"} disabled:bg-red-60 rounded-lg cursor-pointer`}
          onClick={(e) => isValid(e)}>
          SUBMIT
        </button>
      </form>
      <div className="w-full sm:w-10/12 lg:w-8/12 my-9">
        <OrLine />

        <SocialAuth
          label="Sign in with Google"
          icon="Google"
          onClick={() => {}}
        />
        <SocialAuth
          label="Sign in with Github"
          icon="Github"
          onClick={() => {}}
        />
      </div>
    </section>
  );
};

export default DataFields;
