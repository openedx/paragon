import * as React from "react";
const SvgPanZoom = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M120-120v-230h60v127l148-148 43 43-148 148h127v60H120Zm513-470-43-43 147-147H610v-60h230v230h-60v-127L633-590Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPanZoom;
