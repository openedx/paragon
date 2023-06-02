import * as React from "react";
const SvgBrandingWatermark = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M23 3H1v18h22V3zm-2 16h-9v-6h9v6z" fill="currentColor" />
  </svg>
);
export default SvgBrandingWatermark;
