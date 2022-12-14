import * as React from "react";
function SvgBatteryFull(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M17 4h-3V2h-4v2H7v18h10V4z" fill="currentColor" />
    </svg>
  );
}
export default SvgBatteryFull;
