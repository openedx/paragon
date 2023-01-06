import * as React from "react";

function SvgFolder(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M10 4H2v16h20V6H12l-2-2z" fill="currentColor" />
    </svg>
  );
}

export default SvgFolder;
