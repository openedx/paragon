import * as React from "react";

function SvgSports(props) {
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
        d="M11.23 6c-1.66 0-3.22.66-4.36 1.73C6.54 6.73 5.61 6 4.5 6a2.5 2.5 0 000 5c.21 0 .41-.03.61-.08-.05.25-.09.51-.1.78a6.006 6.006 0 006.68 6.27c2.55-.28 4.68-2.26 5.19-4.77.15-.71.15-1.4.06-2.06-.09-.6.38-1.13.99-1.13H22V6H11.23zM4.5 9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm6.5 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
        fill="currentColor"
      />
      <circle cx={11} cy={12} r={2} />
    </svg>
  );
}

export default SvgSports;