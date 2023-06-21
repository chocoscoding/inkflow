const Close = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="currentColor"
      d="m11.181 10 2.653 2.652a.833.833 0 0 1-1.179 1.179l-2.652-2.652L7.35 13.83a.833.833 0 0 1-1.179-1.179L8.825 10 6.172 7.348A.833.833 0 0 1 7.35 6.168l2.652 2.652 2.652-2.652a.833.833 0 0 1 1.179 1.179L11.18 10Zm-1.178 10c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Zm0-1.667a8.333 8.333 0 1 0 0-16.666A8.333 8.333 0 0 0 1.67 10a8.333 8.333 0 0 0 8.333 8.333Z"
    />
  </svg>
);
export default Close;
