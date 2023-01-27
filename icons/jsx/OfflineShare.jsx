import * as React from "react";

function SvgOfflineShare(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M6 5H4v18h12v-2H6z" fill="currentColor" />
      <path d="M20 1H8v18h12V1zm-2 14h-8V5h8v10z" fill="currentColor" />
      <path
        d="M12.5 10.25h2V12L17 9.5 14.5 7v1.75H11V12h1.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgOfflineShare;
