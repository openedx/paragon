import * as React from "react";

function SvgSignalCellularConnectedNoInternet3Bar(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path fillOpacity={0.3} d="M22 8V2L2 22h16V8h4z" fill="currentColor" />
      <path
        d="M18 22V6L2 22h16zm2-12v8h2v-8h-2zm0 12h2v-2h-2v2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSignalCellularConnectedNoInternet3Bar;
