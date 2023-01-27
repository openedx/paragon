import * as React from "react";

function SvgBookmarks(props) {
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
        d="M19 18l2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBookmarks;
