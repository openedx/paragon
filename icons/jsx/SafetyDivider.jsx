import * as React from "react";
function SvgSafetyDivider(props) {
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
        d="M11 5h2v14h-2V5zm-6 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58a6.95 6.95 0 00-5.56 0A2.01 2.01 0 001 15.43V16h8v-.57c0-.81-.48-1.53-1.22-1.85zM19 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58a6.95 6.95 0 00-5.56 0A2.01 2.01 0 0015 15.43V16h8v-.57c0-.81-.48-1.53-1.22-1.85z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgSafetyDivider;
