const Headline = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="#3F4354"
      d="M6 15.182V5h2.153v4.201h4.37V5h2.148v10.182h-2.148v-4.206h-4.37v4.206H6Z"
    />
  </svg>
);
export default Headline;
