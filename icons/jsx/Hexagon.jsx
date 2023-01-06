import * as React from "react";

function SvgHexagon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9z" fill="currentColor" />
    </svg>
  );
}

export default SvgHexagon;
