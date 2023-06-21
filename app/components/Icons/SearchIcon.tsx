const SearchIcon = (props: { className?: string; weight?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    className={props.className}
    {...props}>
    <circle
      cx={10}
      cy={9}
      r={8}
      stroke="currentColor"
      strokeWidth={props.weight || 2}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={props.weight || 2}
      d="m15.5 15.5 4 4"
    />
  </svg>
);
export default SearchIcon;
