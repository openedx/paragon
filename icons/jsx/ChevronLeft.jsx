import * as React from "react";

function SvgChevronLeft(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChevronLeft;
