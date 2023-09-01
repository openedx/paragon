import * as React from "react";
function SvgCropSquare(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M20 4H4v16h16V4zm-2 14H6V6h12v12z" fill="currentColor" />
    </svg>
  );
}
export default SvgCropSquare;
