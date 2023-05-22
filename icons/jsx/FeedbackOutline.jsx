import * as React from "react";
function SvgFeedbackOutline(props) {
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
        d="M22 2H2.01v2L2 22l4-4h16V4 2zm-2 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2v-2zm0-6h2v4h-2V6z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgFeedbackOutline;
