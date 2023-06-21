const Following = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="#6570F7"
      d="M8 3c1.932 0 3.5 1.562 3.5 3.5C11.5 8.432 9.932 10 8 10a3.498 3.498 0 0 1-3.5-3.5C4.5 4.562 6.063 3 8 3ZM7.5 11c-7.138 0-7 3.68-7 6h7v-6ZM12.598 15.02c0-.195.13-.377.355-.511l.286-.17c.547-.339.69-.567.857-.567.167 0 .167 0 .857.41l.547.326c-.485-1.87-2.166-3.508-8-3.508v6h7.93l-2.477-1.476c-.226-.135-.355-.311-.355-.505Z"
    />
    <path
      stroke="#6570F7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m14 15 1.5 1 4-3"
    />
  </svg>
);
export default Following;
