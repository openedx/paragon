import * as React from "react";
function SvgLessThanEqual(props) {
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
        d="M17.5 15.5L9.25 10l8.25-5.5-1-1.5L6 10l10.5 7z"
        fillRule="evenodd"
        fill="currentColor"
      />
      <path d="M18 20.998H6v-2h12z" fill="currentColor" />
    </svg>
  );
}
export default SvgLessThanEqual;
