const Left = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      d="M12 9H3M15 6H3M15 12H3M12 15H3"
    />
  </svg>
);
export default Left;
