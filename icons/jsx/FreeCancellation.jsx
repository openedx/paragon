import * as React from "react";

function SvgFreeCancellation(props) {
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
        d="M11.21 20H5V10h14v4.38l2-2V4h-3V2h-2v2H8V2H6v2H3v18h10.21l-2-2zm5.33 2.5L13 18.96l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66zM10.41 14L12 15.59 10.59 17 9 15.41 7.41 17 6 15.59 7.59 14 6 12.41 7.41 11 9 12.59 10.59 11 12 12.41 10.41 14z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFreeCancellation;
