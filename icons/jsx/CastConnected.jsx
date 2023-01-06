import * as React from "react";

function SvgCastConnected(props) {
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
        d="M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2a9 9 0 019 9h2c0-6.08-4.93-11-11-11zm22-7H1v5h2V5h18v14h-7v2h9V3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCastConnected;
