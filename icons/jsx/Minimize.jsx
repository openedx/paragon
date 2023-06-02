import * as React from "react";
function SvgMinimize(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M6 19h12v2H6v-2z" fill="currentColor" />
    </svg>
  );
}
export default SvgMinimize;
