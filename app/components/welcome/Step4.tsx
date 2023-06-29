import React, { useState } from "react";
import { BackArrow } from "../Icons";
import useWelcomeSteps from "@/app/hooks/useWelcomeSteps";
interface StepType {
  data: string;
  set: (value: string) => void;
  isLoading: boolean;
  error: {
    message: string;
  } | null;
  clearError: () => void;
  onSubmit: () => void;
}
const Step4: React.FC<StepType> = ({ data, set, isLoading, error, clearError, onSubmit }) => {
  const { three, one } = useWelcomeSteps();
  const maindata = data.trim();
  const isValid = maindata && maindata.length >= 5 && maindata.length < 15 && maindata !== "";
  return (
    <div>
      <div
        className={`w-[50px] h-[50px] rounded-full cursor-pointer bg-secondary-60 dark:bg-dark-40 flex justify-center items-center sm:mt-10 mt-8 mb-6`}
        onClick={() => three()}>
        <BackArrow className="text-secondary-40 scale-125" />
      </div>
      <h2 className="text-secondary-20 dark:text-secondaryBg-20 font-bold xl:text-3xl text-2xl mb-7 w-full lg1:text-xl">{`Final step!!!`}</h2>
      <div className="flex flex-col">
        <div className="w-full flex flex-col gap-3 mb-4">
          <div className="w-full flex justify-between">
            <label
              htmlFor={"username"}
              className="dark:text-secondaryBg-20 text-secondary-20 ">
              {"Choose a username"}
            </label>
          </div>

          <div>
            <input
              maxLength={14}
              min={5}
              value={data}
              onChange={(e) => {
                set(e.target.value);
                clearError();
              }}
              id={"username"}
              disabled={isLoading}
              className={`w-full rounded-lg bg-secondary-60 dark:bg-dark-20 dark:text-secondaryBg-20 text-dark-30 h-[3rem] p-6 outline 
          ${error && "outline-1 outline-red-dark-50"}
          ${error && "focus:outline-2 outline-red-dark-50"}
          ${!error && "outline-0"}
          ${!error && "focus:outline-1 outline-secondaryBg-10"}
          `}
              placeholder={`inkflow123`}
            />
            {error ? (
              <label
                htmlFor={"username"}
                className=" text-red-600">
                {error.message || "Required"}
              </label>
            ) : null}
          </div>
        </div>
        <button
          type="button"
          disabled={isLoading || !isValid}
          className={`w-full h-[50px] min-w-[60px] ${isValid ? "bg-red-90" : "bg-red-40"} rounded-lg cursor-pointer mt-4`}
          onClick={onSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Step4;
