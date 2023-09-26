import React, { FC } from "react";

const PaginationButton: FC<{ onClick: () => void; label: string; highlight: boolean }> = ({ onClick, label, highlight }) => {
  return (
    <button
      className={`outline outline-2 outline-secondary-20 ${highlight ? "bg-secondary-20" : ""} w-fit px-3 py-1.5 rounded-full`}
      onClick={onClick}>
      {label}
    </button>
  );
};

export default PaginationButton;
