const Comment1 = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      stroke="#3F4354"
      strokeWidth={1.5}
      d="m.827 17.92 1.853-.408a3.845 3.845 0 0 1 2.818.479 9.284 9.284 0 0 0 4.709 1.259c5.014-.07 9.131-4.332 9.042-9.407-.09-5.105-4.25-9.181-9.337-9.092C5.23.841 1.293 4.606.98 9.343L.827 17.92Zm0 0 .718-2.064v-.003a3.94 3.94 0 0 0-.03-2.673A9.472 9.472 0 0 1 .98 9.343L.827 17.92Z"
    />
    <path
      stroke="#3F4354"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 8h9M6 12h5"
    />
  </svg>
);
export default Comment1;
