import * as React from "react";
function SvgShortText(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z" fill="currentColor" />
    </svg>
  );
}
export default SvgShortText;
