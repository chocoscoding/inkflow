const Vector = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="currentColor"
      d="M6.416 16.287a1 1 0 0 0 1.418 0L17.98 6.098a1.458 1.458 0 1 0-2.067-2.057l-8.784 8.827-3.038-3.052a1.457 1.457 0 0 0-2.066 2.056l4.391 4.416Z"
    />
  </svg>
);
export default Vector;
