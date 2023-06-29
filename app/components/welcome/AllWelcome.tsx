import useWelcomeSteps from "@/app/hooks/useWelcomeSteps";
import React from "react";
import WelcomeInfoContainer from "../auth/signup/WelcomeInfoContainer";
import WelcomeInfoNode from "../auth/WelcomeInfoNode";

const AllWelcome = () => {
  const { steps } = useWelcomeSteps();

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
  if (steps === 2)
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
  if (steps === 3)
    return (
      <WelcomeInfoContainer
        key={"welcome1"}
        heading="Join a thriving community of entrepreneurs and developers.">
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
      key={"welcome4"}
      heading="Connect with other indie hackers running online businesses.">
      <WelcomeInfoNode
        lightMode
        color="red"
        icon="Business"
        label="Connect with other indie hackers running online businesses."
      />
      <WelcomeInfoNode
        lightMode
        color="yellow"
        icon="Chat"
        label="Get feedback on your business ideas, landing pages, and more."
      />
      <WelcomeInfoNode
        lightMode
        color="blue"
        icon="Inbox"
        label="Get the best new stories from founders in your inbox."
      />
    </WelcomeInfoContainer>
  );
};

export default React.memo(AllWelcome);
