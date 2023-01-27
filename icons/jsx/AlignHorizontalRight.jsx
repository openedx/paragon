import * as React from "react";

function SvgAlignHorizontalRight(props) {
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
        d="M20 2h2v20h-2V2zM2 10h16V7H2v3zm6 7h10v-3H8v3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAlignHorizontalRight;
