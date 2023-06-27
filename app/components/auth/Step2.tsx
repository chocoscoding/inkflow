import React, { Dispatch, SetStateAction, useCallback } from "react";
import Input from "./Input";
import Select from "./Select";
import { UseFormRegister, FieldValues, UseFormTrigger } from "react-hook-form";
import { getFormattedDate, validateNotEmpty } from "@/app/libs/helper";
import { FormType } from "@/app/(authentication)/auth/signup/DataFields";
interface Step1Type {
  register: UseFormRegister<FormType>;
  errors: FieldValues;
  dirtyFields: Partial<Readonly<{ [K in keyof FormType]?: boolean }>>;
  trigger: UseFormTrigger<FormType>;
  setStep: Dispatch<SetStateAction<number>>;
}
const Step2: React.FC<Step1Type> = ({ register, errors, dirtyFields, trigger, setStep }) => {
  const isComplete = useCallback(() => {
    //get if the values have been inputed
    const { firstname, lastname, age, country } = dirtyFields;
    return firstname && lastname && age && country;
  }, [dirtyFields]);
  const isValid = () => {
    const keysToCheck: any[] = ["firstname", "lastname", "age", "country"];
    trigger(keysToCheck);

    const containsError = keysToCheck.some((key) => Object.keys(errors).includes(key));
    if (containsError) return;
    setStep(2);
  };

  return (
    <>
      <Input
        id="email"
        label="Email"
        inputType="email"
        register={register}
        errors={errors}
        placeholder="example@email.com"
        required={{ required: "What's your email?", validate: (value: string) => validateNotEmpty(value, "What's your email") }}
      />
      <Input
        id="password"
        label="Password"
        inputType="password"
        register={register}
        errors={errors}
        required={{ required: "Password required?", validate: (value: string) => validateNotEmpty(value, "Password required") }}
      />

      <Input
        id="confirmPassword"
        label="Confirm Password"
        register={register}
        inputType="password"
        placeholder="Confirm your password"
        errors={errors}
        required={{ required: "Password required?", validate: (value: string) => validateNotEmpty(value, "Password required") }}
      />

      <button
        className={`w-full h-[50px]  ${isComplete() ? "bg-red-80" : "bg-red-60"} rounded-lg cursor-pointer`}
        onClick={isValid}>
        SUBMIT
      </button>
      <button
        className={`w-full h-[50px]  ${isComplete() ? "bg-blue-80" : "bg-blue-60"} rounded-lg cursor-pointer`}
        onClick={() => setStep(1)}>
        BACK
      </button>
    </>
  );
};

export default Step2;
