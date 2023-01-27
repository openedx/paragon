import * as React from "react";

function SvgDivide(props) {
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
        d="M5 11h14v2H5zm7.002-7a2 2 0 10-.004 4 2 2 0 00.004-4zm0 12a2 2 0 10-.004 4 2 2 0 00.004-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDivide;
