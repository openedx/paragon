import * as React from "react";

function SvgModeComment(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M22 2H2v16h16l4 4z" fill="currentColor" />
    </svg>
  );
}

export default SvgModeComment;
