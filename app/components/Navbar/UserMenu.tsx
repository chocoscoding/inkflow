"use client";
import { motion } from "framer-motion";
import Avatar from "../Avatar";
import { ArrowDown } from "../Icons";
import MenuItem from "./MenuItem";
import ModeToggler from "./ModeToggler";
import useNavigation from "@/app/hooks/useNavigation";
import { useRouter } from "next/navigation";
import { NavbarProps } from "./Navbar";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Skeleton from "react-loading-skeleton";
const UserMenu: React.FC<NavbarProps> = ({ currentUser }) => {
  const { isOpen, onOpen, onClose } = useNavigation();
  const { push } = useRouter();
  const [isOpenAnimated, setIsOpenAnimated] = useState(isOpen);
  const { data: session, status } = useSession();
  const toggle = () => {
    if (isOpen) return onClose();
    return onOpen();
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  useEffect(() => {
    if (isOpen) return setIsOpenAnimated(true);
    const timeout = setTimeout(() => {
      setIsOpenAnimated(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
    };
    window.addEventListener("keydown", handleEscKeyPress);
    return () => {
      window.removeEventListener("keydown", handleEscKeyPress);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (status === "loading" ) {
    return (
      <section className="flex items-center xl1:gap-2 gap-4 dark:text-secondary-60 cursor-pointer h-full">
        <div className=" rounded-md xl1:scale-75 h-full overflow-hidden">
          <Skeleton className="h-[90%] w-[30px]" />
        </div>
        <p className="font-semibold xl1:text-[10px] text-secondary-10 dark:text-secondaryBg-10">
          <Skeleton width={50} />
        </p>
      </section>
    );
  }
  return (
    <>
      <section
        className="flex items-center xl1:gap-2 gap-4 dark:text-secondary-60 cursor-pointer"
        onClick={toggle}>
        <div className="outline outline-yellow-default rounded-md xl1:scale-75">
          <Avatar src={currentUser?.image} />
        </div>
        <p className="font-semibold xl1:text-[10px] text-secondary-10 dark:text-secondaryBg-10">{currentUser?.username || "Login"}</p>
        <span>
          <ArrowDown className={`text-secondary-40 dark:text-secondary-60 transition-all ${isOpen ? "rotate-180" : ""}`} />
        </span>
      </section>
      {isOpenAnimated ? (
        <motion.section
          className="absolute rounded-lg shadow-md w-[33vw] sm:w-[25vw] max-w-[250px] min-w-[200px] bg-secondaryBg-10 dark:bg-dark-10 dark:border-dark-40 dark:text-secondaryBg-20 text-secondary-20 border-[1px] overflow-hidden right-0 top-[3.3rem] text-sm"
          initial="hidden"
          animate={isOpen ? "visible" : "exit"}
          exit={"exit"}
          variants={itemVariants}
          transition={{ duration: 0.1, ease: "easeOut", staggerChildren: 0.1 }}>
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => push("/profile/me")}
                  label="Profile"
                />
                <MenuItem
                  onClick={() => push("/settings")}
                  label="Settings"
                />
                <MenuItem
                  onClick={() => signOut()}
                  label="Log out"
                />
              </>
            ) : (
              <>
                <Link href={`/auth/signin`}>
                  <MenuItem
                    onClick={() => {}}
                    label="Login"
                  />
                </Link>
                <Link href={`/auth/signup`}>
                  <MenuItem
                    onClick={() => {}}
                    label="Signup"
                  />
                </Link>
              </>
            )}
            <motion.div className="border-t border-secondaryBg-20 dark:border-gray-700 mx-4 my-1"></motion.div>
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
        </motion.section>
      ) : null}
    </>
  );
};

export default UserMenu;
