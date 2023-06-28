"use client";
import { Google } from "@/app/components/Icons/Icon";
import Input from "@/app/components/auth/Input";
import OrLine from "@/app/components/auth/OrLine";
import Select from "@/app/components/auth/Select";
import SocialAuth from "@/app/components/auth/SocialAuth";
import Step1 from "@/app/components/auth/Step1";
import Step2 from "@/app/components/auth/Step2";
import useLightMode from "@/app/hooks/useLightMode";
import { getFormattedDate, validateNotEmpty } from "@/app/libs/helper";
import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm, FormProvider, useFormContext } from "react-hook-form";

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
  const [step, setStep] = useState<number>(1);
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const submit = () => {
    if (step === 1) return;
    methods.handleSubmit(onSubmit);
  };
  return (
    <section
      className={`flex-1 h-full md2:w-full shrink-0 overflow-x-hidden overflow-y-auto bg-secondaryBg-10 dark:bg-dark-30 p-8 flex flex-col items-center justify-center`}>
      <FormProvider {...methods}>
        <form
          onSubmit={submit}
          className="w-full sm:w-10/12 lg:w-8/12 my-9">
          {step === 1 ? <Step1 setStep={setStep} /> : null}
          {step === 2 ? <Step2 setStep={setStep} /> : null}
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
