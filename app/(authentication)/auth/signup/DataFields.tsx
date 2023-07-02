"use client";
import OrLine from "@/app/components/auth/OrLine";
import SocialAuth from "@/app/components/auth/SocialAuth";
import MobileScreenHeading from "@/app/components/auth/signup/MobileScreenHeading";
import Step1 from "@/app/components/auth/signup/Step1";
import Step2 from "@/app/components/auth/signup/Step2";
import useSignupSteps from "@/app/hooks/useSignupSteps";
import axios from "axios";
import React, { useRef, useState } from "react";
import { FieldValues, useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface FormType {
  firstname: string;
  lastname: string;
  dob: string;
  country: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const DataFields = () => {
  const { push } = useRouter();
  const methods = useForm<FormType>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastname: "",
      dob: "",
      country: "",
    },
    mode: "onChange",
  });
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { steps } = useSignupSteps();
  const socialSignUpWrapper = async (func: Promise<SignInResponse | undefined>) => {
    const loading = toast.loading("loading");
    try {
      await func;
      push("/welcome");
      toast.dismiss(loading);
      toast.success("Redirecting", { duration: 5000 });
    } catch (error: any) {
      toast.error("Something went wrong, try again");
    }
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data, e) => {
    e?.preventDefault();
    setIsLoading(true);
    const loading = toast.loading("loading");
    if (steps === 1) return;
    try {
      const response: any = await axios.post("/api/register", data);
      if (response.data.status === 200) {
        await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });
        toast.success("Registered successfully", { id: loading, duration: 1000 });
        push("/welcome");
        toast.success("Redirecting", { id: loading });
        return;
      }
      throw new Error(response.data.error);
    } catch (error: any) {
      toast.dismiss(loading);
      if (error.message === "User_email_key") {
        methods.setError("email", {
          type: "manual",
          message: "Mail already used by another user",
        });
        return;
      }
      toast.error("Something went wrong, try again");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section
      className={`flex-1 h-full md2:w-full shrink-0 overflow-x-hidden overflow-y-auto bg-secondaryBg-10 dark:bg-dark-30 p-8 flex flex-col items-center lg:justify-center`}>
      <MobileScreenHeading />
      <FormProvider {...methods}>
        <form
          ref={formRef}
          onSubmit={methods.handleSubmit(onSubmit)}
          className={`w-full sm:w-10/12 lg:w-8/12 sm:my-4 ${steps === 1 ? "mt-4" : "mt-0"}`}>
          {steps === 1 ? <Step1 /> : null}
          {steps === 2 ? (
            <Step2
              formRef={formRef}
              isLoading={isLoading}
            />
          ) : null}
        </form>
      </FormProvider>
      <p className="text-sm">
        {`Already have an account?`}
        <Link
          className="text-red-70 ml-2"
          href={"/auth/signin"}>
          Login
        </Link>
      </p>
      <section className="w-full sm:w-10/12 lg:w-8/12 my-4">
        <OrLine />

        <SocialAuth
          label="Sign up with Google"
          icon="Google"
          onClick={() => socialSignUpWrapper(signIn("google"))}
        />
      </section>
    </section>
  );
};

export default DataFields;
