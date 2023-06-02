import * as React from "react";
function SvgTypeSpecimen(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M4 6H2v16h16v-2H4z" fill="currentColor" />
      <path
        d="M22 2H6v16h16V2zm-5.37 12.5l-.8-2.3H12.2l-.82 2.3H9.81l3.38-9h1.61l3.38 9h-1.55z"
        fill="currentColor"
      />
      <path d="M13.96 7.17l-1.31 3.72h2.69l-1.3-3.72z" fill="currentColor" />
    </svg>
  );
}
export default SvgTypeSpecimen;
