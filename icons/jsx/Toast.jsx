import * as React from "react";
const SvgToast = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M240-240h480v-60H240v60ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgToast;
