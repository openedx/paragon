import * as React from "react";

function SvgSupportAgent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <circle cx={9} cy={13} r={1} />
      <circle cx={15} cy={13} r={1} />
      <path
        d="M18 11.03A6.04 6.04 0 0012.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 004.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"
        fill="currentColor"
      />
      <path
        d="M20.99 12c-.11-5.37-4.31-9-8.99-9-4.61 0-8.85 3.53-8.99 9H2v6h3v-5.81c0-3.83 2.95-7.18 6.78-7.29a7.007 7.007 0 017.22 7V19h-8v2h10v-3h1v-6h-1.01z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSupportAgent;
