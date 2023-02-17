import * as React from "react";

function SvgMarkChatUnread(props) {
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
        d="M22 6.98V18H6l-4 4V2h12.1A5.002 5.002 0 0019 8c1.13 0 2.16-.39 3-1.02zM16 3c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMarkChatUnread;
