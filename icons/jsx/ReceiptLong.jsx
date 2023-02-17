import * as React from "react";

function SvgReceiptLong(props) {
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
        d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM15 20H6c-.55 0-1-.45-1-1v-1h10v2zm4-1c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"
        fill="currentColor"
      />
      <path
        d="M9 7h6v2H9zm0 3h6v2H9zm7-3h2v2h-2zm0 3h2v2h-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgReceiptLong;
