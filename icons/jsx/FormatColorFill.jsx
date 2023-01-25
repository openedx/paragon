import * as React from "react";

function SvgFormatColorFill(props) {
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
        d="M10 17.62L17.62 10l-10-10-1.41 1.41 2.38 2.38L2.38 10 10 17.62zm0-12.41L14.79 10H5.21L10 5.21zM19 17c1.1 0 2-.9 2-2 0-1.33-2-3.5-2-3.5s-2 2.17-2 3.5c0 1.1.9 2 2 2zM2 20h20v4H2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFormatColorFill;
