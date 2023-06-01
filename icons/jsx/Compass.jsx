import * as React from "react";
function SvgCompass(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L15.5 4.5 7.99 7.99 4.5 15.5zM10 8.9c.61 0 1.1.49 1.1 1.1 0 .61-.49 1.1-1.1 1.1-.61 0-1.1-.49-1.1-1.1 0-.61.49-1.1 1.1-1.1z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgCompass;
