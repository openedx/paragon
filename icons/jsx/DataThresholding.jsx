import * as React from "react";

function SvgDataThresholding(props) {
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
        d="M21 3H3v18h18V3zM10.67 8.17l2 2 3.67-3.67 1.41 1.41L12.67 13l-2-2-3 3-1.41-1.41 4.41-4.42zM5 16h1.72L5 17.72V16zm.84 3l3-3h1.83l-3 3H5.84zm3.96 0l3-3h1.62l-3 3H9.8zm3.73 0l3-3h1.62l-3 3h-1.62zM19 19h-1.73L19 17.27V19z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDataThresholding;
