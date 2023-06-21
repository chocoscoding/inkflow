const Follow = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="currentColor"
      d="M13 5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
    />
    <path
      fill="currentColor"
      d="M12 9c-.764.578-1.973 1-3 1-1.047 0-2.228-.401-3-1-4.898 1.179-5.09 5.234-4.992 8.979.017.62.364 1.021.992 1.021h9v-3c0-1.019.307-2 2-2h3.5c0-3-2-5-4.5-5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 17h6m0 0-1.5-1.5M19 17l-1.5 1.5"
    />
  </svg>
);
export default Follow;
