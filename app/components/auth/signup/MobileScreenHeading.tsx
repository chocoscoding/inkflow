import React from "react";
import WelcomeInfoContainer2 from "./WelcomeInfoContainer2";
import useSignupSteps from "@/app/hooks/useSignupSteps";

const MobileScreenHeading = () => {
  const { steps } = useSignupSteps();

  return (
    <>
      {steps === 1 ? (
        <WelcomeInfoContainer2
          heading="Tell us a little about yourself!"
          key={"mobileWelcome1"}
        />
      ) : (
        <WelcomeInfoContainer2
          heading="Almost done!"
          key={"mobileWelcome2"}
        />
      )}
    </>
  );
};

export default React.memo(MobileScreenHeading);
