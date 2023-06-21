const New = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="#0ECC8D"
      d="M18 3H2C.89 3 .01 3.75.01 4.688L0 15.313C0 16.248.89 17 2 17h16c1.11 0 2-.75 2-1.688V4.688C20 3.75 19.11 3 18 3ZM6.5 13H5.3l-2.55-2.953V13H1.5V7.719h1.25l2.5 3.172V7.719H6.5V13Zm5-4H9v.946h2.5v1.063H9v.936h2.5V13h-4V7.719h4V9Zm7 3.156c0 .464-.45.844-1 .844h-4c-.55 0-1-.38-1-.844V7.72h1.25v4.024h1.13v-2.97h1.25v2.961h1.12V7.72h1.25v4.437Z"
    />
  </svg>
);
export default New;
