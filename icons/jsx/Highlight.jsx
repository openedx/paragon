import * as React from "react";
function SvgHighlight(props) {
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
        d="M15 16l-4 4h10v-4h-6zM12.06 7.19L3 16.25V20h3.75l9.06-9.06-3.75-3.75zM15.67 3.584l-2.538 2.539L16.88 9.87l2.538-2.538-3.747-3.748z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgHighlight;
