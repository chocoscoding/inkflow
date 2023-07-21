import { FC } from "react";
import { useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { NewCreationFormType } from "../(main)/create/CreateClient";
interface EditorProps {
  className: string;
  placeholder: string;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image"]; 

const Editor: FC<EditorProps> = ({ placeholder, className }) => {
  const { setValue, getValues, clearErrors } = useFormContext<NewCreationFormType>();

  return (
    <>
      <ReactQuill
        className={className}
        placeholder={placeholder}
        value={getValues("content")}
        onChange={(newValue) => {
          setValue("content", newValue);
          clearErrors("content");
        }}
        modules={modules}
        formats={formats}
      />
    </>
  );
};

export default Editor;
