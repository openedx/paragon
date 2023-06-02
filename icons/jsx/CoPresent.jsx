import * as React from "react";
function SvgCoPresent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M23 3H1v10h2V5h18v16h2z" fill="currentColor" />
      <circle cx={9} cy={10} r={4} />
      <path
        d="M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56A2.97 2.97 0 001 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgCoPresent;
