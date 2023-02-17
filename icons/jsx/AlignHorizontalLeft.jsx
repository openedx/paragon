import * as React from "react";

function SvgAlignHorizontalLeft(props) {
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
        d="M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAlignHorizontalLeft;
