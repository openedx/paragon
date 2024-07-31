import * as React from "react";
const SvgIframe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M460-420h200v-80H460v80Zm-60 60v-200h320v200H400ZM80-160v-640h800v640H80Zm60-60h680v-436H140v436Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgIframe;
