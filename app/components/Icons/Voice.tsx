const Voice = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      stroke="#3F4354"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.181 19v-3.176"
    />
    <path
      stroke="#3F4354"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.183 11.823v0c-2.057 0-3.724-1.538-3.724-3.436v-3.95C6.458 2.54 8.126 1 10.183 1c2.057 0 3.724 1.54 3.724 3.438v3.949c0 1.898-1.667 3.436-3.724 3.436Z"
      clipRule="evenodd"
    />
    <path
      stroke="#3F4354"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.381 8.53c0 3.898-3.223 7.058-7.2 7.058-3.976 0-7.2-3.16-7.2-7.058"
    />
  </svg>
);
export default Voice;
