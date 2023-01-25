import * as React from "react";

function SvgVideoCamera(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4z" fill="currentColor" />
    </svg>
  );
}

export default SvgVideoCamera;
