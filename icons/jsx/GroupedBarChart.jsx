import * as React from "react";
const SvgGroupedBarChart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M160-160v-480h140v480H160Zm210 0v-280h140v280H370Zm290 0v-640h140v640H660Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgGroupedBarChart;
