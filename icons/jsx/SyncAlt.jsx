import * as React from "react";

function SvgSyncAlt(props) {
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
        d="M18 12l4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSyncAlt;
