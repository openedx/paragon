import * as React from "react";
function SvgTableRows(props) {
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
        d="M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgTableRows;
