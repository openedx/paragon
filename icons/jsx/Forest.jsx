import * as React from "react";

function SvgForest(props) {
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
        d="M16 12L9 2 2 12h1.86L0 18h7v4h4v-4h7l-3.86-6z"
        fill="currentColor"
      />
      <path
        d="M20.14 12H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgForest;
