import * as React from "react";
function SvgVerticalDistribute(props) {
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
        d="M22 2v2H2V2h20zM7 10.5v3h10v-3H7zM2 20v2h20v-2H2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgVerticalDistribute;
