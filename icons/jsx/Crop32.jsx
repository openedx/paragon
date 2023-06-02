import * as React from "react";
function SvgCrop32(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M21 4H3v16h18V4zm-2 14H5V6h14v12z" fill="currentColor" />
    </svg>
  );
}
export default SvgCrop32;
