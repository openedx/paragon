import * as React from "react";

function SvgEject(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 17h14v2H5v-2zm7-12L5.33 15h13.34L12 5z" />
    </svg>
  );
}

export default SvgEject;
