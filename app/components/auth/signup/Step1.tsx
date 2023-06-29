import React, { Dispatch, SetStateAction, useCallback } from "react";
import Input from "../Input";
import Select from "../Select";
import { UseFormRegister, FieldValues, UseFormTrigger, useFormContext, Controller } from "react-hook-form";
import { getFormattedDate, validateNotEmpty } from "@/app/libs/helper";
import { FormType } from "@/app/(authentication)/auth/signup/DataFields";
import useSignupSteps from "@/app/hooks/useSignupSteps";

const Step1 = () => {
  const { register, formState, trigger, clearErrors } = useFormContext<FormType>();
  const { two } = useSignupSteps();
  const { errors, dirtyFields } = formState;
  const isComplete = useCallback(() => {
    //get if the values have been inputed
    const { firstname, lastname, dob, country } = dirtyFields;
    return firstname && lastname && dob && country;
  }, [dirtyFields]);
  const isValid = () => {
    const keysToCheck: any[] = ["firstname", "lastname", "dob", "country"];
    trigger(keysToCheck);

    const containsError = keysToCheck.some((key) => Object.keys(errors).includes(key));
    if (containsError) return;
    if (!isComplete()) return;
    return two();
  };

  return (
    <>
      <Input
        id="firstname"
        label="Firstname"
        register={register}
        errors={errors}
        placeholder="John"
        required={{
          required: "First name is required.",
          pattern: {
            value: /^[a-zA-Z]+$/,
            message: "First name should contain only characters.",
          },
        }}
      />
      <Input
        id="lastname"
        label="Lastname"
        register={register}
        errors={errors}
        placeholder="Doe"
        required={{
          required: "Last name is required.",
          pattern: {
            value: /^[a-zA-Z]+$/,
            message: "First name should contain only characters.",
          },
        }}
      />
      <div className="w-full sm:flex sm:gap-4">
        <Input
          id="dob"
          label="Date of Birth"
          inputType="date"
          register={register}
          errors={errors}
          required={{ required: "DOB is required" }}
          condition={{ max: getFormattedDate(), min: "1900-01-10" }}
        />
        <Select
          id="country"
          label="Nationality"
          register={register}
          errors={errors}
          clearErrors={clearErrors}
          required={{ required: "Nationality is required" }}
        />
      </div>

      <button
        type="button"
        className={`w-full h-[50px]  ${isComplete() ? "bg-red-default" : "bg-red-60"} rounded-lg cursor-pointer`}
        onClick={isValid}>
        NEXT
      </button>
    </>
  );
};

export default Step1;
