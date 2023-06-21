const Growing = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="#3F4354"
      d="M1.81 18h3.264v-5.683L1.81 15.421V18ZM6.547 10.907V18H9.81v-4.857l-2.8-2.68-.463.444ZM11.307 18h3.263v-7.335l-3.263 3.124V18ZM17.641 7.723l-1.6 1.531V18h3.263V9.315l-1.242-1.189-.42-.403Z"
    />
    <path
      fill="#3F4354"
      d="M19.158 7.098 20 2l-5.326.806 1.515 1.45-5.284 5.079-3.894-3.728L0 12.317l1.453 1.39 5.558-5.32 3.894 3.709 6.737-6.449 1.516 1.451Z"
    />
  </svg>
);
export default Growing;
