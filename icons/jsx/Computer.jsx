import * as React from "react";
const SvgComputer = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="m20 18 2-2V4H2v12l2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComputer;
