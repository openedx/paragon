import * as React from "react";

function SvgWoman2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M13.41 7h-2.82L7 16h3.5v6h3v-6H17z" fill="currentColor" />
      <circle cx={12} cy={4} r={2} />
    </svg>
  );
}

export default SvgWoman2;
