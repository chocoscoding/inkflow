const Home = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <g clipPath="url(#home_svg__a)">
      <path
        fill="currentColor"
        d="M19.344 7.52 10.88.34a1.31 1.31 0 0 0-1.76 0L.657 7.52A1.997 1.997 0 0 0 0 9v10.336A.664.664 0 0 0 .665 20H6a1 1 0 0 0 1-1v-4c0-.564.553-1.021 1.117-1.021h3.766c.565 0 1.117.457 1.117 1.021v4a1 1 0 0 0 1 1h5.336a.664.664 0 0 0 .664-.664V9a1.996 1.996 0 0 0-.656-1.48Z"
      />
    </g>
    <defs>
      <clipPath id="home_svg__a">
        <path
          fill="#fff"
          d="M0 0h20v20H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
export default Home;
