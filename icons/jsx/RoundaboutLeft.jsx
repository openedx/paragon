import * as React from "react";

function SvgRoundaboutLeft(props) {
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
        d="M16 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4v1H5.83l1.59 1.59L6 13 2 9l4-4 1.41 1.41L5.83 8h4.25A6 6 0 0116 3c3.31 0 6 2.69 6 6 0 2.97-2.16 5.44-5 5.92V21h-2v-8h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRoundaboutLeft;
