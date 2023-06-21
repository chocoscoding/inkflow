import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { Sun, Night } from "../Icons";
import useLightMode from "@/app/hooks/useLightMode";

const style = {
  iconStyle: `h-[1.25rem] w-[1.3rem]`,
  iconContainer: `flex h-[30px] w-[30px] items-center justify-center rounded-full bg-dark-20 absolute`,
};
const ModeToggler = () => {
  const { lightMode, toggleLight, toggleDark } = useLightMode();

  const [isOnSlow, setIsOnSlow] = useState<boolean>(lightMode);

  useEffect(() => {
    const x = setTimeout(() => {
      setIsOnSlow(lightMode);
    }, 400);
    return () => clearTimeout(x);
  }, [lightMode]);

  const toggleSwitch = () => {
    if (lightMode) return toggleDark();
    return toggleLight();
  };

  const ballAnimation = useCallback(() => {
    if (lightMode) return "41px";
    return "4px";
  }, [lightMode]);
  return (
    <div
      onClick={toggleSwitch}
      className="flex-start flex h-[35px] w-[75px] rounded-[50px] bg-dark-30 p-[5px] shadow-inner hover:cursor-pointer transition items-center relative">
      <motion.div
        transition={{ ease: "easeIn" }}
        className={style.iconContainer}
        animate={{ right: ballAnimation() }}
        layout>
        {lightMode ? (
          <motion.div
            initial={{ opacity: 0, rotate: 0, className: "text-secondary-50" }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 1 }}>
            <Sun className={`${style.iconStyle} text-yellow-300`} />
          </motion.div>
        ) : null}
        {!lightMode ? (
          <motion.div
            initial={{ opacity: 0, rotate: 0, className: "text-secondary-50" }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 1 }}>
            <Night className={`${style.iconStyle} text-blue-dark-90`} />
          </motion.div>
        ) : null}
      </motion.div>
      <div
        className={`${style.iconContainer} text-secondary-50 opacity-25 transition-all transitionDelayed left-[4px] ${
          isOnSlow ? "hidden" : ""
        }`}>
        <Sun className={style.iconStyle} />
      </div>
      <div
        className={`${style.iconContainer} text-secondary-50 opacity-25 transition-all transitionDelayed right-[4px] ${
          !isOnSlow ? "hidden" : ""
        }`}>
        <Night className={style.iconStyle} />
      </div>
    </div>
  );
};

export default ModeToggler;
