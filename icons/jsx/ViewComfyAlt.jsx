import * as React from "react";

function SvgViewComfyAlt(props) {
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
        d="M2 4v16h20V4H2zm9 13H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgViewComfyAlt;
