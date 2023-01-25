import * as React from "react";

function SvgPlaylistAddCheckCircle(props) {
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
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 7h7v2H7V7zm0 3h7v2H7v-2zm3 5H7v-2h3v2zm4.05 3.36l-2.83-2.83 1.41-1.41 1.41 1.41L17.59 12 19 13.41l-4.95 4.95z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlaylistAddCheckCircle;
