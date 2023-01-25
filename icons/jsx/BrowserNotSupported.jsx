import * as React from "react";

function SvgBrowserNotSupported(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M19 6v10.5l2 2V4H6.5l2 2zM3.22 3.32L1.95 4.59 3 5.64V20h14.36l2.06 2.06 1.27-1.27L3.22 3.32zM15 18H5V7.64L15.36 18H15z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBrowserNotSupported;
