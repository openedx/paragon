import * as React from "react";
const SvgTooltip = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M480-80 374-240H80v-640h800v640H586L480-80ZM140-300h680v-520H140v520Zm0 0v-520 520Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTooltip;
