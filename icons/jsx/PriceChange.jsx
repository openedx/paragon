import * as React from "react";

function SvgPriceChange(props) {
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
        d="M2 4v16h20V4H2zm10 6H8v1h4v5h-2v1H8v-1H6v-2h4v-1H6V8h2V7h2v1h2v2zm4 6.25l-2-2h4l-2 2zM14 10l2-2 2 2h-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPriceChange;