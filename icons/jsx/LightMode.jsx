import * as React from "react";

function SvgLightMode(props) {
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
        d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1-6v4h2V1h-2zm0 18v4h2v-4h-2zm12-8h-4v2h4v-2zM5 11H1v2h4v-2zm11.24 6.66l2.47 2.47 1.41-1.41-2.47-2.47-1.41 1.41zM3.87 5.28l2.47 2.47 1.41-1.41-2.47-2.47-1.41 1.41zm2.47 10.96l-2.47 2.47 1.41 1.41 2.47-2.47-1.41-1.41zM18.72 3.87l-2.47 2.47 1.41 1.41 2.47-2.47-1.41-1.41z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLightMode;
