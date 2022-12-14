import * as React from "react";
function SvgNightShelter(props) {
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
        d="M12 3L4 9v12h16V9l-8-6zm-2.25 9.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM17 18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H17v6z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgNightShelter;
