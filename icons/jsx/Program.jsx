import * as React from "react";

function SvgProgram(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.263 3H4v11.842h1.466V4.48h8.797V3z" fill="currentColor" />
      <path
        d="M19 6.158H7.158v15H19v-15zm-10.362 1.5h3.7v6l-1.85-1.125-1.85 1.125v-6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgProgram;
