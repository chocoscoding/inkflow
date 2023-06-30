import React from "react";
import { StepType } from "./Step1";
import Option from "./Option";
import useWelcomeSteps from "@/app/hooks/useWelcomeSteps";
import { BackArrow } from "../Icons";

const Step2: React.FC<StepType> = ({ data, set }) => {
  const { three, one } = useWelcomeSteps();
  const isValid = [1, 2, 3, 4,5].includes(data);
  const next = () => {
    if (isValid) return three();
    return;
  };
  return (
    <>
      <div
        className={`w-[50px] h-[50px] rounded-full cursor-pointer bg-secondary-60 dark:bg-dark-40 flex justify-center items-center sm:mt-10 mt-8 mb-6`}
        onClick={() => one()}>
        <BackArrow className="text-secondary-40 scale-125" />
      </div>
      <h2 className="text-secondary-20 dark:text-secondaryBg-20 font-bold xl:text-3xl text-2xl mb-7 w-full lg1:text-xl">{`Which best describes the stage you're at right now?`}</h2>
      <section className="flex flex-col gap-4">
        <Option
          label="Considering or planning to start a business"
          data={data}
          set={set}
          value={1}
        />
        <Option
          label="Actively getting started on something new"
          data={data}
          set={set}
          value={2}
        />
        <Option
          label="No interest in starting a business"
          data={data}
          set={set}
          value={3}
        />
        <Option
          label="Earnings from my business fully support me"
          data={data}
          set={set}
          value={4}
        />
        <Option
          label="Working on a business, no revenue yet"
          data={data}
          set={set}
          value={5}
        />

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

export default Step2;
