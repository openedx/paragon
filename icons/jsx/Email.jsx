import * as React from "react";
function SvgEmail(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 4H2v16h20V4zm-2 4l-8 5-8-5V6l8 5 8-5v2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgEmail;
