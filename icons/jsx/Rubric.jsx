import * as React from "react";
const SvgRubric = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M160-120v-720h640v390H220v105h230v60H220v105h230v60H160Zm474 0L520-234l43-43 71 71 152-152 43 43-195 195ZM220-510h230v-105H220v105Zm290 0h230v-105H510v105ZM220-675h230v-105H220v105Zm290 0h230v-105H510v105Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgRubric;
