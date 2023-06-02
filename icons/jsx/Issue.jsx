import * as React from "react";
const SvgIssue = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10Z"
      fill="currentColor"
    />
    <path
      d="M11.32 7.759c-.98.98-1.24 2.4-.81 3.62l-3.41 3.41c-.2.2-.2.51 0 .71l1.4 1.4c.2.2.51.2.71 0l3.41-3.41c1.22.43 2.64.17 3.62-.81 1.11-1.11 1.3-2.78.59-4.1l-2.35 2.35-1.41-1.41 2.35-2.35a3.468 3.468 0 0 0-4.1.59Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgIssue;
