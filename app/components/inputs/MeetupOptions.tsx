"use client";
import React, { useState } from "react";
import { Edit } from "../Icons";
import { useFormContext } from "react-hook-form";
import { NewCreationFormType } from "@/app/(main)/create/CreateClient";

const MeetupOptions = () => {
  const [openRevenue, setOpenRevenue] = useState(false);
  const [openPlatforms, setOpenPlatforms] = useState(false);
  const [openBusinessType, setOpenBusinessType] = useState(false);
  const [selectionValue, setselectionValue] = useState("mo");

  const {
    getValues,
    formState: { errors },
    register,
  } = useFormContext<NewCreationFormType>();
  

  return (
    <section className="flex gap-6 md1:flex-wrap md1:gap-3 mt-2 items-baseline">
      <div className="flex flex-col p-1 rounded-md cursor-pointer w-full max-w-[500px]">
        <div className="flex bg-dark-40 rounded-md gap-2 p-1 items-center flex-shrink-0">
          <input
            placeholder={"Date"}
            {...register("meetupInfo.date", {
              required: getValues("creationType") === "Meetup",
            })}
            type="date"
            min={new Date().toISOString().split("T")[0]}
            className="h-full p-3 bg-dark-30 rounded-md w-full focus:outline-secondary-30"
          />
        </div>
        {errors["meetupInfo"]?.date ? (
          <label
            htmlFor={"meetupInfo.date"}
            className=" text-red-600">
            {errors["meetupInfo"].date.message || "Required"}
          </label>
        ) : null}
      </div>
      <div className="flex flex-col p-1 rounded-md cursor-pointer w-full max-w-[500px]">
        <div className="flex bg-dark-40 rounded-md gap-2 p-1 items-center flex-shrink-0">
          <input
            placeholder={"Scheduled Time"}
            {...register("meetupInfo.time", {
              required: getValues("creationType") === "Meetup",
            })}
            type="text"
            className="h-full p-3 bg-dark-30 rounded-md w-full focus:outline-secondary-30"
          />
        </div>
        {errors["meetupInfo"]?.time ? (
          <label
            htmlFor={"meetupInfo.time"}
            className=" text-red-600">
            {errors["meetupInfo"].time.message || "Required"}
          </label>
        ) : null}
      </div>
    </section>
  );
};

export default MeetupOptions;
