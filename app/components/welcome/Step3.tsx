"use client";
import React, { useEffect, useState } from "react";
import { BackArrow } from "../Icons";
import useWelcomeSteps from "@/app/hooks/useWelcomeSteps";
import Option2 from "./Option2";
interface StepType {
  data: number[];
  set: (value: number[]) => void;
}
const Step3: React.FC<StepType> = ({ data, set }) => {
  const [businessTypes, setBusinessTypes] = useState<number[]>(data);
  const { two, four } = useWelcomeSteps();
  const isValid = data.length > 0;
  const next = () => {
    if (isValid) return four();
    return;
  };
  const toggle = (value: number) => {
    setBusinessTypes((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  useEffect(() => {
    set(businessTypes);
  }, [businessTypes]);
  const elements = [
    "Advertising",
    "Task Management",
    "Email Marketing",
    "Crypto",
    "Design",
    "Finance",
    "Outdoors",
    "Health & Fitness",
    "Investing",
    "Home Automation",
    "Sports",
  ];
  return (
    <>
      <div
        className={`w-[50px] h-[50px] rounded-full cursor-pointer bg-secondary-60 dark:bg-dark-40 flex justify-center items-center sm:mt-10 mt-8 mb-6`}
        onClick={() => two()}>
        <BackArrow className="text-secondary-40 scale-125" />
      </div>
      <h2 className="text-secondary-20 dark:text-secondaryBg-20 font-bold xl:text-3xl text-2xl mb-7 w-full lg1:text-xl">{`What types of businesses are you most interested in running?`}</h2>
      <section className="w-full">
        <p className="text-blue-80 mb-4">Choose as many as you may like</p>
        <div className="w-full flex gap-4 flex-wrap">
          {elements.map((value, i) => (
            <Option2
              label={value}
              data={businessTypes}
              set={toggle}
              value={i + 1}
              key={`option2--${i}`}
            />
          ))}
        </div>

        <button
          type="button"
          className={`w-3/12 h-[50px] min-w-[60px] ${isValid ? "bg-red-90" : "bg-red-40"} text-secondaryBg-10 rounded-lg cursor-pointer mt-4`}
          onClick={next}>
          Next
        </button>
      </section>
    </>
  );
};

export default Step3;
