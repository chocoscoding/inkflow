import React, { ReactNode } from "react";
import { motion } from "framer-motion";
interface WelcomeInfoContainer2Type {
  heading: string;
}

const boxVariants = {
  initial: { y: "-10rem" },
  animate: {
    y: 0,
    transition: { staggerChildren: 0.05, ease: "easeInOut", duration: 0.4 },
  },
};

const WelcomeInfoContainer2: React.FC<WelcomeInfoContainer2Type> = ({ heading }) => {
  return (
    <div className="sm:hidden w-full">
      <motion.section
        className=" self-center flex-1 flex flex-col justify-center  p-1 w-10/12 lg1:w-[95%] max-h-[700px] max-w-[700px]"
        initial="initial"
        animate="animate"
        variants={boxVariants}>
        <h2 className="text-secondary-20 dark:text-secondaryBg-20 font-bold xl:text-3xl text-2xl mb-1 w-full">{heading}</h2>
      </motion.section>
    </div>
  );
};

export default WelcomeInfoContainer2;
