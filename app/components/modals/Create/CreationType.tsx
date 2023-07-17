"use client";
import { Dispatch, FC, SetStateAction, useRef } from "react";
import Modal from "react-responsive-modal";
import { Home, Interviews, Post } from "../../Icons";
interface CreationType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  postType: "Post" | "Interview" | "Meetup";
  setPostType: Dispatch<SetStateAction<"Post" | "Interview" | "Meetup">>;
}
const CreationType: FC<CreationType> = ({ open, setOpen, postType, setPostType }) => {
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
          modal: "rounded-md bg-dark-40 h-fit max-h-[80vh] overflow-y-auto min-w-[250px] md:max-w-[400px] xl:max-w-[450px] pt-[3rem]",
          overlay: "backdrop-blur-sm",
          closeButton: "shrink-0 ml-2 text-secondary-50 outline-0",
        }}
        container={myRef.current}>
        <div
          className={`cursor-pointer flex gap-4 ${
            postType === "Post" ? "text-blue-80 bg-dark-30" : "text-secondary-50"
          } mb-4 p-2.5 rounded-md`}
          onClick={() => setPostType("Post")}>
          <Post />
          <p className="font-bold">Post</p>
        </div>
        <div
          className={`cursor-pointer flex gap-4 ${
            postType === "Meetup" ? "text-blue-80 bg-dark-30" : "text-secondary-50"
          }  mb-4 p-2.5 rounded-md`}
          onClick={() => setPostType("Meetup")}>
          <Home />
          <p className="font-bold">Meetup</p>
        </div>
        <div
          className={`cursor-pointer flex gap-4 ${
            postType === "Interview" ? "text-blue-80 bg-dark-30" : "text-secondary-50"
          }  mb-4 p-2.5 rounded-md`}
          onClick={() => setPostType("Interview")}>
          <Interviews />
          <p className="font-bold">Interviews</p>
        </div>
      </Modal>
    </>
  );
};

export default CreationType;
