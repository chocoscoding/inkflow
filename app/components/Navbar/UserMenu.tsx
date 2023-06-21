"use client";
import { motion } from "framer-motion";
import Avatar from "../Avatar";
import { ArrowDown } from "../Icons";
import MenuItem from "./MenuItem";
import ModeToggler from "./ModeToggler";
import useNavigation from "@/app/hooks/useNavigation";

const UserMenu = () => {
  const { isOpen, onOpen, onClose } = useNavigation();

  const toggle = () => {
    if (isOpen) return onClose();
    return onOpen();
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <section
        className="flex items-center xl1:gap-2 gap-4 text-secondary-60 cursor-pointer"
        onClick={toggle}>
        <div className="outline outline-yellow-30 rounded-md xl1:scale-75">
          <Avatar />
        </div>
        <p className="font-bold xl1:text-[10px]">Timileyinwandf</p>
        <span>
          <ArrowDown className={`text-secondary-60 ${isOpen ? "rotate-180" : ""}`} />
        </span>
      </section>
      {isOpen ? (
        <motion.div
          className="absolute rounded-lg shadow-md w-[33vw] sm:w-[25vw] max-w-[250px] min-w-[200px] bg-dark-10 border-dark-40 text-secondaryBg-20 border-[1px] overflow-hidden right-4 top-[3.3rem] text-sm"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          transition={{ duration: 0.1, ease: "easeOut", staggerChildren: 0.2 }}>
          <div className="flex flex-col cursor-pointer">
            <MenuItem
              onClick={() => {}}
              label="Login"
            />
            <MenuItem
              onClick={() => {}}
              label="Signup"
            />
            <motion.div className="border-t border-gray-700 mx-4 my-1"></motion.div>
            <MenuItem
              onClick={() => {}}
              noHover
              label={
                <div className="flex items-center justify-between">
                  Interface
                  <ModeToggler />
                </div>
              }
            />
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default UserMenu;
