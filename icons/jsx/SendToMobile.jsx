import * as React from "react";
function SvgSendToMobile(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M17 18H7V6h10v1h2V1H5v22h14v-6h-2z" fill="currentColor" />
      <path d="M22 12l-4-4v3h-5v2h5v3z" fill="currentColor" />
    </svg>
  );
}
export default SvgSendToMobile;
