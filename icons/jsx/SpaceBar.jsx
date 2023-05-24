import * as React from "react";
function SvgSpaceBar(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M18 9v4H6V9H4v6h16V9h-2z" fill="currentColor" />
    </svg>
  );
}
export default SvgSpaceBar;
