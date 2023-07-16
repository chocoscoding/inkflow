"use client";

import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
  size?: number;
  className?: string;
}
const Avatar: React.FC<AvatarProps> = ({ src, className, size }) => {
  return (
    <Image
      className={`m-[2px] select-none  ${className || "rounded-md"}`}
      height={size || 30}
      width={size || 30}
      alt="avatar"
      src={src || `/images/placeholder.jpg`}
    />
  );
};

export default Avatar;
