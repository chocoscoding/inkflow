"use client";
import Input from "@/app/components/inputs/Input";
import Link from "next/link";
import React, { FC, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { BackArrow } from "@/app/components/Icons";
import { SecurityClient, SecurityClientForm } from "@/app/types/client";
import toast from "react-hot-toast";
import axios from "axios";
import AuthInput from "@/app/components/inputs/AuthInput";
import { validateNotEmpty } from "@/app/libs/helper";
import { useRouter } from "next/navigation";

const SecurityClient: FC<SecurityClient> = ({ userHasPassword }) => {
  const { refresh } = useRouter();
  const methods = useForm<SecurityClientForm>({ defaultValues: {} });
  const { formState, getValues, setValue, handleSubmit, reset } = methods;
  const { errors } = formState;
  const [isLoading, setIsLoading] = useState(false);
  const submit: SubmitHandler<SecurityClientForm> = async (data, e) => {
    e?.preventDefault();
    setIsLoading(true);
    try {
      toast.dismiss();
      const { newPass, oldPass } = data;
      const loadingToast = toast.loading("Updating info");
      const changeInfoApi = await axios.post(`/api/user/1/settings/security/changePassword`, {
        newPass,
        oldPass,
      });
      toast.remove(loadingToast);
      if (changeInfoApi.data.error === "Incorrect Password") {
        toast.error("Incorrect Password");
        return;
      }
      if (changeInfoApi.status === 200) {
        toast.success("Info updated successfully 🎊");
        reset();
        refresh();
        return;
      } else {
        throw new Error(`Something went wrong`);
      }
    } catch (e: any) {
      toast.remove();
      if (e.message.includes("403")) {
        toast.error("User not authenticated 🔒");
        return;
      }
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="pl-5 w-full">
      <Link href={`/settings`}>
        <button className="p-4 mb-3 bg-dark-30 flex-center rounded-full">
          <BackArrow />
        </button>
      </Link>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submit)}>
          <h2 className="font-bold my-4 text-xl">{userHasPassword ? "Change password" : "Set new password"}</h2>
          {userHasPassword ? (
            <div className="flex flex-wrap gap-6">
              <div className="w-full min-w-[280px] max-w-[500px]">
                <AuthInput
                  customClass={`
                 h-11 rounded-lg w-full bg-transparent text-secondary-30 p-2
                          outline outline-1 
                          outline-secondary-20
                          focus:outline-2
                           placeholder-shown:text-secondary-20
                          focus:outline-secondary-30
                        ${errors["oldPass"] && "outline-1 dark:outline-red-dark-50 outline-red-dark-90"}
                          ${errors["oldPass"] && "focus:outline-2 dark:outline-red-dark-50 outline-red-dark-90"}
                        `}
                  id="oldPass"
                  label="Old Password"
                  inputType="password"
                  required={{
                    required: "Old Password required?",
                    validate: (value: string) => validateNotEmpty(value, "Old Password required"),
                  }}
                />
              </div>
            </div>
          ) : null}
          <div className="flex flex-wrap gap-3">
            <div className="w-full min-w-[280px] max-w-[500px]">
              <AuthInput
                customClass={`
               h-11 rounded-lg w-full bg-transparent text-secondary-30 p-2
          outline outline-1 
          outline-secondary-20
          focus:outline-2
           placeholder-shown:text-secondary-20
          focus:outline-secondary-30
        ${errors["newPass"] && "outline-1 dark:outline-red-dark-50 outline-red-dark-90"}
          ${errors["newPass"] && "focus:outline-2 dark:outline-red-dark-50 outline-red-dark-90"}
        `}
                id="newPass"
                label="New Password"
                inputType="password"
                required={{
                  required: "Password required!",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Must have Capital letter, number and special character",
                  },
                  minLength: {
                    message: "Please pick password longer than 8 characters",
                    value: 8,
                  },
                  validate: (value: string) => validateNotEmpty(value, "Password required"),
                }}
              />
            </div>

            <div className="w-full min-w-[280px] max-w-[500px]">
              <AuthInput
                customClass={`
                h-11 rounded-lg w-full bg-transparent text-secondary-30 p-2
          outline outline-1 
          outline-secondary-20
          focus:outline-2
           placeholder-shown:text-secondary-20
          focus:outline-secondary-30
        ${errors["confirmNew"] && "outline-1 dark:outline-red-dark-50 outline-red-dark-90"}
          ${errors["confirmNew"] && "focus:outline-2 dark:outline-red-dark-50 outline-red-dark-90"}
        `}
                id="confirmNew"
                label="Confirm Password"
                inputType="password"
                placeholder="Confirm your password"
                required={{
                  required: "This field is required",
                  validate: {
                    notEmpty: (value: string) => validateNotEmpty(value, "This field is required"),
                    matchPassword: (value: string) => value === getValues("newPass") || "The passwords do not match",
                  },
                }}
              />
            </div>
          </div>
          <div className="flex justify-end gap-4 mr-3 items-center">
            <button
              type="submit"
              disabled={!formState.isDirty || isLoading}
              className="bg-blue-default disabled:bg-blue-30 disabled:cursor-not-allowed rounded-lg py-2.5 px-4 cursor-pointer">
              Update your password
            </button>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

export default SecurityClient;
