import * as React from "react";

function SvgCollectionsBookmark(props) {
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
        d="M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zm-2 10l-2.5-1.5L15 12V4h5v8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCollectionsBookmark;
