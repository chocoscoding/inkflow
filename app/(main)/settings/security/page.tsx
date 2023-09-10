import React from "react";
import SecurityClient from "./SecurityClient";
import getCurrentUser from "@/app/actions/getCurrentUser";

const page = async () => {
  const userPassword = await getCurrentUser(["password"]);
  const userHasPassword = !!userPassword;
  if (userHasPassword === null) {
    <div className="border-l border-secondary-30 md3:border-none w-full">
      <section className="pl-5 w-full">
        <p>No account found</p>
      </section>
    </div>;
  }
  return (
    <div className="border-l border-secondary-30 md3:border-none w-full">
      <SecurityClient userHasPassword={userHasPassword} />
    </div>
  );
};

export default page;
