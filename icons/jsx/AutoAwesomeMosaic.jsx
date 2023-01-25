import * as React from "react";

function SvgAutoAwesomeMosaic(props) {
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
        d="M3 21h8V3H3v18zM21 3h-8v8h8V3zm-8 18h8v-8h-8v8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAutoAwesomeMosaic;
