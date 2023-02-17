import * as React from "react";

function SvgCommit(props) {
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
        d="M16.9 11a5 5 0 00-9.8 0H2v2h5.1a5 5 0 009.8 0H22v-2h-5.1zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCommit;
