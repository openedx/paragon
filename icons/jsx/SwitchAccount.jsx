import * as React from "react";
function SvgSwitchAccount(props) {
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
        d="M4 6H2v16h16v-2H4V6zm2-4v16h16V2H6zm8 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zM7.76 16c1.47-1.83 3.71-3 6.24-3s4.77 1.17 6.24 3H7.76z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgSwitchAccount;