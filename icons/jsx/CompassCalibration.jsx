import * as React from "react";
const SvgCompassCalibration = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={17} r={4} fill="currentColor" />
    <path
      d="M12 3C8.1 3 4.56 4.59 2 7.15l5 5a7.06 7.06 0 0 1 10-.01l5-5C19.44 4.59 15.9 3 12 3z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCompassCalibration;
