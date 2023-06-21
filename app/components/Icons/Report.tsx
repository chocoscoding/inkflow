const Report = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="currentColor"
      d="M19.86 17.485 10.549 1.811a.642.642 0 0 0-.553-.311.642.642 0 0 0-.552.31L.086 17.566a.609.609 0 0 0 0 .623.643.643 0 0 0 .553.312h18.723a.63.63 0 0 0 .638-.623.613.613 0 0 0-.14-.391Zm-8.861-1.364H8.994v-1.884h2.005v1.884Zm0-3.318H8.994V7.1h2.005v5.703Z"
    />
  </svg>
);
export default Report;
