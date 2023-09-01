import * as React from "react";
const SvgGridView = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 3H3v8h8V3ZM11 13H3v8h8v-8ZM21 3h-8v8h8V3ZM21 13h-8v8h8v-8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgGridView;
