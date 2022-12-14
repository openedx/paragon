import * as React from "react";
function SvgVideoCall(props) {
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
        d="M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgVideoCall;
