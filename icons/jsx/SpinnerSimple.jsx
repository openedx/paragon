import * as React from "react";
function SvgSpinnerSimple(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 12A10 10 0 116.122 3.91l1.176 1.618A8 8 0 1020 12h2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgSpinnerSimple;
