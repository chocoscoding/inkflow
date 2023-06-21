const Uncheck = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    className={props.className}
    {...props}>
    <rect
      width={14}
      height={14}
      x={1}
      y={1}
      stroke="#97989D"
      strokeWidth={2}
      rx={1}
    />
  </svg>
);
export default Uncheck;
