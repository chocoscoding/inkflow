const View = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="currentColor"
      d="M10 2C4.63 2 0 7.366 0 10c0 2.634 4.63 8 10 8s10-5.366 10-8c0-2.634-4.63-8-10-8Zm0 14.5c-4.4 0-8.5-5.03-8.5-6.5 0-1.47 4.1-6.5 8.5-6.5s8.5 5.03 8.5 6.5c0 1.47-4.1 6.5-8.5 6.5Z"
    />
    <path
      fill="currentColor"
      d="M10 6.5c-1.06 0-1.75.25-2.5 1s-1 1.44-1 2.5c0 1 .5 2 1 2.5.608.608 1.5 1 2.5 1 .954 0 1.904-.404 2.5-1 .596-.597 1-1.5 1-2.5 0-.934-.5-2-1-2.5s-1.5-1-2.5-1Zm0 5.5a2 2 0 1 1 .001-4.002 2 2 0 0 1 0 4.002Z"
    />
  </svg>
);
export default View;
