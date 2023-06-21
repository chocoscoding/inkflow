const Info = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="currentColor"
      d="M10.003 20A10 10 0 1 1 20 10.003 10.011 10.011 0 0 1 10.004 20Zm0-18.546a8.551 8.551 0 1 0 8.547 8.55 8.558 8.558 0 0 0-8.547-8.55Z"
    />
    <path
      fill="currentColor"
      d="M11.163 6.597a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0ZM9.1 8.648H10.9v5.92H9.1v-5.92Z"
    />
  </svg>
);
export default Info;
