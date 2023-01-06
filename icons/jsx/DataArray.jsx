import * as React from "react";

function SvgDataArray(props) {
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
        d="M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDataArray;
