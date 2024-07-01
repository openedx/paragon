import * as React from "react";
const SvgResponsiveLayout = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M120-120v-505h215v-215h505v720H120Zm505-60h155v-600H395v155h230v445Zm-230 0h170v-385H395v385Zm-215 0h155v-385H180v385Zm445-445v60-60Zm-290 60Zm230 0Zm60-60Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgResponsiveLayout;
