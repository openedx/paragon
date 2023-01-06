import * as React from "react";

function SvgArrowOutward(props) {
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
        d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowOutward;
