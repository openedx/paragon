import * as React from "react";

function SvgKeyboardControlKey(props) {
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
        d="M5 12l1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgKeyboardControlKey;
