"use client";
import React, { FC, useState } from "react";
import { Edit, Trash } from "@/app/components/Icons";
import Link from "next/link";
import { ContentControlType } from "../types/client";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { capitalizeFirstLetter } from "../libs/helper";

const ContentControl: FC<ContentControlType> = (props) => {
  const { contentType, contentId } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { refresh } = useRouter();
  const deletePost = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const loadingToast = toast.loading(`Deleting ${contentType}...`);
    try {
      const d = await axios.post(`/api/${contentType}/${contentId}/delete`);
      toast.remove(loadingToast);
      toast.success(`${contentType} deleted successfully`);
      refresh();
    } catch (error: any) {
      toast.dismiss();
      if (error.message.includes("403")) {
        toast.error("User not authenticated 🔒");
        return;
      }
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="lg3a:w-10 w-full flex-shrink-0 min-w-[305px] h-fit lg3a:sticky lg3a:top-[55px]">
      <ul className="flex flex-col bg-dark-30 rounded-xl p-2">
        <Link href={`/${contentType}${contentType !== "post" ? "s" : ""}/${contentId}/edit/`}>
          <li className="flex px-2 py-3 hover:bg-dark-40 cursor-pointer rounded-lg gap-3">
            <Edit /> <p>{`Edit ${capitalizeFirstLetter(contentType)}`}</p>
          </li>
        </Link>
        <li
          onClick={deletePost}
          className="flex px-2 py-3 hover:bg-dark-40 cursor-pointer rounded-lg gap-3 text-red-80">
          <Trash /> <p>{`Delete ${capitalizeFirstLetter(contentType)}`}</p>
        </li>
      </ul>
    </section>
  );
};

export default ContentControl;
