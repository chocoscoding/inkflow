const Trouble = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="#3F4354"
      d="M5.758 19.31c-.677.58-1.626-.016-1.382-.824l2.174-7.214c.035-.116-.006-.187-.124-.215l-2.34-.558c-.82-.195-1.01-1.23-.35-1.753L13.82.262c.677-.581 1.626.016 1.383.824L13.029 8.3c-.035.115.006.187.123.215l2.341.557c.82.195 1.01 1.23.35 1.754L5.758 19.31Z"
    />
  </svg>
);
export default Trouble;
