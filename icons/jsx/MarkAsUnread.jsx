import * as React from "react";
function SvgMarkAsUnread(props) {
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
        d="M16.23 7h4.12L10.5 2 2 6.21V17h2V7.4L10.5 4z"
        fill="currentColor"
      />
      <path
        d="M5 8v13h17V8H5zm15 4l-6.5 3.33L7 12v-2l6.5 3.33L20 10v2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgMarkAsUnread;
