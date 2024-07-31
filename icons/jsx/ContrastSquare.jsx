import * as React from "react";
const SvgContrastSquare = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M120-120v-720h720v720H120Zm60-60h600v-600L180-180Zm44-430h76v76h50v-76h76v-50h-76v-76h-50v76h-76v50Zm496 300H494v-50h226v50Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgContrastSquare;
