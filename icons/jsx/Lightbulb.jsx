import * as React from "react";

function SvgLightbulb(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.45 5.41L19.04 4l-1.79 1.8 1.41 1.41 1.79-1.8zM13 1.5h-2v2.95h2V1.5zm7 11.95h3v-2h-3v2zM9 17.64v4.81h6v-4.81c1.79-1.04 3-2.97 3-5.19 0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19zm-5-4.19v-2H1v2h3zm2.76-7.66l-1.79-1.8L3.56 5.4l1.8 1.79 1.4-1.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLightbulb;
