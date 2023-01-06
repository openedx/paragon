import * as React from "react";

function SvgFeaturedPlayList(props) {
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
        d="M23 3H1v18h22V3zm-11 8H3V9h9v2zm0-4H3V5h9v2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFeaturedPlayList;
