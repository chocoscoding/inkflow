const Google = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="currentColor"
      d="M1.977 5.959a9.067 9.067 0 0 1 3.386-3.62A9.32 9.32 0 0 1 10.183 1c2.476 0 4.555.891 6.145 2.345l-2.633 2.58c-.953-.891-2.163-1.346-3.511-1.346-2.393 0-4.418 1.584-5.139 3.711A5.308 5.308 0 0 0 4.757 10c0 .594.105 1.17.288 1.71.722 2.128 2.746 3.71 5.139 3.71 1.235 0 2.286-.319 3.11-.859a4.184 4.184 0 0 0 1.2-1.174c.315-.467.53-.991.632-1.542h-4.942V8.364h8.649c.108.588.167 1.202.167 1.84 0 2.742-1.001 5.05-2.739 6.615C14.742 18.195 12.663 19 10.184 19c-1.206 0-2.4-.232-3.515-.684a9.195 9.195 0 0 1-2.98-1.951 8.986 8.986 0 0 1-1.99-2.92 8.84 8.84 0 0 1 .278-7.486Z"
    />
  </svg>
);
export default Google;
