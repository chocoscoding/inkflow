"use client";
import React, { useCallback, useState } from "react";
import { Arrow, BackArrow, SearchIcon } from "../Icons";
import useSearchModal from "@/app/hooks/useSearchModal";

const SearchInput = () => {
  const { isOpen, onOpen, onClose } = useSearchModal();
  const conditionalStyleForm = useCallback(
    () => (isOpen ? "md2:absolute md2:max-w-none md2:right-0 md2:m-0 md2:h-full md2:rounded-none md2:top-0 md2:z-20" : "md2:hidden"),
    [isOpen]
  );

  const conditionalStyleButton = useCallback(
    () => (isOpen ? "md2:bg-dark-30 md2:mx-0 md2:ml-1 md2:w-[7%] md2:flex md2:items-center md2:justify-center min-w-[40px]" : ""),
    [isOpen]
  );
  return (
    <form
      className={`flex xl:max-w-[540px] md:max-w-[400px] max-w-[250px]md2:max-w-none w-full overflow-hidden rounded-md bg-dark-40 text-secondary-40 mx-4 h-auto lg1:h-[34px]  ${conditionalStyleForm()}`}>
      {isOpen ? (
        <button
          onClick={onClose}
          type="button"
          className={`flex-shrink-0 mx-2 md2:bg-dark-30 md2:mx-0 md2:w-[7%] md2:flex md2:items-center md2:justify-center min-w-[40px]`}>
          <BackArrow />
        </button>
      ) : null}
      <input
        type="text"
        className={`bg-transparent outline-0 w-full pl-4 font-light`}
        placeholder="Type here to search..."
      />
      <button
        type="submit"
        className={`flex-shrink-0 mx-2 ${conditionalStyleButton()}`}>
        <SearchIcon className="md2:scale-75" />
      </button>
    </form>
  );
};

export default SearchInput;
