import * as React from "react";
function SvgPlayArrow(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
    </svg>
  );
}
export default SvgPlayArrow;
