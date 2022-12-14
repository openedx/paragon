import * as React from "react";
function SvgChatBubble(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M22 2H2v20l4-4h16V2z" fill="currentColor" />
    </svg>
  );
}
export default SvgChatBubble;
