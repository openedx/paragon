import * as React from "react";
function SvgWarningFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2L1 21h22L12 2z" fill="currentColor" />
      <path d="M13 16h-2v2h2v-2zM13 10h-2v4h2v-4z" fill="currentColor" />
    </svg>
  );
}
export default SvgWarningFilled;
