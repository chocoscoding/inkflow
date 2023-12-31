import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { GroupType } from "../(main)/create/PostField";
import { useFormContext } from "react-hook-form";
import { NewCreationFormType } from "../(main)/create/CreateClient";
import { GroupUserFollow } from "../types/client";
interface GroupListType {
  setOpen: Dispatch<SetStateAction<boolean>>;
  group?: { id: string; coverImage: string | null; name: string };
}
const GroupList: React.FC<GroupListType> = ({ group, setOpen }) => {
  const { setValue } = useFormContext<NewCreationFormType>();
  if (!group)
    return (
      <div
        className="flex gap-2 border-0 border-b-[1px] p-2 border-secondary-20 items-center hover:bg-dark-20 last:border-b-0 cursor-pointer"
        onClick={() => {
          setValue("group", null);
          setOpen(false);
        }}>
        <p className="truncate-lines-2 h-fit">Post on no group</p>
      </div>
    );
  return (
    <div
      className="flex gap-2 border-0 border-b-[1px] p-2 border-secondary-20 items-center hover:bg-dark-20 last:border-b-0 cursor-pointer"
      onClick={() => {
        setValue("group", { id: group?.id, name: group?.name, image: group.coverImage || "" });
        setOpen(false);
      }}>
      <div className="w-[40px] h-[40px] object-cover overflow-hidden rounded-md flex-shrink-0">
        <Image
          src={group.coverImage || `/images/placeholder.jpg`}
          className=""
          alt={`profile_Image`}
          width={50}
          height={40}
        />
      </div>
      <p className="truncate-lines-2 h-fit">{group.name}</p>
    </div>
  );
};

export default GroupList;
