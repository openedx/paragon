import * as React from "react";
function SvgCarpenter(props) {
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
        d="M7 1.5L3.11 5.39l8.13 11.67-1.41 1.41 4.24 4.24 7.07-7.07L7 1.5zm5.66 16.97l4.24-4.24 1.41 1.41-4.24 4.24-1.41-1.41z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgCarpenter;
