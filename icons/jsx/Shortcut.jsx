import * as React from "react";
function SvgShortcut(props) {
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
        d="M21 11l-6-6v5H8c-2.76 0-5 2.24-5 5v4h2v-4c0-1.65 1.35-3 3-3h7v5l6-6z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgShortcut;
