const Right = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      stroke="#3F4354"
      strokeLinecap="square"
      strokeLinejoin="round"
      d="M8 9h9M5 6h12M5 12h12M8 15h9"
    />
  </svg>
);
export default Right;
