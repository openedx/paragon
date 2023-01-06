import * as React from "react";

function SvgSportsCricket(props) {
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
        d="M15.05 12.81L6.56 4.32a.996.996 0 00-1.41 0L2.32 7.15a.996.996 0 000 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83a.996.996 0 000-1.41zm-.709 4.946l1.414-1.414 4.243 4.243-1.414 1.414z"
        fill="currentColor"
      />
      <circle cx={18.5} cy={5.5} r={3.5} />
    </svg>
  );
}

export default SvgSportsCricket;
