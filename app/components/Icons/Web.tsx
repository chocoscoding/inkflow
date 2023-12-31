const Web = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    className={props.className}
    {...props}>
    <path
      fill="currentColor"
      d="M10.003 0c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10Zm8.326 9.184h-2.94a11.589 11.589 0 0 0-3.239-7.262c3.32.884 5.838 3.755 6.179 7.262Zm-8.326 8.64a9.94 9.94 0 0 1-3.75-7.008h7.5a9.943 9.943 0 0 1-3.75 7.009Zm-3.75-8.64a9.936 9.936 0 0 1 3.75-7.008 9.938 9.938 0 0 1 3.75 7.008h-7.5Zm1.603-7.262a11.589 11.589 0 0 0-3.24 7.262h-2.94c.342-3.507 2.86-6.379 6.18-7.262Zm-6.18 8.894h2.94a11.585 11.585 0 0 0 3.24 7.261c-3.32-.883-5.838-3.754-6.18-7.261Zm10.474 7.261a11.587 11.587 0 0 0 3.24-7.261h2.939c-.34 3.507-2.858 6.378-6.179 7.261Z"
    />
  </svg>
);
export default Web;
