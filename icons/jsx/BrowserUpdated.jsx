import * as React from "react";
function SvgBrowserUpdated(props) {
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
        d="M22 13v5h-5l1 1v2H6v-2l1-1H2V3h10v2H4v11h16v-3h2zm-7 2l-5-5h4V3h2v7h4l-5 5z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgBrowserUpdated;
