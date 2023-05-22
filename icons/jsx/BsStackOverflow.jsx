import * as React from "react";
function SvgBsStackOverflow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      className="bs-stack-overflow_svg__bi bs-stack-overflow_svg__bi-stack-overflow"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z"
        fill="currentColor"
      />
      <path
        d="M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0L9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377l5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344l6.985 1.469.294-1.398-6.985-1.468-.294 1.397z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgBsStackOverflow;
