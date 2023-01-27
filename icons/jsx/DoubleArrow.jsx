import * as React from "react";

function SvgDoubleArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M15.5 5H11l5 7-5 7h4.5l5-7z" fill="currentColor" />
      <path d="M8.5 5H4l5 7-5 7h4.5l5-7z" fill="currentColor" />
    </svg>
  );
}

export default SvgDoubleArrow;
