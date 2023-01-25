import * as React from "react";

function SvgNearMe(props) {
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
        d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNearMe;
