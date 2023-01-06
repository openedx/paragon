import * as React from "react";

function SvgNewLabel(props) {
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
        d="M21 12l-4.97 7H12v-6H9v-3H3V5h13.03L21 12zm-11 3H7v-3H5v3H2v2h3v3h2v-3h3v-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNewLabel;
