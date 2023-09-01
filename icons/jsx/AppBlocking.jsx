import * as React from "react";
function SvgAppBlocking(props) {
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
        d="M18 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-2.5 4A2.5 2.5 0 0118 9.5c.42 0 .8.11 1.15.29l-3.36 3.36c-.18-.35-.29-.73-.29-1.15zm2.5 2.5c-.42 0-.8-.11-1.15-.29l3.36-3.36c.18.35.29.73.29 1.15a2.5 2.5 0 01-2.5 2.5z"
        fill="currentColor"
      />
      <path d="M19 23v-6h-2v1H7V6h10v1h2V.94L5 1v22h14z" fill="currentColor" />
    </svg>
  );
}
export default SvgAppBlocking;
