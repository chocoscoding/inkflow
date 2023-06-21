const SearchIcon = (props: { className?: string }) => (
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
      stroke="#3F4354"
      strokeWidth={2}
    />
    <path
      stroke="#3F4354"
      strokeLinecap="round"
      strokeWidth={2}
      d="m15.5 15.5 4 4"
    />
  </svg>
);
export default SearchIcon;
