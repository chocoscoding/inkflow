const Notification = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <g clipPath="url(#Notification_svg__a)">
      <path
        fill="#3F4354"
        fillRule="evenodd"
        d="M18.333 13.061h-.42c1.156 0 2.087.914 2.087 2.04v.41a.823.823 0 0 1-.834.816H.834A.825.825 0 0 1 0 15.51v-.41c0-1.126.934-2.04 2.087-2.04h-.42a.826.826 0 0 0 .833-.817V7.347C2.5 3.287 5.858 0 10 0c4.143 0 7.5 3.29 7.5 7.347v4.897c0 .454.373.817.833.817Zm-11.25 4.082h5.833C12.916 18.72 11.61 20 10 20c-1.611 0-2.917-1.28-2.917-2.857Z"
        clipRule="evenodd"
      />
      <circle
        cx={16.5}
        cy={3.5}
        r={3}
        fill="#FF6934"
        stroke="#F4F6F8"
      />
    </g>
    <defs>
      <clipPath id="Notification_svg__a">
        <path
          fill="#fff"
          d="M0 0h20v20H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
export default Notification;
