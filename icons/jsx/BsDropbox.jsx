import * as React from "react";
function SvgBsDropbox(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      className="bs-dropbox_svg__bi bs-dropbox_svg__bi-dropbox"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        d="M8.01 4.555L4.005 7.11 8.01 9.665 4.005 12.22 0 9.651l4.005-2.555L0 4.555 4.005 2 8.01 4.555zm-4.026 8.487l4.006-2.555 4.005 2.555-4.005 2.555-4.006-2.555zm4.026-3.39l4.005-2.556L8.01 4.555 11.995 2 16 4.555 11.995 7.11 16 9.665l-4.005 2.555L8.01 9.651z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgBsDropbox;
