import * as React from "react";
function SvgBolt(props) {
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
        d="M11 21h-1l1-7H6.74S10.42 7.54 13 3h1l-1 7h4.28L11 21z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgBolt;
