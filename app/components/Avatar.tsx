"use client";

import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
  className?: string;
}
const Avatar: React.FC<AvatarProps> = ({ src, className }) => {
  return (
    <Image
      className={`m-[2px] select-none  ${className || "rounded-md"}`}
      height={30}
      width={30}
      alt="avatar"
      src={src || `/images/placeholder.jpg`}
    />
  );
};

export default Avatar;
