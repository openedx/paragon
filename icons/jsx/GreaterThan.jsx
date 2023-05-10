import * as React from "react";

function SvgGreaterThan(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12 7.5 19z"
        fillRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGreaterThan;