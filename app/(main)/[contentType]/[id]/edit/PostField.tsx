import { DownArrow, Image as I_Image } from "@/app/components/Icons";
import CreationType from "@/app/components/modals/Create/CreationType";
import Groups from "@/app/components/modals/Create/Groups";
import ImageUpload from "@/app/components/modals/Create/ImageUpload";
import React, { useState } from "react";
import { NewCreationFormType } from "./EditClient";
import { useFormContext } from "react-hook-form";
//Author: @codingNinja-1
export type GroupType = {
  id: string;
  name: string;
  image: string;
};

const PostField = () => {
  const [openType, setOpenType] = useState(false);
  const [openGroups, setOpenGroups] = useState(false);
  const [openImageUpload, setOpenImageUpload] = useState(false);
  const [postType, setPostType] = useState<"Post" | "Interview" | "Meetup">("Post");
  const [postGroup, setPostGroup] = useState<GroupType | null>(null);
  const {
    setValue,
    getValues,
    register,
    formState: { errors },
  } = useFormContext<NewCreationFormType>();

  return (
    <section className="flex gap-6 flex-wrap md1:gap-3">
      <div
        className="flex items-center gap-4 p-3 bg-dark-40 rounded-md cursor-pointer"
        {...register("coverImage", {
          required: true,
        })}
        onClick={() => setOpenImageUpload(true)}>
        <I_Image />
        <p className="text-sm">{getValues("coverImage") ? "Change Cover" : "Set Cover"}</p>
        {errors["coverImage"] ? (
          <label
            htmlFor={"coverImage"}
            className=" text-red-600">
            {errors["coverImage"].message || "Required"}
          </label>
        ) : null}
      </div>
      <div
        className="flex items-center gap-2 p-3 bg-dark-40 rounded-md max-w-[300px] cursor-pointer"
        onClick={() => setOpenGroups(true)}>
        <p className="text-sm w-full truncate-lines-1">{getValues("group.name") || "Select Group"}</p>
        <DownArrow className="shrink-0" />
      </div>

      <ImageUpload
        open={openImageUpload}
        setOpen={setOpenImageUpload}
        postType={postType}
        setPostType={setPostType}
      />
      <Groups
        open={openGroups}
        setOpen={setOpenGroups}
        group={postGroup}
      />
    </section>
  );
};

export default PostField;
