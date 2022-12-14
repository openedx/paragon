import * as React from "react";
function SvgFreeBreakfast(props) {
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
        d="M20 3H4v14h14v-7h2a2 2 0 002-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4v-2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgFreeBreakfast;
