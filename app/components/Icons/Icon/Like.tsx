const Like = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="#3F4354"
      fillRule="evenodd"
      d="M4.285 1.286C.582 2.42-.738 6.25.39 9.6 2.21 14.972 10.001 19 10.001 19s7.851-4.09 9.61-9.4c1.128-3.351-.2-7.18-3.904-8.314-1.945-.593-4.174-.213-5.706.912C8.382 1.041 6.232.69 4.285 1.286Zm9.472 2.987a.75.75 0 0 0-.371 1.454c1.382.353 2.202 1.282 2.296 2.207a.75.75 0 1 0 1.493-.153c-.177-1.72-1.61-3.045-3.418-3.508Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Like;
