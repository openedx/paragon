import * as React from "react";

function SvgDirections(props) {
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
        d="M22.41 12L12 1.59 1.59 11.99 12 22.41 22.41 12zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5-3.5 3.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDirections;
