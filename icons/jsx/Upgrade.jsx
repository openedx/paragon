import * as React from "react";

function SvgUpgrade(props) {
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
        d="M16 18v2H8v-2h8zM11 7.99V16h2V7.99h3L12 4 8 7.99h3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUpgrade;
