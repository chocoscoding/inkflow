const Italic = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="#3F4354"
      d="M16 5.333V4H7.333v1.333h3.427l-2.913 9.334H4V16h8.667v-1.333H9.24l2.913-9.334H16Z"
    />
  </svg>
);
export default Italic;
