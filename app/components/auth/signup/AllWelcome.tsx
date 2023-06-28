import React from "react";
import useSignupSteps from "@/app/hooks/useSignupSteps";
import WelcomeInfoContainer from "./WelcomeInfoContainer";
import WelcomeInfoNode from "../WelcomeInfoNode";

const AllWelcome = () => {
  const { steps } = useSignupSteps();

  if (steps === 1)
    return (
      <WelcomeInfoContainer
        key={"welcome1"}
        heading="Tell us a little about yourself!">
        <WelcomeInfoNode
          lightMode
          color="red"
          icon="Rocket"
          label="Help us build the best community for people like you."
        />
        <WelcomeInfoNode
          lightMode
          color="yellow"
          icon="Chat"
          label="See the best content and conversations, tailored to your interests."
        />
      </WelcomeInfoContainer>
    );

  return (
    <WelcomeInfoContainer
      key={"welcome2"}
      heading="Almost done!">
      <WelcomeInfoNode
        lightMode
        color="red"
        icon="Rocket"
        label="Help us build the best community for people like you."
      />
      <WelcomeInfoNode
        lightMode
        color="yellow"
        icon="Chat"
        label="See the best content and conversations, tailored to your interests."
      />
    </WelcomeInfoContainer>
  );
};

export default React.memo(AllWelcome);
