import * as React from "react";

function SvgHideImage(props) {
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
        d="M21 3H5.83L21 18.17zM2.81 2.81L1.39 4.22 3 5.83V21h15.17l1.61 1.61 1.41-1.41L2.81 2.81zM6 17l3-4 2.25 3 .82-1.1 2.1 2.1H6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHideImage;
