"use client";
import OrLine from "@/app/components/auth/OrLine";
import SocialAuth from "@/app/components/auth/SocialAuth";
import MobileScreenHeading from "@/app/components/auth/signup/MobileScreenHeading";
import Step1 from "@/app/components/auth/signup/Step1";
import Step2 from "@/app/components/auth/signup/Step2";
import useLightMode from "@/app/hooks/useLightMode";
import useSignupSteps from "@/app/hooks/useSignupSteps";
import React, { useState } from "react";
import { FieldValues, useForm, FormProvider } from "react-hook-form";

export interface FormType {
  firstname: string;
  lastname: string;
  age: string;
  country: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const DataFields = () => {
  const { lightMode } = useLightMode();
  const methods = useForm<FormType>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastname: "",
      age: "",
      country: "",
    },
    mode: "onChange",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { steps } = useSignupSteps();
  const onSubmit = (data: FieldValues) => {};
  const submit = () => {
    if (steps === 1) return;
    methods.handleSubmit(onSubmit);
  };
  return (
    <section
      className={`flex-1 h-full md2:w-full shrink-0 overflow-x-hidden overflow-y-auto bg-secondaryBg-10 dark:bg-dark-30 p-8 flex flex-col items-center lg:justify-center`}>
      <MobileScreenHeading />
      <FormProvider {...methods}>
        <form
          onSubmit={submit}
          className={`w-full sm:w-10/12 lg:w-8/12 sm:my-9 ${steps === 1 ? "mt-4" : "mt-0"}`}>
          {steps === 1 ? <Step1 /> : null}
          {steps === 2 ? <Step2 /> : null}
        </form>
      </FormProvider>

      <div className="w-full sm:w-10/12 lg:w-8/12 my-9">
        <OrLine />

        <SocialAuth
          label="Sign up with Google"
          icon="Google"
          onClick={() => {}}
        />
        <SocialAuth
          label="Sign up with Github"
          icon="Github"
          onClick={() => {}}
        />
      </div>
    </section>
  );
};

export default DataFields;
