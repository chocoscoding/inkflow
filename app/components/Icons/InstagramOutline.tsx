const InstagramOutline = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="#3F4354"
      d="M16.667 0H3.333A3.333 3.333 0 0 0 0 3.333v13.334A3.333 3.333 0 0 0 3.333 20h13.334A3.333 3.333 0 0 0 20 16.667V3.333A3.333 3.333 0 0 0 16.667 0Zm1.666 16.667a1.666 1.666 0 0 1-1.666 1.666H3.333a1.666 1.666 0 0 1-1.666-1.666V3.333a1.666 1.666 0 0 1 1.666-1.666h13.334a1.666 1.666 0 0 1 1.666 1.666v13.334Z"
    />
    <path
      fill="#3F4354"
      d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.333a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666ZM16.667 4.583a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
    />
  </svg>
);
export default InstagramOutline;
