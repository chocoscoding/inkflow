const LinkedinOutline = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <g
      fill="#3F4354"
      clipPath="url(#linkedin-outline_svg__a)">
      <path d="M1.111 0H18.89A1.111 1.111 0 0 1 20 1.111V18.89A1.111 1.111 0 0 1 18.889 20H1.11A1.111 1.111 0 0 1 0 18.889V1.11A1.111 1.111 0 0 1 1.111 0ZM1.5 1.5v17h17v-17h-17ZM4 7.778h1.5v8.333H4V7.778Zm6 .478c.649-.628 1.684-.756 2.5-.756 2.301 0 3 2 3 3.889v4.722H14V11.39C14 10.5 14 10 13.5 9.5S12.516 9 12 9s-1.041.042-1.5.5c-.5.5-.5 1.373-.5 1.889v4.722H8.5V7.778H10v.478Z" />
      <circle
        cx={4.75}
        cy={5.25}
        r={1.25}
      />
    </g>
    <defs>
      <clipPath id="linkedin-outline_svg__a">
        <path
          fill="#fff"
          d="M0 0h20v20H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
export default LinkedinOutline;
