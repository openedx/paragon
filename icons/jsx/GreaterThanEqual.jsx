import * as React from "react";
function SvgGreaterThanEqual(props) {
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
        d="M6.5 15.5l8.25-5.5L6.5 4.5l1-1.5L18 10 7.5 17z"
        fillRule="evenodd"
        fill="currentColor"
      />
      <path d="M18 20.998H6v-2h12z" fill="currentColor" />
    </svg>
  );
}
export default SvgGreaterThanEqual;
