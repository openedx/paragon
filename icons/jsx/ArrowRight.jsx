import * as React from "react";
function SvgArrowRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M10 17l5-5-5-5v10z" fill="currentColor" />
    </svg>
  );
}
export default SvgArrowRight;
