import * as React from "react";

function SvgStayCurrentLandscape(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M1 19h22V5H1v14zM19 7v10H5V7h14z" fill="currentColor" />
    </svg>
  );
}

export default SvgStayCurrentLandscape;
