const Arrow = (props: { className?: string }) => (
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
      d="M4 10h12m0 0-4.667-5M16 10l-4.667 5"
    />
  </svg>
);
export default Arrow;
