import * as React from "react";

function SvgBorderColor(props) {
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
        d="M22 24H2v-4h20v4zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75l9.06-9.06zm4.82 2.68l-3.75-3.75 2.53-2.54 3.75 3.75-2.53 2.54z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBorderColor;
