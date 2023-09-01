import * as React from "react";
const SvgNotes = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M21 11.01 3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"
      fill="currentColor"
    />
  </svg>
);
export default SvgNotes;
