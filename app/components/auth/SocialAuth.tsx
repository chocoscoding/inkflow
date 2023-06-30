import React from "react";
import { Google } from "../Icons/Icon";
import Github from "../Icons/Github";

interface SocialAuthType {
  label: string;
  onClick: () => void;
  icon: "Google" | "Github";
}
const SocialAuth: React.FC<SocialAuthType> = ({ label, onClick, icon }) => {
  const icons = {
    Google: <Google className="dark:text-secondaryBg-10 text-secondary-20" />,
    Github: <Github className="dark:text-secondaryBg-10 text-secondary-20" />,
  };
  return (
    <div
      className="flex items-center justify-center gap-4 w-full rounded-lg dark:bg-dark-40 bg-secondary-60 py-4 cursor-pointer mt-4"
      onClick={onClick}>
      {icons[icon]}
      {label}
    </div>
  );
};

export default SocialAuth;
