import * as React from "react";
const SvgExpandContent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M200-200v-240h60v180h180v60H200Zm500-320v-180H520v-60h240v240h-60Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgExpandContent;
