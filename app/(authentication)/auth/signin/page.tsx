import React from "react";
import SignInClient from "./SignInClient";

const page = () => {
  return (
    <div>
      <SignInClient />
    </div>
  );
};

export default page;

page.Auth = {
  authorized: '/'
}
