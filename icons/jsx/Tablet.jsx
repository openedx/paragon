import * as React from "react";

function SvgTablet(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M23 4H1v16h21.99L23 4zm-4 14H5V6h14v12z" fill="currentColor" />
    </svg>
  );
}

export default SvgTablet;
