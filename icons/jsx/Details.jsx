import * as React from "react";
function SvgDetails(props) {
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
        d="M12 3L2 21h20L12 3zm1 5.92L18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgDetails;
