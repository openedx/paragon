import * as React from "react";
function SvgPlaylistPlay(props) {
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
        d="M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgPlaylistPlay;
