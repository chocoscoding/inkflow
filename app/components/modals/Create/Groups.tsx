"use client";
import { Dispatch, FC, SetStateAction, useRef } from "react";
import Modal from "react-responsive-modal";
import { Home, Interviews, Post } from "../../Icons";
import Image from "next/image";
import { GroupType } from "@/app/(main)/create/PostField";
import GroupList from "../../GroupList";

interface GroupsProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  group: GroupType | null;
}

const GROUPS = [
  {
    id: "1efg34h2",
    name: "fajklfjlakjfklajwkljkjakfjkljeflkj f fewklfjeklw sjfkljresklf",
    image:
      "https://images.unsplash.com/photo-1635006459494-c9b9665a666e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
  },
  {
    id: "p02ghr8c",
    name: "fjelkrsdjflkjklfje ej fjlkersjlfk",
    image:
      "https://images.unsplash.com/photo-1635006459494-c9b9665a666e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
  },
  {
    id: "5htg94r2",
    name: "kre frdg dd ljldkjglk aegh sejfuihjkwhfiuw kjfhwiuhrfjkw hibuwiu egbkjw4tghjbwri3ih  h f fhfhiuewshjkfshkjfhskj",
    image:
      "https://images.unsplash.com/photo-1635006459494-c9b9665a666e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
  },
  // Continue adding more elements up to Group 20
  {
    id: "l37tg1s0",
    name: "Group 4 fei outio4 tfewfjjefjselkf fiowjfkljrf fwekjfk j rowjfsejklfjsejfws flkesjfklwsjflkwse jfw l fw joiflk lkw l i jjo",
    image:
      "https://images.unsplash.com/photo-1635006459494-c9b9665a666e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
  },
];
const Groups: FC<GroupsProps> = ({ open, setOpen, group }) => {
  
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
        <GroupList
          setOpen={setOpen}
          none
        />
        {GROUPS.map((ele, i) => (
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
