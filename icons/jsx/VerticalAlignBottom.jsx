import * as React from "react";

function SvgVerticalAlignBottom(props) {
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
        d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgVerticalAlignBottom;
