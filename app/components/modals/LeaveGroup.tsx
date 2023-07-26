"use client";
import React, { Dispatch, FC, SetStateAction, useRef } from "react";
import Modal from "react-responsive-modal";
import { CloseIcon } from "../Icons";
interface LeaveGroupProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
const LeaveGroup: FC<LeaveGroupProps> = ({ open, setOpen }) => {
  const myRef = useRef(null);
  return (
    <>
      <div ref={myRef} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        closeIcon={CloseIcon}
        classNames={{
          modal: "rounded-md bg-dark-40 h-fit max-h-[80vh] overflow-y-auto min-w-[250px] md:max-w-[400px] xl:max-w-[450px] pt-[3rem]",
          overlay: "backdrop-blur-sm",
          closeButton: "shrink-0 ml-2 text-secondary-50 outline-0",
        }}
        container={myRef.current}>
        <p>Are you sure you want to leave ?</p>
        <div className="flex w-full max-w-[300px] justify-between mt-4">
          <button className="w-6/12 rounded-md bg-blue-default py-2">Leave</button>
          <button
            className="w-6/12 py-2 text-secondary-30"
            onClick={() => setOpen(false)}>
            Cancle
          </button>
        </div>
      </Modal>
    </>
  );
};

export default LeaveGroup;
