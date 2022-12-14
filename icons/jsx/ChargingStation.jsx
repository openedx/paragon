import * as React from "react";
function SvgChargingStation(props) {
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
        d="M14.5 11l-3 6v-4h-2l3-6v4h2zM5 1h14v22H5V1zm2 5v12h10V6H7z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgChargingStation;
