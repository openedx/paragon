import * as React from "react";
function SvgArrowLeft(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M14 7l-5 5 5 5V7z" fill="currentColor" />
    </svg>
  );
}
export default SvgArrowLeft;
