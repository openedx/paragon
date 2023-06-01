import * as React from "react";
function SvgStraight(props) {
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
        d="M11 6.83L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V21h-2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgStraight;
