import * as React from "react";
const SvgCalendar = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 3h-3V1h-2v2H8V1H6v2H3v18h18V3Zm-2 16H5V8h14v11Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCalendar;
