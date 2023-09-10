"use client";
import Input from "@/app/components/inputs/Input";
import Link from "next/link";
import React, { FC, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { BackArrow } from "@/app/components/Icons";
import { SecurityClient, SecurityClientForm } from "@/app/types/client";
import toast from "react-hot-toast";
import axios from "axios";

const SecurityClient: FC<SecurityClient> = ({ userHasPassword }) => {
  const methods = useForm<SecurityClientForm>({ defaultValues: {} });
  const { formState, getValues, setValue, handleSubmit, watch, reset } = methods;
  const [isLoading, setIsLoading] = useState(false);
  const submit: SubmitHandler<SecurityClientForm> = async (data, e) => {
    e?.preventDefault();
    setIsLoading(true);
    try {
      const { newPass, oldPass } = data;
      const loadingToast = toast.loading("Updating info");
      const changeInfoApi = await axios.post(`/apis/userInfo`, {
        newPass,
        oldPass,
      });
      toast.remove(loadingToast);
      if (changeInfoApi.status === 200) {
        toast.success("Info updated successfully 🎊");
        reset();
      } else {
        throw new Error(`Something went wrong`);
      }
    } catch (e: any) {
      console.log(e);
      toast.remove();
      if (e.message.includes("400")) {
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
            <div className="flex flex-wrap gap-3">
              <Input
                id="oldPass"
                label="Old Password"
              />
            </div>
          ) : null}
          <div className="flex flex-wrap gap-3">
            <Input
              regexMatch={{
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Must have Capital letter, number and special character",
                },
              }}
              id="newPass"
              label="New Password"
            />
            <Input
              regexMatch={{
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Must have Capital letter, number and specia",
                },
              }}
              id="confirmNew"
              label="Confirm new password"
            />
          </div>
          <div className="flex justify-end gap-4 mr-3 items-center">
            <button
              type="submit"
              disabled={!formState.isDirty || isLoading}
              className="bg-blue-default disabled:bg-blue-30 disabled:cursor-not-allowed rounded-lg py-2.5 px-4 cursor-pointer">
              Change
            </button>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

export default SecurityClient;
