import * as React from "react";
const SvgWebBlack = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#00262B"
        strokeWidth={2}
        d="M3 3h18v18H3z"
        fill="currentColor"
      />
      <path fill="currentColor" d="M14 3.25h7v17.5h-7z" />
      <path fill="currentColor" d="M14 3.25h2v17.5h-2z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWebBlack;
