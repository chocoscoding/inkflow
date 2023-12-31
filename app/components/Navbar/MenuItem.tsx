"use client";
import { motion, Variants } from "framer-motion";
import { FC, ReactNode, memo } from "react";
interface MenuItemsProps {
  onClick: () => void;
  label: string | ReactNode;
  noHover?: boolean;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const MenuItem: FC<MenuItemsProps> = ({ onClick, label, noHover }) => {
  return (
    <motion.div
      variants={itemVariants}
      onClick={onClick}
      transition={{ duration: 0.1, ease: "backIn" }}
      className={`px-4 py-3 ${
        noHover
          ? ""
          : "sm:hover:bg-secondaryBg-20 sm:dark:hover:bg-dark-20 dark:active:hover:brightness-125 active:hover:brightness-95 select-none"
      } 
      transition font-semibold`}>
      {label}
    </motion.div>
  );
};

export default memo(MenuItem);
