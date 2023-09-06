"use client";
import { More } from "@/app/components/Icons";
import Ripple from "@/app/components/Ripple";
import Image from "next/image";
import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import Dropdown from "@/app/components/Dropdown";
import { ListGroupProps } from "@/app/types/client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const OneMemeber: React.FC<ListGroupProps> = ({ admin, id, username, image }) => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { refresh } = useRouter();
  const banUser = async (typeOfAction: "Remove" | "Remove and Ban") => {
    toast.dismiss();
    setIsLoading(true);
    toast.loading("Processing...");

    let axiosCall;
    if (typeOfAction === "Remove and Ban") {
      axiosCall = axios.post(`/api/group/${params?.id}/manage/Remove`, {
        ban: true,
        memberId: id,
      });
    } else {
      axiosCall = axios.post(`/api/group/${params?.id}/manage/Remove`, {
        memberId: id,
      });
    }
    try {
      const action = await axiosCall;
      console.log(action);
      toast.dismiss();
      if (action.status === 200) {
        refresh();
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error: any) {
      toast.dismiss();
      if (error.message.includes("400")) {
        toast.error("User is not admin");
      } else if (error.message.includes("403")) {
        toast.error("User is not authenticated 🔒");
      } else if (error.message.includes("401")) {
        toast.error("Cant perform this action on admin");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <li className="flex justify-between items-center mb-4 border-b border-secondary-20 pb-2">
      <div className="flex flex-1 mr-3 sm:mr-4 gap-2 sm:gap-4">
        <div className="w-[50px] h-[50px]  rounded-full overflow-hidden object-cover shrink-0">
          <Image
            src={image || `/images/placeholder.jpg`}
            width={50}
            height={50}
            alt="group-img"
            className="h-full w-auto"
          />
        </div>

        <div className="flex w-full gap-1 items-center">
          <Link href={`/profile/${id}`}>
            <p className="sm:font-medium text-base lg:text-lg md:truncate-lines-2 truncate-lines-4">{`@${username}`}</p>
          </Link>
          {admin ? (
            <p className="text-sm text-gray-400">
              <span className="bg-dark-20 w-fit rounded-md p-1 ml-2">Admin</span>
            </p>
          ) : null}
        </div>
      </div>

      {/* list and dropdown  */}
      {admin ? null : (
        <Dropdown
          key={`dropdown_Members_${id}`}
          keyName={`dropdown_Members_${id}`}
          triggerButton={
            <div className="w-10 h-10 rounded-full cursor-pointer lg:hover:bg-dark-30 flex-center ">
              <More className="" />
            </div>
          }
          elementLists={[
            { label: "Remove", onClick: () => banUser("Remove") },
            { label: "Ban and Remove", onClick: () => banUser("Remove and Ban") },
          ]}
        />
      )}
    </li>
  );
};

export default OneMemeber;
