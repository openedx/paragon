import * as React from "react";

function SvgPhoneMissed(props) {
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
        d="M23.32 16.67a16.413 16.413 0 00-11.31-4.51c-4.39 0-8.37 1.72-11.31 4.51l-.69.69L3.65 21l3.93-2.72-.01-3.49c1.4-.45 2.9-.7 4.44-.7 1.55 0 3.04.24 4.44.7l-.01 3.49L20.37 21l3.64-3.64c0-.01-.52-.52-.69-.69zM7 6.43l4.94 4.94 7.07-7.07-1.41-1.42-5.66 5.66L8.4 5H11V3H5v6h2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPhoneMissed;
