import * as React from "react";

function SvgShuffleOn(props) {
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
        d="M1 1v22h22V1H1zm4.41 3l5.18 5.17-1.42 1.41L4 5.41 5.41 4zM20 20h-5.5l2.05-2.05-3.13-3.13 1.41-1.41 3.13 3.13L20 14.5V20zm0-10.5l-2.04-2.04L5.41 20 4 18.59 16.54 6.04 14.5 4H20v5.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShuffleOn;
