import * as React from "react";
function SvgBookmark(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 21V3h14v18l-7-3-7 3z" fill="currentColor" />
    </svg>
  );
}
export default SvgBookmark;
