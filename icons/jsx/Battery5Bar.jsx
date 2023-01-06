import * as React from "react";

function SvgBattery5Bar(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M17 4v18H7V4h3V2h4v2h3zm-2 2H9v4h6V6z" fill="currentColor" />
    </svg>
  );
}

export default SvgBattery5Bar;
