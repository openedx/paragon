import * as React from "react";

function SvgTranscribe(props) {
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
        d="M17.93 16l1.63-1.63c-2.77-3.02-2.77-7.56 0-10.74L17.93 2c-3.9 3.89-3.91 9.95 0 14zm4.99-5.05a3.317 3.317 0 010-3.89l-1.68-1.69c-2.02 2.02-2.02 5.07 0 7.27l1.68-1.69zM9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6.39 2.56C13.71 14.7 11.53 14 9 14s-4.71.7-6.39 1.56A2.97 2.97 0 001 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTranscribe;
