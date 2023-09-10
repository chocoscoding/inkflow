"use client";

import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
  size?: number;
  className?: string;
}
const Avatar: React.FC<AvatarProps> = ({ src, className, size }) => {
  return (
    <div className={`w-[${size}px] h-[${size}px] select-none object-cover ${className || "rounded-md"}`}>
      <Image
        className={`select-none ${className || "rounded-md"} aspect-square`}
        height={size || 30}
        width={size || 30}
        alt="avatar"
        priority
        src={src || `/images/placeholder.jpg`}
      />
    </div>
  );
};

export default Avatar;
