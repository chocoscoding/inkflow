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
const Step1: React.FC<Step1Type> = ({ register, errors, dirtyFields, trigger, setStep }) => {
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
        id="firstname"
        label="Firstname"
        register={register}
        errors={errors}
        placeholder="John"
        required={{ required: "What's your firstname?", validate: (value: string) => validateNotEmpty(value, "What's your firstname") }}
      />
      <Input
        id="lastname"
        label="Lastname"
        register={register}
        errors={errors}
        placeholder="Doe"
        required={{ required: "What's your lastname?", validate: (value: string) => validateNotEmpty(value, "What's your lastname") }}
      />
      <div className="w-full sm:flex sm:gap-4">
        <Input
          id="age"
          label="Age"
          inputType="date"
          register={register}
          errors={errors}
          required={{ required: "Tell us your age" }}
          condition={{ max: getFormattedDate(), min: "1990-01-10" }}
        />
        <Select
          id="country"
          label="Country"
          register={register}
          errors={errors}
          required={{ required: "Where are you from?" }}
        />
      </div>

      <button
        type="button"
        className={`w-full h-[50px]  ${isComplete() ? "bg-red-80" : "bg-red-60"} rounded-lg cursor-pointer`}
        onClick={isValid}>
        NEXT
      </button>
    </>
  );
};

export default Step1;
