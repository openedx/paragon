import * as React from "react";
const SvgDynamicFeed = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M8 8H6v9h11v-2H8z" fill="currentColor" />
    <path
      d="M22 3H10v10h12V3zm-2 8h-8V7h8v4zM4 12H2v9h11v-2H4z"
      fill="currentColor"
    />
  </svg>
);
export default SvgDynamicFeed;
