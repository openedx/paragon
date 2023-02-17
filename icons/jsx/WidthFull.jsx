import * as React from "react";

function SvgWidthFull(props) {
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
        d="M22 4H2v16h20V4zM4 6h1v12H4V6zm16 12h-1V6h1v12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWidthFull;
