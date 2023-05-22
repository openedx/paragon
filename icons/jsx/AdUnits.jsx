import * as React from "react";
function SvgAdUnits(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M19 1H5v22h14V1zm-2 18H7V5h10v14z" fill="currentColor" />
      <path d="M8 6h8v2H8z" fill="currentColor" />
    </svg>
  );
}
export default SvgAdUnits;
