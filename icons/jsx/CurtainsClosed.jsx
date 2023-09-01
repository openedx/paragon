import * as React from "react";
function SvgCurtainsClosed(props) {
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
        d="M20 19V3H4v16H2v2h20v-2h-2zM11 5h2v14h-2V5z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgCurtainsClosed;
