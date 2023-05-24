import * as React from "react";
function SvgLogout(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M5 5h7V3H3v18h9v-2H5z" fill="currentColor" />
      <path d="M21 12l-4-4v3H9v2h8v3z" fill="currentColor" />
    </svg>
  );
}
export default SvgLogout;
