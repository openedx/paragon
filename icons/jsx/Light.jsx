import * as React from "react";

function SvgLight(props) {
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
        d="M13 6.06V3h-2v3.06A9.006 9.006 0 003.22 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h4.78A9.006 9.006 0 0013 6.06zM12 15H5c0-3.86 3.14-7 7-7s7 3.14 7 7h-7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLight;
