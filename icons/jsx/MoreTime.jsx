import * as React from "react";

function SvgMoreTime(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M10 8v6l4.7 2.9.8-1.2-4-2.4V8z" fill="currentColor" />
      <path
        d="M17.92 12A6.957 6.957 0 0111 20c-3.9 0-7-3.1-7-7s3.1-7 7-7c.7 0 1.37.1 2 .29V4.23c-.64-.15-1.31-.23-2-.23-5 0-9 4-9 9s4 9 9 9a8.963 8.963 0 008.94-10h-2.02z"
        fill="currentColor"
      />
      <path d="M20 5V2h-2v3h-3v2h3v3h2V7h3V5z" fill="currentColor" />
    </svg>
  );
}

export default SvgMoreTime;
