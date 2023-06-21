import React from "react";
import { SearchIcon } from "../Icons";

const SearchInput = () => {
  return (
    <form className="flex sm:w-[540px] w-[300px] overflow-hidden rounded-md bg-dark-40 text-secondary-40 mx-4">
      <input
        type="text"
        className={`bg-transparent outline-0 w-full pl-4 font-light`}
        placeholder="Type here to search..."
      />
      <button
        type="submit"
        className={`flex-shrink-0 mx-2`}>
        <SearchIcon weight={1} />
      </button>
    </form>
  );
};

export default SearchInput;
