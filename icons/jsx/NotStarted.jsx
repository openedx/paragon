import * as React from "react";
function SvgNotStarted(props) {
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
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm1 0V8l5 4-5 4z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgNotStarted;