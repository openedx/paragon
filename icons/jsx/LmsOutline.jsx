import * as React from "react";
const SvgLmsOutline = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M7 8h2v12H7z" />
    <path fill="currentColor" d="M7 13v-2h7v2zM7 20v-2h7v2z" />
    <circle cx={8} cy={5} r={2} fill="currentColor" />
    <circle cx={17} cy={12} r={2} fill="currentColor" />
    <circle cx={17} cy={19} r={2} fill="currentColor" />
  </svg>
);
export default SvgLmsOutline;
