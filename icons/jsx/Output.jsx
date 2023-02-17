import * as React from "react";

function SvgOutput(props) {
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
        d="M17 17l5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z"
        fill="currentColor"
      />
      <path d="M19 19H5V5h14v2h2V3H3v18h18v-4h-2z" fill="currentColor" />
    </svg>
  );
}

export default SvgOutput;
