import * as React from "react";

function SvgCancelPresentation(props) {
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
        d="M1 3v18h22V3H1zm20 16H3V5h18v14zM9.41 16L12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCancelPresentation;
