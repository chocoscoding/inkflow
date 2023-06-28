import React, { useState } from "react";
import countries from "i18n-iso-countries";
// Import the languages you want to use
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import { UseFormRegister, FieldValues, UseFormClearErrors } from "react-hook-form";
import { FormType } from "@/app/(authentication)/auth/signup/DataFields";

interface InputType {
  id: "country";
  label: string;
  disabled?: boolean;
  required: any;
  register: UseFormRegister<FormType>;
  errors: FieldValues;
  placeholder?: string;
  clearErrors: UseFormClearErrors<FormType>;
}

const Select: React.FC<InputType> = ({ label, register, id, required, disabled, errors, clearErrors }) => {
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);
  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  return (
    <div className="w-full flex flex-col gap-3 mb-4">
      <label
        htmlFor={label}
        className="dark:text-secondaryBg-20 text-secondary-20">
        {label}
      </label>
      <div>
        <select
          id={id}
          {...register(id, { ...required })}
          disabled={disabled}
          className={`w-full rounded-lg bg-secondaryBg-60 dark:bg-dark-20  h-[3rem] p-3`}>
          <option
            value=""
            className="text-secondary-40">
            Select country
          </option>
          {!!countryArr?.length &&
            countryArr.map(({ label, value }, i) => (
              <option
                className="text-secondary-30"
                value={value}
                key={`countryDropdown${i}`}>
                {label}
              </option>
            ))}
        </select>
        {errors[id] ? (
          <label
            htmlFor={label}
            className=" text-red-600">
            {errors[id].message || "Required"}
          </label>
        ) : null}
      </div>
    </div>
  );
};

export default Select;
