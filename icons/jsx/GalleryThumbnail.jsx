import * as React from "react";
const SvgGalleryThumbnail = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M40-200v-560h560v560H40Zm640-320v-240h240v240H680Zm60-60h120v-120H740v120ZM100-260h440v-440H100v440Zm60-100h320L375-500l-75 100-55-73-85 113Zm520 160v-240h240v240H680Zm60-60h120v-120H740v120Zm-640 0v-440 440Zm640-320v-120 120Zm0 320v-120 120Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgGalleryThumbnail;
