import * as React from "react";
function SvgQuestionAnswer(props) {
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
        d="M22 6h-3v9H6v3h12l4 4V6zm-5 7V2H2v15l4-4h11z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgQuestionAnswer;
