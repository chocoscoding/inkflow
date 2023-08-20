"use client";
import React, { FC, useState } from "react";
import Avatar from "@/app/components/Avatar";
import { Edit, Trash } from "@/app/components/Icons";
import Link from "next/link";
import { ContentControlType } from "../types/client";
import toast from "react-hot-toast";
import axios from "axios";

const ContentControl: FC<ContentControlType> = (props) => {
  const { editLink, contentType, contentId } = props;
  const [isLoading, setIsLoading] = useState(false);

  const deetePost = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const loadingToast = toast.loading(`Deleting ${contentType}...`);
    try {
      const removeContent = await axios.delete("/api/content/dsds", {});
      console.log(removeContent);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="lg3a:w-10 w-full flex-shrink-0 min-w-[305px] h-fit lg3a:sticky lg3a:top-[55px]">
      <ul className="flex flex-col bg-dark-30 rounded-xl p-2">
        <Link href={editLink}>
          <li className="flex px-2 py-3 hover:bg-dark-40 cursor-pointer rounded-lg gap-3">
            <Edit /> <p>Edit Post</p>
          </li>
        </Link>
        <li
          onClick={() => {deetePost}}
          className="flex px-2 py-3 hover:bg-dark-40 cursor-pointer rounded-lg gap-3 text-red-80">
          <Trash /> <p>Delete Post</p>
        </li>
      </ul>
    </section>
  );
};

export default ContentControl;
