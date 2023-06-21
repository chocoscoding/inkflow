const Edit = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="currentColor"
      d="M3 16.001h4.24a1 1 0 0 0 .71-.29l6.92-6.928 2.84-2.779a1 1 0 0 0 0-1.42L13.47.296a1 1 0 0 0-1.42 0L9.23 3.125l-6.94 6.928a.999.999 0 0 0-.29.71V15a1 1 0 0 0 1 1Zm9.76-13.586 2.83 2.83-1.42 1.419-2.83-2.83 1.42-1.419ZM4 11.173l5.93-5.929 2.83 2.83L6.83 14H4v-2.829ZM19 18H1A1 1 0 1 0 1 20h18a1 1 0 1 0 0-2Z"
    />
  </svg>
);
export default Edit;
