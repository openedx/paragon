import * as React from "react";

function SvgPublicOff(props) {
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
        d="M11 8.17L6.49 3.66A9.91 9.91 0 0112 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46A7.842 7.842 0 0020 12c0-3.35-2.07-6.22-5-7.41V5c0 1.1-.9 2-2 2h-2v1.17zm10.19 13.02l-1.41 1.41-2.27-2.27A9.839 9.839 0 0112 22C6.48 22 2 17.52 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.39 18.38zM11 18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.08 3.05 7.44 7 7.93V18z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPublicOff;
