const Tutorial = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="currentColor"
      d="M10.698 20C5.076 20 .503 15.514.503 10S5.076 0 10.698 0c3.063 0 5.937 1.333 7.882 3.658.378.451.46.971 0 1.342-.324.261-.896.217-1.077 0-1.535-1.834-4-3.5-6.806-3.5-4.433 0-8.694 4.152-8.694 8.5s4.261 8.5 8.694 8.5c2.785 0 5.823-1.998 7.306-4.314.316-.495.735-.493.995-.334.541.334.656.963.34 1.458-1.88 2.937-5.11 4.69-8.64 4.69Z"
    />
    <path
      fill="currentColor"
      d="m8.503 5 7 4.718-7 4.282V5Z"
    />
  </svg>
);
export default Tutorial;
