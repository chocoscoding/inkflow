const ProfileOutline = (props: { className?: string }) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={20}
  height={20}
  fill="none"
  className={props.className}
  {...props}>
  <path
    stroke="currentColor"
    strokeWidth={2}
    d="m7.64 8.218-.065-.048A3.978 3.978 0 0 1 6 5c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.265-.614 2.484-1.634 3.213l-.007.005A4.01 4.01 0 0 1 10 9c-.834 0-1.656-.27-2.36-.782ZM18.668 16.92c.094.288.154.607.227 1.004.048.294.081.535.081.735v.12l.022.09v.003A1.342 1.342 0 0 1 19 19H1.006c.187-3.394 2.193-6.384 5.1-7.816a6.287 6.287 0 0 0 4.135 1.523 6.338 6.338 0 0 0 3.8-1.258 4.1 4.1 0 0 0 .152-.11 9.165 9.165 0 0 1 4.464 5.547l.005.017.006.017Z"
  />
</svg>
);
export default ProfileOutline;
