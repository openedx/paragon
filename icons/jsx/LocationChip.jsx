import * as React from "react";
const SvgLocationChip = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M360-509.53Q360-453 398-411t82 78q44-36 82-78.19 38-42.18 38-98.74Q600-560 564.89-595q-35.11-35-85-35T395-594.79q-35 35.22-35 85.26ZM480-480q-17 0-28.5-11.5T440-520q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520q0 17-11.5 28.5T480-480ZM320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760h320q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200H320Zm0-60h320q92 0 156-64t64-156q0-92-64-156t-156-64H320q-92 0-156 64t-64 156q0 92 64 156t156 64Zm160-220Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLocationChip;
