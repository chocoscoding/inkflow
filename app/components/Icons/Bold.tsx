const Bold = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="#3F4354"
      d="M5.885 15V4.818H9.96c.75 0 1.374.111 1.875.333.5.222.876.53 1.128.925.252.391.378.842.378 1.352 0 .398-.08.748-.239 1.05a2.06 2.06 0 0 1-.656.735 2.69 2.69 0 0 1-.944.403v.1a2.323 2.323 0 0 1 1.919 1.178c.212.36.318.792.318 1.292 0 .54-.134 1.023-.403 1.447-.265.42-.658.754-1.178 1-.52.244-1.162.367-1.924.367h-4.35Zm2.152-1.76h1.755c.6 0 1.038-.114 1.313-.343.275-.232.413-.54.413-.925 0-.281-.068-.53-.204-.745a1.384 1.384 0 0 0-.582-.508 1.993 1.993 0 0 0-.89-.183H8.037v2.704Zm0-4.161h1.596c.295 0 .557-.051.786-.154.232-.106.414-.255.547-.448.136-.192.204-.422.204-.69 0-.369-.131-.665-.393-.89-.259-.226-.627-.339-1.104-.339H8.037v2.52Z"
    />
  </svg>
);
export default Bold;
