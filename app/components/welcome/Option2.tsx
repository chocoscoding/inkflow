import React from "react";
interface OptionType {
  label: string;
  value: number;
  data: any[];
  set:(value: number) => void;
}
const Option2: React.FC<OptionType> = ({ label, data = [], set, value }) => {
  return (
    <div
      className={`cursor-pointer rounded-lg  text-secondary-20 p-4 w-fit
          ${
            data.includes(value)
              ? "bg-red-90 text-secondaryBg-20"
              : "dark:bg-dark-40 dark:text-secondaryBg-20 bg-secondary-60 hover:brightness-75 dark:hover:brightness-110"
          }
          `}
      onClick={() => set(value)}>
      {label}
    </div>
  );
};

export default Option2;
