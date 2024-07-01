import * as React from "react";
const SvgWallLamp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M120-120v-240h60v240h-60Zm187-380h426l-84-280H391l-84 280Zm0 0h426-426Zm-87 290v-60h270v-170H226l120-400h348l120 400H550v230H220Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgWallLamp;
