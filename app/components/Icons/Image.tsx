const Image = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.01 3.5c-.487 0-.51 0-.51.472v12.056c0 .473.023.472.51.472l15.99.106c.488 0 .5-.105.5-.578V3.972c0-.473-.012-.472-.5-.472H3.01Zm-2.033.472C.977 2.882 1.887 2 3.01 2h15.711c1.124 0 2.034.883 2.034 1.972v12.056c0 1.09-.91 1.972-2.034 1.972H3.011c-1.124 0-2.034-.883-2.034-1.972V3.972Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m16.802 15-2.72-6-3.38 4.371-2.472-2.828L4.934 15h11.868ZM7.9 6.5C7.9 7.33 7.238 8 6.418 8c-.82 0-1.483-.671-1.483-1.5 0-.828.664-1.5 1.483-1.5.82 0 1.484.672 1.484 1.5Z"
    />
  </svg>
);
export default Image;
