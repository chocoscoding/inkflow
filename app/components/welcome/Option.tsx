import React from "react";
import { StepType } from "./Step1";
interface OptionType extends StepType {
  label: string;
  value: number;
}
const Option: React.FC<OptionType> = ({ label, data, set, value }) => {
  return (
    <div
      className={`cursor-pointer rounded-lg  text-secondary-20 p-4 w-full
      ${
        value === data
          ? "bg-red-90 text-secondaryBg-20"
          : "dark:bg-dark-40 dark:text-secondaryBg-20 bg-secondary-60 hover:brightness-75 dark:hover:brightness-110"
      }
      `}
      onClick={() => set(value)}>
      {label}
    </div>
  );
};

export default Option;
