import * as React from "react";
function SvgSaveAll(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 6h11l4 4v11H6V6zm2 2h7v3H8V8zm5.5 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        fill="currentColor"
      />
      <path d="M2 2h12v2H4v10H2V2z" fill="currentColor" />
    </svg>
  );
}
export default SvgSaveAll;
