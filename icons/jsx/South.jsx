import * as React from "react";
function SvgSouth(props) {
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
        d="M19 15l-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7 7-7z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgSouth;
