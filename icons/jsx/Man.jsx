import * as React from "react";

function SvgMan(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M16 7H8v8h2v7h4v-7h2z" fill="currentColor" />
      <circle cx={12} cy={4} r={2} />
    </svg>
  );
}

export default SvgMan;
