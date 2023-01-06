import * as React from "react";

function SvgTurnedInNot(props) {
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
        d="M19 3H5.01L5 21l7-3 7 3V3zm-2 15l-5-2.18L7 18V5h10v13z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTurnedInNot;
