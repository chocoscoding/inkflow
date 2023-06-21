const Arrow1 = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      stroke="#3F4354"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5.5 1 9 9-9 9"
    />
  </svg>
);
export default Arrow1;
