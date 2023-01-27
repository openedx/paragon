import * as React from "react";

function SvgHorizontalDistribute(props) {
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
        d="M4 22H2V2h2v20zM22 2h-2v20h2V2zm-8.5 5h-3v10h3V7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHorizontalDistribute;
