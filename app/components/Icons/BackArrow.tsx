const BackArrow = (props: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 20}
    height={props.size || 20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 10H4m0 0 4.667-5M4 10l4.667 5"
    />
  </svg>
);
export default BackArrow;
