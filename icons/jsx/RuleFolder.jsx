import * as React from "react";

function SvgRuleFolder(props) {
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
        d="M22 6H12l-2-2H2v16h20V6zM7.83 16L5 13.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L7.83 16zm9.58-3L19 14.59 17.59 16 16 14.41 14.41 16 13 14.59 14.59 13 13 11.41 14.41 10 16 11.59 17.59 10 19 11.41 17.41 13z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRuleFolder;
