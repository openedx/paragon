import * as React from "react";

function SvgElectricBolt(props) {
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
        d="M15 2L2.5 13 13 14l-5 7 1 1 12.5-11L11 10l5-7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgElectricBolt;
