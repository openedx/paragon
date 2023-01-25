import * as React from "react";

function SvgHandyman(props) {
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
        d="M16.37 12.87h-.99l-2.54 2.54v.99l6.01 6.01 3.54-3.54-6.02-6z"
        fill="currentColor"
      />
      <path
        d="M17.34 10.19l1.41-1.41 2.12 2.12a3 3 0 000-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-6.01 6.01 3.54 3.54 6.01-6.01V14.3l5.15-5.15 1.05 1.04z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHandyman;
