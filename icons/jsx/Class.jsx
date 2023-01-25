import * as React from "react";

function SvgClass(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4z" fill="currentColor" />
    </svg>
  );
}

export default SvgClass;
