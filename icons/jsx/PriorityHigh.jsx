import * as React from "react";

function SvgPriorityHigh(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <circle cx={12} cy={19} r={2} />
      <path d="M10 3h4v12h-4z" fill="currentColor" />
    </svg>
  );
}

export default SvgPriorityHigh;
