import * as React from "react";

function SvgExploreOff(props) {
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
        d="M18 6l-2.91 6.26 5.25 5.25A9.91 9.91 0 0022 12c0-5.52-4.48-10-10-10-2.04 0-3.93.61-5.51 1.66l5.25 5.25L18 6zM2.1 4.93l1.56 1.56A9.91 9.91 0 002 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l1.56 1.56 1.41-1.41L3.51 3.51 2.1 4.93zm6.81 6.81l3.35 3.35L6 18l2.91-6.26z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgExploreOff;
