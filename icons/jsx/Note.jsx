import * as React from "react";
const SvgNote = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="m22 10-6-6H2v16h20V10zm-7-4.5 5.5 5.5H15V5.5z"
      fill="currentColor"
    />
  </svg>
);
export default SvgNote;
