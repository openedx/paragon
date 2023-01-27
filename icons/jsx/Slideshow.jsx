import * as React from "react";

function SvgSlideshow(props) {
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
        d="M10 8v8l5-4-5-4zm11-5H3v18h18V3zm-2 16H5V5h14v14z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSlideshow;
