import * as React from "react";
function SvgSsidChart(props) {
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
        d="M21 5.47L12 12 7.62 7.62 3 11V8.52L7.83 5l4.38 4.38L21 3v2.47zM21 15h-4.7l-4.17 3.34L6 12.41l-3 2.13V17l2.8-2 6.2 6 5-4h4v-2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgSsidChart;
