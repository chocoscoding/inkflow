"use client";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { NewCreationFormType } from "@/app/(main)/create/CreateClient";

const InterviewOptions = () => {
  const [selectionValue, setselectionValue] = useState("mo");

  const {
    getValues,
    formState: { errors },
    register,
  } = useFormContext<NewCreationFormType>();

  return (
    <section className="flex gap-6 flex-wrap md1:gap-3 mt-2 items-baseline">
      <div className="flex flex-col p-1 rounded-md cursor-pointer">
        <div className="flex bg-dark-40 rounded-md gap-2 p-1 items-center flex-shrink-0">
          <input
            placeholder={"Revenue"}
            {...register("interviewInfo.revenue", {
              setValueAs: (value) => `${value + "/" + selectionValue}`,
              required: getValues("creationType") === "Interview",
            })}
            type="number"
            className="h-full p-3 bg-dark-30 rounded-md sm1:w-full"
          />
          <select
            className="h-full bg-dark-40"
            name="earnings"
            id="earnings"
            value={selectionValue}
            onChange={(e) => setselectionValue(e.target.value)}>
            <option value="mo">mo</option>
            <option value="yr">yr</option>
          </select>
        </div>
        {errors["interviewInfo"]?.revenue ? (
          <label
            htmlFor={"interviewInfo.revenue"}
            className=" text-red-600">
            {errors["interviewInfo"].revenue.message || "Required"}
          </label>
        ) : null}
      </div>

      <div className="flex rounded-md p-1 cursor-pointer bg-dark-40 h-[51.2px]">
        <select
          className="bg-dark-40 w-full border-red-10"
          id="platform"
          {...register("interviewInfo.platform", {
            required: getValues("creationType") === "Interview",
          })}>
          <option value="Mobile">Mobile</option>
          <option value="Web">Web</option>
          <option value="Console">Console</option>
          <option value="Multi">Multi</option>
        </select>
      </div>
      <div className="flex rounded-md p-1 cursor-pointer bg-dark-40 h-[51.2px]">
        <select
          className="bg-dark-40 w-full border-red-10"
          {...register("interviewInfo.businessType", {
            required: getValues("creationType") === "Interview",
          })}>
          <option value="Saas">Saas</option>
          <option value="Education">Education</option>
          <option value="Finance">Finance</option>
          <option value="Entertainment">Entertainment</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Home & Decor">Home & Decor</option>
          <option value="Travel & Tourism">Travel & Tourism</option>
          <option value="Food & Beverage">Food & Beverage</option>
          <option value="Health & Fitness">Health & Fitness</option>
          <option value="Fashion & Apparel">Fashion & Apparel</option>
          <option value="Technology">Technology</option>
          <option value="Pet & Animal Care">Pet & Animal Care</option>
          <option value="Sports & Fitness">E-commerce</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Others">Others</option>
        </select>
      </div>
    </section>
  );
};

export default InterviewOptions;
