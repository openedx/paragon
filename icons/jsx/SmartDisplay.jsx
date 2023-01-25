import * as React from "react";

function SvgSmartDisplay(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M22 4H2v16h20V4zM9.5 16.5v-9l7 4.5-7 4.5z" fill="currentColor" />
    </svg>
  );
}

export default SvgSmartDisplay;
