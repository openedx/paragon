import * as React from "react";

function SvgForwardToInbox(props) {
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
        d="M22 4H2v16h11v-2H4V8l8 5 8-5v5h2V4zm-10 7L4 6h16l-8 5zm7 4l4 4-4 4v-3h-4v-2h4v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgForwardToInbox;
