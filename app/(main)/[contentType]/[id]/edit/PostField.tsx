import { DownArrow, Image as I_Image } from "@/app/components/Icons";
import CreationType from "@/app/components/modals/Create/CreationType";
import Groups from "@/app/components/modals/Create/Groups";
import ImageUpload from "@/app/components/modals/Create/ImageUpload";
import React, { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { NewCreationFormType, PostFieldType } from "@/app/types/client";
//Author: @codingNinja-1
export type GroupType = {
  id: string;
  name: string;
  image: string;
};
const PostField: FC<PostFieldType> = ({ guf, editing }) => {
  const [openType, setOpenType] = useState(false);
  const [openGroups, setOpenGroups] = useState(false);
  const [openImageUpload, setOpenImageUpload] = useState(false);
  const [postType, setPostType] = useState<"Post" | "Interview" | "Meetup">("Post");
  const {
    setValue,
    getValues,
    register,
    formState: { errors },
  } = useFormContext<NewCreationFormType>();

  const Modals = () => {
    if (editing)
      return (
        <>
          <ImageUpload
            open={openImageUpload}
            setOpen={setOpenImageUpload}
          />
          <Groups
            open={openGroups}
            setOpen={setOpenGroups}
            groups={guf || []}
          />
        </>
      );
    return (
      <>
        <ImageUpload
          open={openImageUpload}
          setOpen={setOpenImageUpload}
        />
        <Groups
          open={openGroups}
          setOpen={setOpenGroups}
          groups={guf || []}
        />
        <CreationType
          open={openType}
          setOpen={setOpenType}
        />
      </>
    );
  };
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
      {editing ? null : (
        <div
          className="flex items-center gap-2 p-3 bg-dark-40 rounded-md cursor-pointer"
          onClick={() => setOpenType(true)}>
          <p className="text-sm text-secondary-30">
            Create-<span className="text-white">{getValues("creationType")}</span>
          </p>
          <DownArrow />
        </div>
      )}
      <Modals />
    </section>
  );
};

export default PostField;
