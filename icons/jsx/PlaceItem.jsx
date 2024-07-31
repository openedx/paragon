import * as React from "react";
const SvgPlaceItem = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M120-120v-560h270v60H180v440h600v-440H570v-60h270v560H120Zm360-203L318-485l43-43 89 89v-521h60v521l89-89 43 43-162 162Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPlaceItem;
