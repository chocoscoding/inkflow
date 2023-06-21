const Point = (props: { className?: string }) => (
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
      d="M8 9h9M5 9h1M8 6h9M5 6h1M8 12h9M5 12h1M8 15h9M5 15h1"
    />
  </svg>
);
export default Point;
