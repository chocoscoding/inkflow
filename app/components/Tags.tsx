import React from "react";

const Tags: React.FC<{ classname?: string; label: string }> = ({ classname, label }) => {
  return <div className={`rounded-full px-2 py-1 bg-dark-40 ${classname || "text-xss"} text-secondary-40`}>{label}</div>;
};

export default Tags;
