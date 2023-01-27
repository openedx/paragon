import * as React from "react";

function SvgSignalCellular3Bar(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path fillOpacity={0.3} d="M2 22h20V2L2 22z" fill="currentColor" />
      <path d="M17 7L2 22h15V7z" fill="currentColor" />
    </svg>
  );
}

export default SvgSignalCellular3Bar;
