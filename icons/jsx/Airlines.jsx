import * as React from "react";
function SvgAirlines(props) {
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
        d="M13 4L2 20h17l3-16h-9zm1.5 10a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgAirlines;
