import * as React from "react";
function SvgDoorBack(props) {
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
        d="M19 19V3H5v16H3v2h18v-2h-2zm-8-6H9v-2h2v2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgDoorBack;
