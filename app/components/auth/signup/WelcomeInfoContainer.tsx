import React, { ReactNode } from "react";
import { motion } from "framer-motion";
interface WelcomeInfoContainerType {
  heading: string;
  children: ReactNode;
}

const boxVariants = {
  initial: { y: "10rem" },
  animate: {
    y: 0,
    transition: { staggerChildren: 0.05, ease: "easeInOut", duration: 0.4 },
  },
};

const WelcomeInfoContainer: React.FC<WelcomeInfoContainerType> = ({ heading, children }) => {
  return (
    <motion.section
      className=" self-center flex-1 flex flex-col justify-center items-center p-4 lg1:p-2 w-10/12 xl1:w-11/12 lg1:w-[95%] max-h-[700px] max-w-[700px]"
      initial="initial"
      animate="animate"
      variants={boxVariants}>
      <h2 className="text-secondary-20 dark:text-secondaryBg-20 font-bold xl:text-3xl text-2xl mb-7 w-full lg1:text-xl">{heading}</h2>
      {children}
    </motion.section>
  );
};

export default WelcomeInfoContainer;
