"use client";
import { Dispatch, FC, SetStateAction, useRef } from "react";
import Modal from "react-responsive-modal";
import { Home, Interviews, Post } from "../../Icons";
import { default as ImageUploadInput } from "../../inputs/ImageUpload";
import { NewCreationFormType } from "@/app/(main)/create/CreateClient";
import { useFormContext } from "react-hook-form";
interface ImageUploadProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const ImageUpload: FC<ImageUploadProps> = ({ open, setOpen }) => {
    const { setValue,getValues } = useFormContext<NewCreationFormType>();
    const myRef = useRef(null);

    const setCustomValue = (value: any) => {
        setValue('coverImage', value, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true
        })
      }
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
        <ImageUploadInput
          onChange={(value) => setCustomValue(value) }
          value={getValues('coverImage')}
        />
      </Modal>
    </>
  );
};

export default ImageUpload;
