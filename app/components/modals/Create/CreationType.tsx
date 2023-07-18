"use client";
import { Dispatch, FC, ReactNode, SetStateAction, memo, useRef } from "react";
import Modal from "react-responsive-modal";
import { Home, Interviews, Post } from "../../Icons";
import { NewCreationFormType, NewCreationTypes } from "@/app/(main)/create/CreateClient";
import { useFormContext } from "react-hook-form";
interface CreationTypeProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const CreationType: FC<CreationTypeProps> = ({ open, setOpen }) => {
  const { setValue, getValues } = useFormContext<NewCreationFormType>();
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

  const Wrapper = ({ children, creationType }: { children: ReactNode; creationType: NewCreationTypes }) => (
    <div
      className={`cursor-pointer flex gap-4 ${
        getValues("creationType") === creationType ? "text-blue-80 bg-dark-30" : "text-secondary-50"
      } mb-4 p-2.5 rounded-md`}
      onClick={() => {
        setValue("creationType", creationType);
        setOpen(false);
      }}>
      {children}
    </div>
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
          modal: "rounded-md bg-dark-40 h-fit max-h-[80vh] overflow-y-auto min-w-[250px] md:max-w-[400px] xl:max-w-[450px] pt-[3rem]",
          overlay: "backdrop-blur-sm",
          closeButton: "shrink-0 ml-2 text-secondary-50 outline-0",
        }}
        container={myRef.current}>
        <Wrapper creationType="Post">
          <Post />
          <p className="font-bold">Post</p>
        </Wrapper>
        <Wrapper creationType="Meetup">
          <Home />
          <p className="font-bold">Meetup</p>
        </Wrapper>
        <Wrapper creationType="Interview">
          <Interviews />
          <p className="font-bold">Interviews</p>
        </Wrapper>
      </Modal>
    </>
  );
};

export default memo(CreationType);
