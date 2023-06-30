import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { Sun, Night } from "../Icons";
import { useTheme } from "next-themes";

const style = {
  iconStyle: `h-[1.25rem] w-[1.3rem]`,
  iconContainer: `flex h-[30px] w-[30px] items-center justify-center rounded-full bg-secondaryBg-10 dark:bg-dark-20 absolute`,
};
const ModeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [isOnSlow, setIsOnSlow] = useState<boolean>(theme === "light");

  useEffect(() => {
    const x = setTimeout(() => {
      setIsOnSlow(theme === "light");
    }, 100);
    return () => clearTimeout(x);
  }, [theme]);

  const toggleSwitch = () => {
    if (theme === "light") return setTheme("dark");
    return setTheme("light");
  };

  const ballAnimation = useCallback(() => {
    if (theme === "light") return "41px";
    return "4px";
  }, [theme]);
  return (
    <div
      onClick={toggleSwitch}
      className="flex-start flex h-[35px] w-[75px] rounded-[50px] bg-secondaryBg-20 dark:bg-dark-30 p-[5px] shadow-inner dark:shadow-inner-2 hover:cursor-pointer transition items-center relative">
      <motion.section
        transition={{ ease: "easeIn" }}
        className={style.iconContainer}
        animate={{ right: ballAnimation() }}
        layout>
        {theme === "light" ? (
          <motion.div
            initial={{ opacity: 0, rotate: 0, className: "text-secondary-50" }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 1 }}>
            <Sun className={`${style.iconStyle} text-red-80`} />
          </motion.div>
        ) : null}
        {theme === "dark" ? (
          <motion.div
            initial={{ opacity: 0, rotate: 0, className: "text-secondary-50" }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 1 }}>
            <Night className={`${style.iconStyle} text-blue-dark-90`} />
          </motion.div>
        ) : null}
      </motion.section>

      <div
        className={`${
          style.iconContainer
        } text-secondary-40 dark:text-secondary-50 opacity-25 transition-all transitionDelayed left-[4px] ${isOnSlow ? "hidden" : ""}`}>
        <Sun className={style.iconStyle} />
      </div>
      <div
        className={`${
          style.iconContainer
        } text-secondary-40 dark:text-secondary-50 opacity-25 transition-all transitionDelayed right-[4px] ${!isOnSlow ? "hidden" : ""}`}>
        <Night className={style.iconStyle} />
      </div>
    </div>
  );
};

export default ModeToggler;
