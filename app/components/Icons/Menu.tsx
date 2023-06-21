const Menu = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="#3F4354"
      d="M0 2v3h20V2H0Zm0 6.5v3h20v-3H0ZM0 15v3h20v-3H0Z"
    />
  </svg>
);
export default Menu;
