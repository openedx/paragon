import * as React from "react";

function SvgBattery30(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fillOpacity={0.3} d="M17 4h-3V2h-4v2H7v11h10V4z" />
      <path d="M7 15v7h10v-7H7z" />
    </svg>
  );
}

export default SvgBattery30;
