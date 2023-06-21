const Share = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="#3F4354"
      d="m19.66 8.323-9.067-7.6a.955.955 0 0 0-1.565.727v3.674C3.666 5.624 0 9.873 0 15.762c0 1.098.131 2.122.389 3.044.115.41.49.694.918.694h.001a.953.953 0 0 0 .917-.697c.906-3.271 3.416-5.361 6.803-5.73v3.577a.951.951 0 0 0 1.565.728l9.067-7.6a.95.95 0 0 0 0-1.455Zm-3.83.509a.477.477 0 0 1-.67.075l-3.334-2.652a.474.474 0 0 1-.075-.668.477.477 0 0 1 .67-.075l3.333 2.652c.206.163.239.462.075.668Z"
    />
  </svg>
);
export default Share;
