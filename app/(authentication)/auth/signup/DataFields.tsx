"use client";
import { Google } from "@/app/components/Icons/Icon";
import Input from "@/app/components/auth/Input";
import OrLine from "@/app/components/auth/OrLine";
import Select from "@/app/components/auth/Select";
import SocialAuth from "@/app/components/auth/SocialAuth";
import useLightMode from "@/app/hooks/useLightMode";
import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface StepOneType {
  Firstname: string;
  Lastname: string;
  Age: string;
  Nationality: string;
}
const DataFields = () => {
  const { lightMode } = useLightMode();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
    getValues,
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      username: "",
      age: "",
      country: "",
    },
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isComplete = useCallback(() => {
    //get if the values have been inputed
    const { firstname, lastname, age, country } = dirtyFields;
    return firstname && lastname && age && country;
  }, [dirtyFields]);
  return (
    <section
      className={`flex-1 h-full md2:w-full shrink-0 overflow-x-hidden overflow-y-auto bg-secondaryBg-10 dark:bg-dark-30 p-8 flex flex-col items-center justify-center`}>
      <div className="w-full sm:w-10/12 lg:w-8/12 my-9">
        <Input
          id="firstname"
          label="Firstname"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="lastname"
          label="Lastname"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <div className="w-full sm:flex sm:gap-4">
          <Input
            id="age"
            label="Age"
            inputType="date"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            condition={{ max: new Date(Date.now()) }}
          />
          <Select
            id="country"
            label="Country"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
        </div>

        <button
          className="w-full h-[50px] bg-red-80 disabled:bg-red-60 rounded-lg cursor-pointer"
          disabled={!isComplete()}>
          NEXT
        </button>
      </div>

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
