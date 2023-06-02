import * as React from "react";
function SvgCropDin(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M21 3H3v18h18V3zm-2 16H5V5h14v14z" fill="currentColor" />
    </svg>
  );
}
export default SvgCropDin;
