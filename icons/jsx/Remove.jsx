import * as React from "react";
function SvgRemove(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19 13H5v-2h14v2z" fill="currentColor" />
    </svg>
  );
}
export default SvgRemove;
