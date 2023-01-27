import * as React from "react";

function SvgSignalCellular2Bar(props) {
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
      <path d="M14 10L2 22h12V10z" fill="currentColor" />
    </svg>
  );
}

export default SvgSignalCellular2Bar;
