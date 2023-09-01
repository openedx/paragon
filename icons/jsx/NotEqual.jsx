import * as React from "react";
function SvgNotEqual(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M19 9.998H5v-2h14zm0 6H5v-2h14z" fill="currentColor" />
      <path d="M14.08 4.605l1.84.79-6 14-1.84-.79z" fill="currentColor" />
    </svg>
  );
}
export default SvgNotEqual;
