import * as React from "react";
function SvgSdStorage(props) {
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
        d="M20 2H10L4 8v14h16V2zm-8 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgSdStorage;