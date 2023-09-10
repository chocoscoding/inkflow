"use client";
import { NewCreationFormType } from "@/app/(main)/create/CreateClient";
import { ProfileMiniType } from "@/app/types/client";
import React, { FC, useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

interface UsernameInputPropsType {
  id: string;
  label: string;
  className?: string;
  placeholder?: string;
}
const UsernameInput: FC<UsernameInputPropsType> = ({ id, label, className, placeholder }) => {
  const { register, formState, trigger, getValues, clearErrors, setError, watch } = useFormContext<any>();
  const { errors, dirtyFields, defaultValues } = formState;
  const [isValid, setIsValid] = useState<"normal" | "valid" | "invalid">("normal");
  //manage loading state to find username validity
  const [loading, setLoading] = useState(false);
  // Ref to track the API call cancellation token
  const apiCallToken = useRef(0);

  useEffect(() => {
    setLoading(false);
    setIsValid("normal");
    trigger(id);
    const username = watch(id);
    if (!username || username.length < 5 || username.length > 14) return;
    //if there are no errors from min and max, clear pre-existing errors and increment apiCalltoken
    apiCallToken.current++;
    setIsValid("normal");

    // Set a new timeout to trigger the API call after a delay
    const timeout = setTimeout(() => {
      checkIfUsernameIsValid(apiCallToken.current);
    }, 500);

    return () => clearTimeout(timeout);
  }, [watch(id)]);

  const checkIfUsernameIsValid = async (token: number) => {
    //check if the current username is equals to the default
    if (errors[id]) return;
    const defaultUsername = defaultValues?.username;
    if (defaultUsername === getValues("username")) {
      setIsValid("normal");
      return;
    } else {
      setLoading(true);
      try {
        const usernameValid = await fetch(`/api/user/any/settings/${getValues("username")}/usernameValid`);
        const res = await usernameValid.json();
        setLoading(false);
        if (usernameValid.status !== 200) {
          throw new Error("error");
        }
        if (token === apiCallToken.current) {
          if (res.message === "Username doesnt exist") {
            setIsValid("valid");
          } else {
            setIsValid("invalid");
          }
        }
      } catch (error) {
        toast.dismiss();
        toast.error("Something went wrong");
      }
    }
  };

  useEffect(() => {
    if (isValid === "valid" || isValid === "normal") {
      clearErrors("username.username");
    } else {
      setError(id, {
        type: "username",
      });
    }
  }, [isValid]);
  return (
    <div className={`flex flex-col gap-2 mb-4 w-[49%] ${className ? className : `md3:w-full min-w-[280px] max-w-[700px]`}`}>
      <label
        htmlFor="Title"
        className="font-medium text-lg">
        {label}
      </label>
      <input
        {...register(id, {
          required: true,
          minLength: { value: 5, message: "username is too short" },
          maxLength: { value: 14, message: "username is too long" },
        })}
        id={id}
        type="text"
        className={` h-11 rounded-lg w-full bg-transparent text-secondary-30 p-2
          outline outline-1 
          outline-secondary-20
          focus:outline-2
           placeholder-shown:text-secondary-20
          focus:outline-secondary-30
        ${errors[id] && "outline-1 dark:outline-red-dark-50 outline-red-dark-90"}
          ${errors[id] && "focus:outline-2 dark:outline-red-dark-50 outline-red-dark-90"}
        `}
        placeholder={placeholder || "Username"}
      />

      {/* for main errors */}
      {errors[id] && errors[id]!.type !== "username" ? (
        <label
          htmlFor={id}
          className=" text-red-600">
          {`${errors[id]?.message || "Required"}`}
        </label>
      ) : null}
      {/* if checking for username validity */}
      {loading ? (
        <label
          htmlFor={id}
          className=" text-gray-400 flex gap-3">
          <div className="SpinnerSmall"></div> Checking validity
        </label>
      ) : null}
      {/* if username is valid */}
      {isValid === "valid" ? (
        <label
          htmlFor={id}
          className=" text-green-600">
          ✅ Username is valid
        </label>
      ) : null}
      {/* if username is not valid */}
      {isValid === "invalid" ? (
        <label
          htmlFor={id}
          className="text-red-600">
          ❌ Username is already taken
        </label>
      ) : null}
    </div>
  );
};

export default UsernameInput;
