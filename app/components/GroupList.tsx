import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { GroupType } from "../(main)/create/PostField";
interface GroupListType extends GroupType {
  setPostGroup: Dispatch<SetStateAction<GroupType | null>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const GroupList: React.FC<GroupListType> = ({ id, name, image, setPostGroup, setOpen }) => {
  return (
    <div
      className="flex gap-2 border-0 border-b-[1px] p-2 border-secondary-20 items-center last:border-b-0"
      onClick={() => {
        setPostGroup({ id, name, image });
        setOpen(false);
      }}>
      <div className="w-[40px] h-[40px] object-cover overflow-hidden rounded-md flex-shrink-0">
        <Image
          src={image || `/images/placeholder.jpg`}
          className=""
          alt={`profile_Image`}
          width={50}
          height={40}
        />
      </div>
      <p className="truncate-lines-2 h-fit">{name}</p>
    </div>
  );
};

export default GroupList;
