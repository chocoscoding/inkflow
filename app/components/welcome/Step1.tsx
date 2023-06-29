import React from "react";
import Option from "./Option";
import useWelcomeSteps from "@/app/hooks/useWelcomeSteps";
export interface StepType {
  data: number;
  set: (value: number) => void;
}
const Step1: React.FC<StepType> = ({ data, set }) => {
  const { two } = useWelcomeSteps();
  const isValid = [1, 2, 3, 4].includes(data);
  const next = () => {
    if (isValid) return two();
    return;
  };
  return (
    <div>
      <h2 className="text-secondary-20 dark:text-secondaryBg-20 font-bold xl:text-3xl text-2xl mb-7 w-full lg1:text-xl">{`Do you know how to code?`}</h2>

      <div className="flex flex-col gap-4">
        <Option
          label="No, and coding is totally unfamiliar"
          data={data}
          set={set}
          value={1}
        />
        <Option
          label="Not, but I understand a few concepts"
          data={data}
          set={set}
          value={2}
        />
        <Option
          label="Yes, and I'm a beginner"
          data={data}
          set={set}
          value={3}
        />
        <Option
          label="Yes, and I'm intermediate or a professional"
          data={data}
          set={set}
          value={4}
        />

        <button
          type="button"
          className={`w-3/12 h-[50px] min-w-[60px] ${isValid ? "bg-red-90" : "bg-red-40"} rounded-lg cursor-pointer mt-4`}
          onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
