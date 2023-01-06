import * as React from "react";

function SvgTurnLeft(props) {
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
        d="M6.83 11l1.58 1.59L7 14l-4-4 4-4 1.41 1.41L6.83 9H17v11h-2v-9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTurnLeft;
