import * as React from "react";

function SvgToys(props) {
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
        d="M18.72 10l-2-6H7.28L5.81 8.4 4.41 7l1-1L4 4.59.59 8 2 9.41l1-1L4.59 10H2v8h2.18A3 3 0 007 20c1.3 0 2.4-.84 2.82-2h4.37c.41 1.16 1.51 2 2.82 2a3 3 0 002.82-2H22v-8h-3.28zM7 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4-8H7.41l-.02-.02L8.72 6H11v4zm2 0V6h2.28l1.33 4H13zm4 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgToys;
