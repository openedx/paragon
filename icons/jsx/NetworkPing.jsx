import * as React from "react";
function SvgNetworkPing(props) {
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
        d="M12 14.67L3.41 6.09 2 7.5l8.5 8.5H4v2h16v-2h-6.5l5.15-5.15A2.5 2.5 0 1019.5 6 2.5 2.5 0 0017 8.5c0 .35.07.67.2.97l-5.2 5.2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgNetworkPing;
