import * as React from "react";

function SvgFolderOff(props) {
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
        d="M12 6l-2-2H6.83L22 19.17V6zM2.1 2.1L.69 3.51 2 4.83V20h15.17l3.32 3.31 1.41-1.41z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFolderOff;
