"use client";

import toast from "react-hot-toast";

export const AuthFunction = (func: any, status: "loading" | "authenticated" | "unauthenticated") => {
  if (status === "loading") return;
  if (status === "authenticated") {
      return func(); // Call the function as a promise
  }
  if (status === "unauthenticated") {
    toast.error("Login to do this", { duration: 2500 });
    return;
  }
};
