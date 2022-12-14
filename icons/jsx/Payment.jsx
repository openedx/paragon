import * as React from "react";
function SvgPayment(props) {
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
        d="M22 4H2v16h20V4zm-2 14H4v-6h16v6zm0-10H4V6h16v2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgPayment;
