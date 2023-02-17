import * as React from "react";

function SvgPictureInPictureAlt(props) {
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
        d="M19 11h-8v6h8v-6zm4 10V3H1v18h22zm-2-1.98H3V4.97h18v14.05z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPictureInPictureAlt;
