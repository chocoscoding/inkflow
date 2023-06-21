const Midle = (props: { className?: string }) => (
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
      d="M6 9h9M4 6h13M4 12h13M6 15h9"
    />
  </svg>
);
export default Midle;
