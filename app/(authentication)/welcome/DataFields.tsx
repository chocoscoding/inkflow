"use client";

import Step1 from "@/app/components/welcome/Step1";
import Step2 from "@/app/components/welcome/Step2";
import Step3 from "@/app/components/welcome/Step3";
import Step4 from "@/app/components/welcome/Step4";
import useLightMode from "@/app/hooks/useLightMode";
import useWelcomeSteps from "@/app/hooks/useWelcomeSteps";
import React, { useState } from "react";

export interface FormType {
  firstname: string;
  lastname: string;
  age: string;
  country: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const DataFields = () => {
  const { lightMode } = useLightMode();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string } | null>(null);
  const { steps } = useWelcomeSteps();
  const onSubmit = () => {};
  const [welcomeInfo, setWelcomeInfo] = useState<{
    q1: number;
    q2: number;
    q3: number[];
    email: string;
  }>({
    q1: 0,
    q2: 0,
    q3: [],
    email: "",
  });

  const setQ1 = (value: number) => setWelcomeInfo((prev) => ({ ...prev, q1: value }));
  const setQ2 = (value: number) => setWelcomeInfo((prev) => ({ ...prev, q2: value }));
  const setQ3 = (value: number[]) => setWelcomeInfo((prev) => ({ ...prev, q3: value }));
  const setQ4 = (value: string) => setWelcomeInfo((prev) => ({ ...prev, email: value }));
  const clearError = () => setError(null);
  return (
    <section
      className={`flex-1 h-full md2:w-full shrink-0 overflow-x-hidden overflow-y-auto bg-secondaryBg-10 dark:bg-dark-30 p-8 flex flex-col items-center lg:justify-center`}>
      <div className={`w-full sm:w-10/12 lg:w-8/12 sm:my-9 ${steps === 1 ? "mt-4" : "mt-0"}`}>
        {steps === 1 ? (
          <Step1
            data={welcomeInfo.q1}
            set={setQ1}
          />
        ) : null}
        {steps === 2 ? (
          <Step2
            data={welcomeInfo.q2}
            set={setQ2}
          />
        ) : null}
        {steps === 3 ? (
          <Step3
            data={welcomeInfo.q3}
            set={setQ3}
          />
        ) : null}
        {steps === 4 ? (
          <Step4
            clearError={clearError}
            error={error}
            onSubmit={onSubmit}
            isLoading={isLoading}
            data={welcomeInfo.email}
            set={setQ4}
          />
        ) : null}
      </div>
    </section>
  );
};

export default DataFields;
