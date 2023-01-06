import * as React from "react";

function SvgNorthWest(props) {
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
        d="M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5v10z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNorthWest;
