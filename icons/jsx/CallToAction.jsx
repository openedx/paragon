import * as React from "react";
function SvgCallToAction(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M23 3H1v18h22V3zm-2 16H3v-3h18v3z" fill="currentColor" />
    </svg>
  );
}
export default SvgCallToAction;
