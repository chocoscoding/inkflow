import React from 'react'
import WelcomeInfoContainer from '../signup/WelcomeInfoContainer';
import WelcomeInfoNode from '../WelcomeInfoNode';
import Logo from '../../Navbar/Logo';
import { useTheme } from 'next-themes';

const WelcomeInfo = () => {
    const { theme } = useTheme();
    return (
      <section className={`w-[45%] lg1:w-[42%] md2:hidden h-full bg-secondaryBg-20 dark:bg-dark-20 p-8 lg1:p-4 flex flex-col`}>
        <span className="shrink-0">
          <Logo
            lightMode={theme === "light"}
            noMarginLeft
          />
        </span>
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
      </section>
    );
}

export default WelcomeInfo