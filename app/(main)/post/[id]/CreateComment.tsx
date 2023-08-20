"use client";
import Avatar from "@/app/components/Avatar";
import { Send } from "@/app/components/Icons";
import { AuthFunction } from "@/app/libs/AuthFunction";
import { CreateCommentType } from "@/app/types/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import toast from "react-hot-toast";

const CreateComment: FC<CreateCommentType> = ({ postId }) => {
  const { data, status } = useSession();
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const submit = async () => {
    try {
      setIsLoading(true);
      const loadingToast = toast.loading("Creating comment...");

      const createPost = await axios.post("/api/comments/create", {
        referenceId: postId,
        userId: data?.user?.id,
        body: comment,
        contentType: "Post",
      });
      toast.remove(loadingToast);
      if (createPost.status === 200) {
        toast.success("Your opinion has been shared 🎊");
        setComment("");
        router.refresh();
        setTimeout(() => {
          window.scrollTo(0, document.body.scrollHeight);
        }, 1000);
      } else {
        toast.error("Something went wrong");
      }
    } catch (e: any) {
      toast.remove();
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={`flex gap-3 p-1 h-fit mb-2 ${isLoading && "opacity-25"}`}>
      <Avatar
        size={42}
        className="rounded-full flex-shrink-0 h-fit"
      />
      <div
        className={`flex gap-3 outline outline-1 outline-secondary-50 w-full items-center min-h-[auto] transition-all p-2 ${
          comment.length > 0 ? "rounded-lg" : "rounded-full"
        }`}>
        <textarea
          value={comment}
          disabled={isLoading}
          onChange={(e) => setComment(e.target.value)}
          rows={1}
          maxLength={1200}
          className={`w-full placeholder-shown:h-fit h-[90px] bg-transparent outline-0 px-2 overflow-y-hidden resize-none `}
          placeholder={status === "unauthenticated" ? 'Login to comment':`Write a new comment here... 🫲`}
        />
        <span
          className="cursor-pointer"
          onClick={() => AuthFunction(() => submit, status)}>
          <Send className="flex-shrink-0" />
        </span>
      </div>
    </div>
  );
};

export default CreateComment;
