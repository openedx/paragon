import * as React from "react";

function SvgPercentage(props) {
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
        d="M18.501 3.5l-15 15.001 1.996 1.996 15-15zM7.002 5a2 2 0 10-.004 4 2 2 0 00.004-4zm10 10a2 2 0 10-.004 4 2 2 0 00.004-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPercentage;
