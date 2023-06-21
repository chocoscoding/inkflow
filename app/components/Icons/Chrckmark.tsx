const Chrckmark = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    className={props.className}
    {...props}>
    <rect
      width={16}
      height={16}
      fill="#FF4401"
      rx={2}
    />
    <path
      stroke="#fff"
      strokeWidth={1.5}
      d="M4 8.5 7 11l5-6"
    />
  </svg>
);
export default Chrckmark;
