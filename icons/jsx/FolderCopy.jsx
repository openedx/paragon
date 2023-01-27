import * as React from "react";

function SvgFolderCopy(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M3 6H1v15h19v-2H3z" fill="currentColor" />
      <path d="M23 4h-9l-2-2H5.01L5 17h18V4z" fill="currentColor" />
    </svg>
  );
}

export default SvgFolderCopy;
