const Upload = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="currentColor"
      d="m6.711 5.706 2.29-2.3v9.592a1 1 0 1 0 2.001 0V3.406l2.29 2.3a1 1 0 0 0 1.421 0 1 1 0 0 0 0-1.42l-4-4a.998.998 0 0 0-.33-.21 1 1 0 0 0-.761 0 .999.999 0 0 0-.33.21l-4.001 4a1.004 1.004 0 1 0 1.42 1.42Zm12.294 6.292a1 1 0 0 0-1 1V17a1 1 0 0 1-1.001 1H3.001a1 1 0 0 1-1-1v-4a1 1 0 1 0-2.001 0v4A3.001 3.001 0 0 0 3 20h14.004a3.002 3.002 0 0 0 3-3v-4.002a1 1 0 0 0-1-1Z"
    />
  </svg>
);
export default Upload;
