import * as React from "react";
const SvgPhotoFrame = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M160-120v-80H40v-600h880v600H800v80H160Zm-60-140h760v-480H100v480Zm120-110h520L580-584 440-404 340-524 220-370ZM100-260v-480 480Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPhotoFrame;
