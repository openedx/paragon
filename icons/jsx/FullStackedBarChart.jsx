import * as React from "react";
const SvgFullStackedBarChart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M160-160v-130h140v130H160Zm0-160v-140h140v140H160Zm0-170v-310h140v310H160Zm250 330v-300h140v300H410Zm0-330v-140h140v140H410Zm0-170v-140h140v140H410Zm250 500v-100h140v100H660Zm0-130v-140h140v140H660Zm0-170v-340h140v340H660Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFullStackedBarChart;
