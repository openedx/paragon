import * as React from "react";

function SvgAddModerator(props) {
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
        d="M17 10c1.08 0 2.09.25 3 .68V5l-8-3-8 3v6.09c0 5.05 3.41 9.76 8 10.91.03-.01.05-.02.08-.02A6.996 6.996 0 0110 17c0-3.87 3.13-7 7-7z"
        fill="currentColor"
      />
      <path
        d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm3 5.5h-2.5V20h-1v-2.5H14v-1h2.5V14h1v2.5H20v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAddModerator;
