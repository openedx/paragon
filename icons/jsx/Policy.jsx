import * as React from "react";

function SvgPolicy(props) {
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
        d="M21 5l-9-4-9 4v6c0 5.55 3.84 10.74 9 12 2.3-.56 4.33-1.9 5.88-3.71l-3.12-3.12a4.994 4.994 0 01-6.29-.64 5.003 5.003 0 010-7.07 5.003 5.003 0 017.07 0 5.006 5.006 0 01.64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11V5z"
        fill="currentColor"
      />
      <circle cx={12} cy={12} r={3} />
    </svg>
  );
}

export default SvgPolicy;
