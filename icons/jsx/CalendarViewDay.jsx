import * as React from "react";
function SvgCalendarViewDay(props) {
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
        d="M3 17h18v2H3v-2zm0-7h18v5H3v-5zm0-4h18v2H3V6z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgCalendarViewDay;
