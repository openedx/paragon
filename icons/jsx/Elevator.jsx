import * as React from "react";

function SvgElevator(props) {
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
        d="M21 3H3v18h18V3zM8.5 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm2.5 8h-1v4H7v-4H6V9.5h5V14zm4.5 3L13 13h5l-2.5 4zM13 11l2.5-4 2.5 4h-5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgElevator;
