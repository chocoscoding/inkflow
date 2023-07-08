"use client";
import React, { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <input
      type="checkbox"
      className="form-checkbox h-5 w-5 bg-white-100 text-white-100 accent-red-80 border-none focus:border-2 focus:border-white scale-75"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
};

export default Checkbox;
