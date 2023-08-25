"use client";
import { Dispatch, FC, SetStateAction, useRef } from "react";
import Modal from "react-responsive-modal";
import { Home, Interviews, Post } from "../../Icons";
import Image from "next/image";
import GroupList from "../../GroupList";
import { GroupUserFollow } from "@/app/types/client";

interface GroupsProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  groups: GroupUserFollow[];
}

const Groups: FC<GroupsProps> = ({ open, setOpen, groups }) => {
  const myRef = useRef(null);

  const closeIcon = (
    <svg
      width="28"
      height="28"
      viewBox="0 0 36 36">
      <path
        fill="currentColor"
        d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
    </svg>
  );

  return (
    <>
      <div ref={myRef} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        closeIcon={closeIcon}
        classNames={{
          modal: "rounded-md bg-dark-40 h-fit max-h-[80vh] overflow-y-auto min-w-[250px] sm:max-w-[400px] xl:max-w-[450px] pt-[3rem]",
          overlay: "backdrop-blur-sm",
          closeButton: "shrink-0 ml-2 text-secondary-50 outline-0",
        }}
        container={myRef.current}>
        {groups.length <= 0 ? (
          <GroupList
            setOpen={setOpen}
            none
          />
        ) : null}
        {groups.map((ele, i) => (
          <GroupList
            key={`groupslist-${i}`}
            {...ele}
            setOpen={setOpen}
          />
        ))}
      </Modal>
    </>
  );
};

export default Groups;
