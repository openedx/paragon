import * as React from "react";
function SvgAreaChart(props) {
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
        d="M3 13v7h18v-1.5l-9-7L8 17l-5-4zm0-6l4 3 5-7 5 4h4v8.97l-9.4-7.31-3.98 5.48L3 10.44V7z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgAreaChart;
