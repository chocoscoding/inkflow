"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Plus } from "../Icons";
import Spinner from "../Spinner";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const renderCount = useRef(0);
  const [loading, setLoading] = useState(true);
  const handleUpload = useCallback(
    (result: any) => {
      setLoading(true);
      onChange(result.info.secure_url);
    },
    [onChange]
  );
  useEffect(() => {
    renderCount.current++;

    if (renderCount.current > 0) {
      setLoading(false);
    }
  }, [value]);

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
        multiple: false,
        clientAllowedFormats: ["image"],
        maxFileSize: 15728640,
      }}>
      {({ open }) => {
        if (loading) {
          return (
            <div
              className="relative
            cursor-pointer
            hover:opacity-70
            transition
            border-dashed 
            border-2 
            p-20 
            border-neutral-300
            flex
            flex-col
            justify-center
            items-center
            gap-4
            text-neutral-600">
              <Spinner />
            </div>
          );
        }
        return (
          <div
            onClick={() => (open ? open() : () => {})}
            className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              p-20 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            ">
            <Plus size={50} />
            <div className="font-semibold text-lg">Click to upload</div>
            {value && (
              <div
                className="
              absolute inset-0 w-full h-full">
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                  alt="House"
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
