import * as React from "react";
function SvgArrowDropDown(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
    </svg>
  );
}
export default SvgArrowDropDown;
