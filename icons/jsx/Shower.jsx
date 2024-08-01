import * as React from "react";
const SvgShower = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={8} cy={17} r={1} fill="currentColor" />
    <circle cx={12} cy={17} r={1} fill="currentColor" />
    <circle cx={16} cy={17} r={1} fill="currentColor" />
    <path
      d="M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92z"
      fill="currentColor"
    />
    <circle cx={8} cy={20} r={1} fill="currentColor" />
    <circle cx={12} cy={20} r={1} fill="currentColor" />
    <circle cx={16} cy={20} r={1} fill="currentColor" />
  </svg>
);
export default SvgShower;
