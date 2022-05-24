import * as React from "react";

function SvgCrop75(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M21 7H3v10h18V7zm-2 8H5V9h14v6z" />
    </svg>
  );
}

export default SvgCrop75;
