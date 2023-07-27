"use client";
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Ripple from "@/app/components/Ripple";
import Link from "next/link";
interface MoreButtonProps {
  label:string;
  newPath: string;
}
const MoreButton:FC<MoreButtonProps> = ({label, newPath}) => {
  const pathname = usePathname();
  return (
    <Ripple containerClassName="outline outline-1 hover:outline-2 md:hover:bg-dark-20 outline-neutral-200 w-full m-auto block mt-2">
      <Link href={`${pathname}${newPath}`}>
        <button className="shrink-0 h-8 rounded-full sm1:text-xs outline outline-1 hover:outline-2 md:hover:bg-dark text-gray-400 w-full select-none">
          {label}
        </button>
      </Link>
    </Ripple>
  );
};

export default MoreButton;
