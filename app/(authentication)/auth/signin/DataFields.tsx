"use client";
import OrLine from "@/app/components/auth/OrLine";
import SocialAuth from "@/app/components/auth/SocialAuth";
import MobileScreenHeading from "@/app/components/auth/signup/MobileScreenHeading";
import useLightMode from "@/app/hooks/useLightMode";
import useSignupSteps from "@/app/hooks/useSignupSteps";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { FieldValues, useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Input from "@/app/components/auth/Input";
import { validateNotEmpty } from "@/app/libs/helper";
import WelcomeInfoContainer2 from "@/app/components/auth/signup/WelcomeInfoContainer2";
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
  const { lightMode } = useLightMode();
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    trigger,
    setError,
  } = useForm<FormType>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isComplete = useCallback(() => {
    //get if the values have been inputed
    const { email, password } = dirtyFields;
    return email && password;
  }, [dirtyFields]);
  const isValid = (e: any) => {
    const keysToCheck: any[] = ["email", "password"];
    trigger(keysToCheck);
    const containsError = keysToCheck.some((key) => Object.keys(errors).includes(key));
    if (containsError) return e.preventDefault();
    return;
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data, e) => {
    e?.preventDefault();
    setIsLoading(true);
    const loading = toast.loading("loading");
    try {
      const signinReq = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (signinReq?.status === 200) {
        toast.dismiss(loading);
        push("/");
        return;
      }
      if (signinReq?.error === `Email doesn't exist`) {
        setError("email", {
          type: "manual",
          message: "Email doesn't exist",
        });
        toast.dismiss(loading);
        return;
      }
      if (signinReq?.error === `Incorrect Password`) {
        setError("password", {
          type: "manual",
          message: "Incorrect Password",
        });
        toast.dismiss(loading);
        return;
      }
      throw new Error(signinReq?.error);
    } catch (error) {
      toast.error("Something went wrong, try again");
    } finally {
      setIsLoading(false);
    }
  };

  const socialSignInWrapper = async (func: Promise<SignInResponse | undefined>) => {
    const loading = toast.loading("Loading");
    try {
      await func;
      toast.success("Logged in successfully", { id: loading, duration: 1000 });
      // push("/");
      toast.loading("Redirecting", { id: loading });
    } catch (error: any) {
      toast.dismiss(loading);
      toast.error("Something went wrong, try again");
    }
  };
  return (
    <section
      className={`flex-1 h-full md2:w-full shrink-0 overflow-x-hidden overflow-y-auto bg-secondaryBg-10 dark:bg-dark-30 p-8 flex flex-col items-center lg:justify-center`}>
      <WelcomeInfoContainer2
        heading="Sign in to Inkflow"
        key={"mobileWelcome1"}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`w-full sm:w-10/12 lg:w-8/12 sm:mt-9`}>
        <Input
          id="email"
          label="Email"
          register={register}
          inputType="email"
          errors={errors}
          placeholder="example@email.com"
          required={{
            required: "What's your email?",
            validate: (value: string) => validateNotEmpty(value, "What's your email"),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
        />
        <Input
          id="password"
          label="Password"
          inputType="password"
          register={register}
          errors={errors}
          required={{
            required: "Password required?",
            validate: (value: string) => validateNotEmpty(value, "Password required"),
          }}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full h-[50px]  ${isComplete() ? "bg-red-default" : "bg-red-60"} disabled:bg-red-60 rounded-lg cursor-pointer`}
          onClick={(e) => isValid(e)}>
          SUBMIT
        </button>
      </form>
      <p className="text-sm mt-3">
        {`Don't have an account yet?`}{" "}
        <Link
          className="text-red-70 ml-2"
          href={"/auth/signup"}>
          Register
        </Link>
      </p>
      <section className="w-full sm:w-10/12 lg:w-8/12 my-4">
        <OrLine />

        <SocialAuth
          label="Sign in with Google"
          icon="Google"
          onClick={() => socialSignInWrapper(signIn("google"))}
        />
        <SocialAuth
          label="Sign in with Facebook"
          icon="Facebook"
          onClick={() => socialSignInWrapper(signIn("facebook"))}
        />
      </section>
    </section>
  );
};

export default DataFields;
