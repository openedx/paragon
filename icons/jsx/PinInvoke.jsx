import * as React from "react";
function SvgPinInvoke(props) {
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
        d="M22 12v8H2V4h12v2H4v12h16v-6h2zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm-10.53 5.12l-2.83 2.83 1.41 1.41 2.83-2.83L15 15.66V10H9.34l2.13 2.12z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgPinInvoke;
