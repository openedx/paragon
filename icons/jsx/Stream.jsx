import * as React from "react";
const SvgStream = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={20} cy={12} r={2} />
    <circle cx={4} cy={12} r={2} />
    <circle cx={12} cy={20} r={2} />
    <path
      d="m13.943 8.619 4.404-4.392 1.413 1.416-4.405 4.392zM8.32 9.68l.31.32 1.42-1.41-4.02-4.04h-.01l-.31-.32-1.42 1.41 4.02 4.05zm7.09 4.26L14 15.35l3.99 4.01.35.35 1.42-1.41-3.99-4.01zm-6.82.01-4.03 4.01-.32.33 1.41 1.41 4.03-4.02.33-.32z"
      fill="currentColor"
    />
    <circle cx={12} cy={4} r={2} />
  </svg>
);
export default SvgStream;
