import * as React from "react";
function SvgIndeterminateCheckBox(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 3H3v18h18V3zm-4 10H7v-2h10v2z" fill="currentColor" />
    </svg>
  );
}
export default SvgIndeterminateCheckBox;
