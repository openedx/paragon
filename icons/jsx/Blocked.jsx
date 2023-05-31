import * as React from "react";
function SvgBlocked(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm0 14.4A6.398 6.398 0 011.6 8c0-1.48.504-2.84 1.352-3.92l8.968 8.968A6.322 6.322 0 018 14.4zm5.048-2.48L4.08 2.952A6.322 6.322 0 018 1.6c3.536 0 6.4 2.864 6.4 6.4 0 1.48-.504 2.84-1.352 3.92z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgBlocked;
