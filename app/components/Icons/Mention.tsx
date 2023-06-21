const Mention = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="#3F4354"
      fillRule="evenodd"
      d="M10.004 13.222a3.22 3.22 0 1 1-.001-6.442 3.22 3.22 0 0 1 .001 6.442ZM10.006 0h-.002c-.982 0-2.551.145-4.26.949a10.003 10.003 0 0 0-3.44 2.665C.053 6.342.004 9.416.004 10.001c.003 4.194 2.662 6.817 3.099 7.234.118.112 2.945 2.734 6.902 2.765h.072c1.569 0 2.829-.403 3.051-.476a9.548 9.548 0 0 0 2.618-1.34.843.843 0 1 0-.959-1.39 7.968 7.968 0 0 1-2.577 1.238 8.462 8.462 0 0 1-2.126.278h-.079c-3.42-.035-5.801-2.357-5.801-2.357-2.461-2.396-2.51-5.435-2.51-5.951 0-.368.047-3.304 2.24-5.67a8.256 8.256 0 0 1 2.373-1.77 8.337 8.337 0 0 1 3.698-.87h.013c1.775 0 3.092.565 3.644.834.346.17 1.834.928 3.107 2.645.709.953 1.546 2.84 1.546 4.83 0 .933-.767 1.7-1.7 1.7-.933 0-1.7-.767-1.7-1.7 0-1.033-.125-1.602-.753-2.624a4.216 4.216 0 0 0-.482-.635 4.998 4.998 0 0 0-1.78-1.276 4.971 4.971 0 0 0-1.895-.376H10c-.853 0-1.491.22-1.742.314-.234.09-.763.313-1.328.768A5.028 5.028 0 0 0 5.442 8.18a4.94 4.94 0 0 0 .038 3.74 4.904 4.904 0 0 0 1.415 1.885A5.025 5.025 0 0 0 10 14.912h.004a4.95 4.95 0 0 0 2.477-.672 4.933 4.933 0 0 0 1.784-1.797c.197.189.528.462 1.004.669.201.087.697.277 1.335.277h.01c1.388-.004 2.307-.91 2.413-1.018.94-.959.976-2.129.977-2.37.025-3.172-1.78-5.767-2.235-6.317-.52-.633-2.054-2.335-4.646-3.187A10.008 10.008 0 0 0 10.005 0"
      clipRule="evenodd"
    />
  </svg>
);
export default Mention;
