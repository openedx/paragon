import * as React from "react";

function SvgEditCalendar(props) {
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
        d="M12 22H3V4h3V2h2v2h8V2h2v2h3v8h-2v-2H5v10h7v2zm10.13-5.01l1.41-1.41-2.12-2.12-1.41 1.41 2.12 2.12zm-.71.71l-5.3 5.3H14v-2.12l5.3-5.3 2.12 2.12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEditCalendar;
