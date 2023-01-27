import * as React from "react";

function SvgLooksTwo(props) {
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
        d="M21 3H3v18h18V3zm-6 10h-4v2h4v2H9v-6h4V9H9V7h6v6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLooksTwo;
