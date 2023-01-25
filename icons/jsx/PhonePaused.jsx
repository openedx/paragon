import * as React from "react";

function SvgPhonePaused(props) {
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
        d="M15 3h2v7h-2zm4 0h2v7h-2zm-5.79 14.37a15.045 15.045 0 01-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61-2.52 2.52z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPhonePaused;
