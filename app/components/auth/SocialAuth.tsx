import React from "react";
import { Facebook, Google } from "../Icons/Icon";

interface SocialAuthType {
  label: string;
  onClick: () => void;
  icon: "Google" | "Facebook";
}
const SocialAuth: React.FC<SocialAuthType> = ({ label, onClick, icon }) => {
  const icons = {
    Google: <Google className="dark:text-secondaryBg-10 text-secondary-20" />,
    Facebook: <Facebook className="dark:text-secondaryBg-10 text-secondary-20" />,
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
