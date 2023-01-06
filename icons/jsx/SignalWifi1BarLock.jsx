import * as React from "react";

function SvgSignalWifi1BarLock(props) {
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
        d="M23 16v-1.34c0-1.47-1.2-2.75-2.66-2.66A2.484 2.484 0 0018 14.5V16h-1v6h7v-6h-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z"
        fill="currentColor"
      />
      <path
        fillOpacity={0.3}
        d="M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z"
        fill="currentColor"
      />
      <path
        d="M15.5 14.5c0-.23.04-.46.07-.68-.92-.43-2.14-.82-3.57-.82-3 0-5.1 1.7-5.3 1.9l5.3 6.6 3.5-4.36V14.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSignalWifi1BarLock;
