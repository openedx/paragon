import * as React from "react";

function SvgTurnRight(props) {
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
        d="M17.17 11l-1.58 1.59L17 14l4-4-4-4-1.41 1.41L17.17 9H7v11h2v-9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTurnRight;
