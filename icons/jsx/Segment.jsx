import * as React from "react";
const SvgSegment = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSegment;
