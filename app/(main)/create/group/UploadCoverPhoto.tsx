import { Image as I_Image } from "@/app/components/Icons";
import ImageUpload from "@/app/components/modals/Create/ImageUpload";
import { GroupCreationFormType } from "@/app/types/client";
import React, { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
//Author: @codingNinja-1
export type GroupType = {
  id: string;
  name: string;
  image: string;
};
const UploadCoverPhoto = () => {
  const [openImageUpload, setOpenImageUpload] = useState(false);
  const {
    getValues,
    register,
    formState: { errors },
  } = useFormContext<GroupCreationFormType>();

  return (
    <section className="flex gap-6 flex-wrap md1:gap-3 mb-4">
      <div
        className="flex items-center gap-4 p-3 bg-dark-40 rounded-md cursor-pointer"
        {...register("coverImage", {
          required: true,
        })}
        onClick={() => setOpenImageUpload(true)}>
        <I_Image />
        <p className="text-sm">{getValues("coverImage") ? "Change Cover" : "Set group cover photo"}</p>
        {errors["coverImage"] ? (
          <label
            htmlFor={"coverImage"}
            className=" text-red-600">
            {errors["coverImage"].message || "Required"}
          </label>
        ) : null}
      </div>

      <ImageUpload
        open={openImageUpload}
        setOpen={setOpenImageUpload}
      />
    </section>
  );
};

export default UploadCoverPhoto;
