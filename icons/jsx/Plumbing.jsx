import * as React from "react";

function SvgPlumbing(props) {
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
        d="M16.16 5.64l3.54 3.54a3 3 0 000-4.24L16.16 1.4l-4.24 4.24 2.12 2.12 2.12-2.12zM4.842 12.708l3.535-3.535 2.122 2.12-3.536 3.536z"
        fill="currentColor"
      />
      <path
        d="M15.45 7.76l-1.41 1.41-4.25-4.24-2.12 2.12 4.24 4.24-8.49 8.49 2.83 2.83L16.86 12l.71.71 1.41-1.41-3.53-3.54z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlumbing;
