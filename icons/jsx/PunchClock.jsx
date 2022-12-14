import * as React from "react";
function SvgPunchClock(props) {
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
        d="M21 6h-3V1H6v5H3v16h18V6zM8 3h8v3H8V3zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
        fill="currentColor"
      />
      <path
        d="M12.5 11.5h-1v2.71l1.64 1.64.71-.71-1.35-1.35z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgPunchClock;
