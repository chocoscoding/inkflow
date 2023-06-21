import * as React from "react";
const SVGComponent = (props: { className?: string }) => (
  <svg
    width={12}
    height={8}
    viewBox="0 0 12 8"
    fill="none"
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M10 0H2C1.17595 0 0.705573 0.940764 1.2 1.6L5.2 6.93333C5.6 7.46667 6.4 7.46667 6.8 6.93333L10.8 1.6C11.2944 0.940764 10.824 0 10 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SVGComponent;
