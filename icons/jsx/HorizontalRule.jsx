import * as React from "react";
function SvgHorizontalRule(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path fillRule="evenodd" d="M4 11h16v2H4z" fill="currentColor" />
    </svg>
  );
}
export default SvgHorizontalRule;
