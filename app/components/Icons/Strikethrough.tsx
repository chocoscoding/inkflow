const Strikethrough = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="currentColor"
      d="M11.914 4.818h1.233v6.742c0 .696-.164 1.317-.492 1.864a3.446 3.446 0 0 1-1.377 1.288c-.593.311-1.29.467-2.088.467-.799 0-1.495-.156-2.088-.467a3.482 3.482 0 0 1-1.382-1.288c-.325-.547-.488-1.168-.488-1.864V4.818h1.233v6.642c0 .497.11.94.329 1.328.218.384.53.687.934.91.408.218.895.328 1.462.328s1.054-.11 1.462-.329a2.31 2.31 0 0 0 .934-.91c.219-.387.328-.83.328-1.327V4.818Z"
    />
    <path
      fill="currentColor"
      d="M4 10h11v1H4z"
    />
  </svg>
);
export default Strikethrough;
