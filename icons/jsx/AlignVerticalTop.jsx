import * as React from "react";
function SvgAlignVerticalTop(props) {
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
        d="M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgAlignVerticalTop;
