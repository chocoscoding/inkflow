const Plus = (props: { className?: string, size?:number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24 || props.size}
    height={24 || props.size}
    fill="none"
    className={props.className}
    {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 5v14m-7-7h14"
    />
  </svg>
);
export default Plus;
