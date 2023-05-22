import * as React from "react";
function SvgBatteryCharging30(props) {
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
        fillOpacity={0.3}
        d="M17 4h-3V2h-4v2H7v10.5h2L13 7v5.5h2l-1.07 2H17V4z"
        fill="currentColor"
      />
      <path d="M11 20v-5.5H7V22h10v-7.5h-3.07L11 20z" fill="currentColor" />
    </svg>
  );
}
export default SvgBatteryCharging30;
